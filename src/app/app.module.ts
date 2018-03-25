import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatDialogModule
} from '@angular/material';

import { FormsModule } from '@angular/forms';
import { Module as StripeModule } from "stripe-angular"

import { AppComponent } from './app.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PaymentWidgetComponent } from './modals/payment-widget/payment-widget.component';


@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent,
    PaymentWidgetComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    FormsModule,
    StripeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    PaymentWidgetComponent
  ]
})
export class AppModule { }
