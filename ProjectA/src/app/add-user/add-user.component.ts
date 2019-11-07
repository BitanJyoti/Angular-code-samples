import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private userService : UsersService) { }

  submitForm(form: NgForm ){
    console.log(form.value);
    this.userService.users.push(form.value);
    form.reset();
  }
  ngOnInit() {
  }

}
