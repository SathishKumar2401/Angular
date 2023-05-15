import { Injectable } from '@angular/core';
import { HttpRoutingService } from './http-routing.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpRoutingService) { }

  getEmployees() {
    return this.http.getMethod('getEmployees');
  }

  getDesignation() {
    return this.http.getMethod('getDesignation');
  }
}
