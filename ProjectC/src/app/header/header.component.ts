import { Component, OnInit, DoCheck } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {
 

  constructor(private auth: AuthService, private router: Router) {
    this.auth.user.subscribe(data=> {
      if(data) {
        localStorage.setItem('token',data.idToken);
      }else{
        localStorage.clear();
      }
    });
   }
   ngDoCheck(){
     if(localStorage.getItem('token')){
       this.auth.isLoggedIn = true;

     }else {
       this.auth.isLoggedIn = false;
     }
   }
   logout(){
     this.auth.user.next(null);
     this.router.navigateByUrl('/login');
   }

  ngOnInit() {
  }

}
