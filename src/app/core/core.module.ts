import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { MaterialModule } from '../material/material.module';
import { HomeComponent } from './Components/home/home.component';
import { EmployeeComponent } from './Components/employee/employee.component';
import { DepartmentComponent } from './Components/department/department.component';
import { TableComponent } from './Components/table/table.component';
import { CustomtimePipe } from './Services/customtime.pipe';
import { CommentsComponent } from './Components/comments/comments.component';
import { CommentboxComponent } from './Components/commentbox/commentbox.component';
import { ChildboxComponent } from './Components/childbox/childbox.component';
import { DatacontainerDirective, PostComponent } from './Components/post/post.component';



@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    EmployeeComponent,
    DepartmentComponent,
    TableComponent,
    CustomtimePipe,
    CommentsComponent,
    CommentboxComponent,
    ChildboxComponent,
    PostComponent,
    DatacontainerDirective
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ]
})
export class CoreModule { }
