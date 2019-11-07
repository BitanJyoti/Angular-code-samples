import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { AuthResponse } from './auth-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   
  
  
  isLoggedIn: boolean;

  user = new Subject<AuthResponse>();

  constructor(private http: HttpClient) { }


  login(userDetails) {
    return this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCUtJBVFXqZn-RvGM1ccHbwLXnhRq-Wifs', userDetails);
  }
  register(userDetails) {
    return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCUtJBVFXqZn-RvGM1ccHbwLXnhRq-Wifs', userDetails);
  }




}
