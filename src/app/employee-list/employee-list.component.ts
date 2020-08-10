import { EmployeeDetailsComponent } from './../employee-details/employee-details.component';
import { Observable } from "rxjs";
import { EmployeeService } from "./../employee.service";
import { Employee } from "./../employee";
import { Component, OnInit } from "@angular/core";

import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"]
})
export class EmployeeListComponent implements OnInit {
  employees: Observable<Employee[]>;
  name: any;
data: any;
  constructor(private route: ActivatedRoute,private employeeService: EmployeeService,
    private router: Router) {}

    ngOnInit(): void {
      console.log(history.state.data)
     this.data=history.state.data;
      
   }
  
    }


 