import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PaymentWidgetComponent } from '../../modals/payment-widget/payment-widget.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  public token;
  public inProgress: boolean = false;
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openPaymentDialog(): void {
    this.token = null;
    this.inProgress = true;
    let dialogRef = this.dialog.open(PaymentWidgetComponent, {
      width: '550px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.inProgress = false;
      this.token = result;
    });
  }

}
