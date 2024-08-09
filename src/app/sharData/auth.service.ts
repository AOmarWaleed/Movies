import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import jwt_decode from "jwt-decode";
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor(private _httpClient: HttpClient, private _router: Router) {
    if (localStorage.getItem('token')) {
      this.getUserData();
    }
  }


  getUserData() {
    let token = localStorage.getItem('token');
    var decoded = jwt_decode(JSON.stringify(token));
    this.userData.next(decoded);

  }

  signup(data: object): Observable<any> {
    return this._httpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, data);
  }

  login(data: object): Observable<any> {
    return this._httpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, data);
  }

  logout() {
    localStorage.removeItem('token');
    this.userData.next(null);
    this._router.navigate(['/login']);
  }


}
