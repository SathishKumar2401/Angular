import { Component } from '@angular/core';
import { EmployeeService } from '../../Services/employee.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent {

  constructor(private employeeservice: EmployeeService,
    private route: Router) { }

  ELEMENT_DATA!: any[];
  data!:any
  action=["delete",'edit'];
  displayedColumns: string[] = ['id', 'name', 'modified', 'action'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  ngOnInit(): void {
    this.employeeservice.getDesignation().subscribe((res: any) => {
      if (res) {
        console.log('response', res);
        this.ELEMENT_DATA = res.designation;
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
