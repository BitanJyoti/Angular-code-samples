import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {

  constructor(private userService : UsersService) { }

  deleteUser(user)
  {
    let index = this.userService.users.indexOf(user);
    this.userService.users.splice(index,1);
  }

  ngOnInit() {
  }

}
