import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { AuthResponse } from './auth-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  isLoggedIn: boolean;

  user = new Subject<AuthResponse>();

  login(userDetails) {
    // tslint:disable-next-line: max-line-length
    return this.http.post<AuthResponse>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC5Qz_0kVjXrWM5v98mV53pf480A1n7hNg',
      userDetails
    );
  }

  register(userDetails) {
    // tslint:disable-next-line: max-line-length
    return this.http.post(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC5Qz_0kVjXrWM5v98mV53pf480A1n7hNg',
      userDetails
    );
  }
}
