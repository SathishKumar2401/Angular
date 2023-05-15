import { Injectable } from '@angular/core';
import { HttpRoutingService } from './http-routing.service';
import { BehaviorSubject, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpRoutingService) { }

  user = new BehaviorSubject<any>(null);

  signIn(data: any) {
    return this.http.postMethod('login', data).pipe(map((res: any) => {
      if (res && res['user'] && res['token']) {
        this.user.next(res['user']);
        sessionStorage.setItem('Currentuser', JSON.stringify({ token: res['token'], refreshToken: res['refreshToken'] }))
      }
      return res;
    }), catchError(err => {
      return throwError(err);
    }));
  }

  OnLogout() {
    sessionStorage.removeItem('Currentuser');
    return true
  }

}
