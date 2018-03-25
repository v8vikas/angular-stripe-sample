import { Component, OnInit, ChangeDetectorRef, ElementRef, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';

declare var stripe: any;
declare var elements: any;

@Component({
  selector: 'app-payment-widget',
  templateUrl: './payment-widget.component.html',
  styleUrls: ['./payment-widget.component.css']
})
export class PaymentWidgetComponent {
    @ViewChild('cardInfo') cardInfo: ElementRef;
    @ViewChild('checkout') checkout: ElementRef;

    card: any;
    cardHandler = this.onChange.bind(this);
    error: string;

    constructor(private cd: ChangeDetectorRef) {}

    ngAfterViewInit() {
        const style = {
            base: {
                lineHeight: '24px',
                fontFamily: 'monospace',
                fontSmoothing: 'antialiased',
                fontSize: '19px',
                '::placeholder': {
                    color: 'red'
                }
            }
        };

        this.card = elements.create('card', { style });
        this.card.mount(this.cardInfo.nativeElement);

        this.card.addEventListener('change', this.cardHandler);
    }

    ngOnDestroy() {
        this.card.removeEventListener('change', this.cardHandler);
        this.card.destroy();
    }

    onChange({ error }) {
        if (error) {
          this.error = error.message;
        } else {
          this.error = null;
        }
        this.cd.detectChanges();
    }

    async onSubmit(form: NgForm) {
        const { token, error } = await stripe.createToken(this.card);

        if (error) {
          console.log('Something is wrong:', error);
        } else {
          console.log('Success!', token);
          // ...send the token to the your backend to process the charge
        }
    }

}
