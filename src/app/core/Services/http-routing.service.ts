import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpRoutingService {

  apiurl = environment.apiurl

  constructor(private httpService: HttpClient) { }

  getMethod(url: string){
    return this.httpService.get(this.apiurl + 'v1/' + url)
  }

  postMethod(url: string,data: any){
    return this.httpService.post(this.apiurl + 'v1/' + url,data)
  }
}
