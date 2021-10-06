import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

import { Title } from "../model/Title";
import { Product } from "../model/product";

@Component({
  selector: 'app-payment-frequency',
  templateUrl: './payment-frequency.component.html',
  styleUrls: ['./payment-frequency.component.css']
})
export class PaymentFrequencyComponent implements OnInit {
  
  titles: Title[] = [
    {value: '0', viewValue: 'Mr.'},
    {value: '1', viewValue: 'Mrs.'},
    {value: '2', viewValue: 'Ms.'}
  ];


  product: Product[] = [
    {value: '0', viewValue: 'Product A'},
    {value: '1', viewValue: 'Product B'},
    {value: '2', viewValue: 'Product C'}
  ];




  TitleValue: any ;
  Amount: any = "0.00";

  ProductValue: any;

  constructor(private router: Router) { }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
 
  ngOnInit(): void {
  }

  handleClick(event: Event) {
    console.log("Click!", event);
    this.router.navigate(['/customer']);
  }

  formatLabel(value: number) {
    if (value >= 15000) {
      this.Amount = Math.round(value / 100) ;
      return    Math.round(value / 100) ;
    }
    return value;
  }

  

}



