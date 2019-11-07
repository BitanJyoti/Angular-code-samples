import { Component, OnInit, resolveForwardRef } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  error: string = null;
  constructor(private auth: AuthService, private router: Router) { }

  login(form: NgForm) {
    this.auth.login({ ...form.value, returnSecureToken: true }).subscribe(resData => {
      console.log(resData);
      this.error = null;
      form.reset();
      this.router.navigateByUrl('/');
      this.auth.user.next(resData);
    }, err => {
      console.log(err);
      this.error = err.error.error.message;
    });
  }
  ngOnInit() {
  }

}

