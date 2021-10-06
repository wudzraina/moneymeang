import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentFrequencyComponent } from './payment-frequency/payment-frequency.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'payment' },
  { path: 'payment', component: PaymentFrequencyComponent},
  { path: 'customer', component: CustomerComponent},
  { path: 'detail', component: CustomerDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
