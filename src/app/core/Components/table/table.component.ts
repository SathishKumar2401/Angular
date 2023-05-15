import { Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  constructor() { }

  @ViewChild(MatPaginator, {static: false}) paginator!: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort!: MatSort;
  // displayedColumns
  // @Input() tableData: any;
  // datasource
  @Input() Data: any;
  actions!: any
  tableData!: any;
  data!: any
  ngOnInit() {
    setTimeout(() => {
  console.log("Data", this.Data);
  this.tableData = this.Data.displayedColumns;
  this.actions = this.Data.action;
  this.data = (this.Data.data) ;
  this.data =  new MatTableDataSource(this.data);

      console.log("data", this.tableData, this.actions);
      this.data.paginator = this.paginator;
      this.data.sort = this.sort;
    }, 1000)

  }

  ngAfterViewInit() {
    setTimeout(()=>{
      this.data.paginator = this.paginator;
      this.data.sort = this.sort;
    },1000)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.data.filter = filterValue.trim().toLowerCase();
  }
}


