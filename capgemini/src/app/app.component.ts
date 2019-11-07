import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges, DoCheck {
  title = 'capgemini';
constructor(){
  console.log("app component constructor")
}

  ngOnInit(){
    console.log("app component initialized")
  }
  ngOnChanges(){
    console.log("onchanges running")
  }
  ngDoCheck(){
    console.log("Do check is running")
  }
}
