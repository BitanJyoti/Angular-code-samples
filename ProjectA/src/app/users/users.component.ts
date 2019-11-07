import { Component, OnInit } from '@angular/core';
import { User } from '../users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  flag = true;
  color = 'red';
  users: User[] = [
    new User('bitan','bitan@gmail.com',3576567),
    new User('soham','dds@gmail.com',3572323),
    new User('souvik','bigf@gmail.com',357332),
    new User('ashley','bitfjodf@gmail.com',357121),
    new User('rohit','bitafds@gmail.com',3571212)

  ]
  classes = ['btn btn-primary'];

  constructor() { }
  deleteUser(user: User) {
    let index = this.users.indexOf(user);
    this.users.splice(index,1);
  }

  ngOnInit() {
  }

}
