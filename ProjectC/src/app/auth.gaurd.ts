import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn : 'root'
})
export class AuthGuard implements CanActivate{
    constructor(private auth : AuthService){}

    canActivate(): boolean{
        return this.auth.isLoggedIn;
    }
}