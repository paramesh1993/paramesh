import { EmployeeService } from './../employee.service';
import { Employee } from './../employee';
import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import { of } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  submitted = false;
  orders = [];
payments = [];
  form: FormGroup;

  constructor( private router: Router,private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      orders: ['']
    });

    // async orders
    of(this.getOrders()).subscribe(orders => {
      this.orders = orders;
      this.form.controls.orders.patchValue(this.orders[0].id);
    });

  // async orders
    of(this.getPayments()).subscribe(payments => {
      this.payments = payments;
      this.form.controls.orders.patchValue(this.payments[0].id);
    });
    // synchronous orders
    // this.orders = this.getOrders();
    // this.form.controls.orders.patchValue(this.orders[0].id);
  }

  getOrders() {
    return [
      { id: '1', name: 'order 1' },
      { id: '2', name: 'order 2' },
      { id: '3', name: 'order 3' },
      { id: '4', name: 'order 4' }
    ];
  }
  getPayments() {
    return [
      { id: '1', name: 'google pay' },
      { id: '2', name: 'paytm' },
      { id: '3', name: 'phonepay' }     
    ];
  }

  ngOnInit() {
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
  }

  onNavToOrderDetails() {
    console.log(this.employee);
    this.router.navigate(['/employees'], { state: {data: this.employee} });
 }

  
}
