import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';




@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  TitleValue: any ;


  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  handleClick(event: Event) {
    console.log("Click!", event);
    this.router.navigate(['/customer']);
  }


  titles: Title[] = [
    
    {value: '0', viewValue: 'Mr.'},
    {value: '1', viewValue: 'Mrs.'},
    {value: '2', viewValue: 'Ms.'}
  ];

}
interface Title {
  value: string;
  viewValue: string;
}

