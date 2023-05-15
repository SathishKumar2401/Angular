import { Component } from '@angular/core';
import { EmployeeService } from '../../Services/employee.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {

  constructor(private employeeservice: EmployeeService) { }

  ELEMENT_DATA!: any[];
  data!:any
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'dateOfBirth', 'action'];
  action=["delete",'edit'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  ngOnInit(): void {
    this.employeeservice.getEmployees().subscribe((res: any) => {
      if (res) {
        console.log('response', res);
        this.ELEMENT_DATA = res.response;
        this.data={
          displayedColumns : this.displayedColumns,
          data:this.ELEMENT_DATA,
          action:this.action
        }
        this.dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
      }
    })
  }

}


