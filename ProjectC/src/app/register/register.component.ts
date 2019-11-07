import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  error: string = null;
  
  constructor(private auth: AuthService) { }

  register(form: NgForm) {
    this.auth.register({...form.value, returnSecureToken: true }).subscribe(resData=>{
      console.log(resData);
      this.error= null;
      form.reset();
      
    },err=>{
      console.log(err);
      this.error = err.error.error.message;
      
    });
  }

  ngOnInit() {
  }

}
