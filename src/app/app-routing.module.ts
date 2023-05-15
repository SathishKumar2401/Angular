import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './auth/components/signin/signin.component';
import { NavbarComponent } from './core/Components/navbar/navbar.component';
import { HomeComponent } from './core/Components/home/home.component';
import { EmployeeComponent } from './core/Components/employee/employee.component';
import { DepartmentComponent } from './core/Components/department/department.component';
import { CommentsComponent } from './core/Components/comments/comments.component';

const routes: Routes = [
  { path: 'signin', component: SigninComponent  },
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  {
    path: 'app', component: NavbarComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'employee', component: EmployeeComponent },
      { path: 'department', component: DepartmentComponent },
      { path: 'comments', component: CommentsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
