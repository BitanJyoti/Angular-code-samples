import { Component, OnInit } from '@angular/core';
import { SampleService } from '../sample.service';
import { DemoService } from '../demo.service';
import { User } from '../users';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  constructor(private sampleService: SampleService, private demoService: DemoService) {
    console.log(this.sampleService.company);
    console.log(this.demoService.color);
   }

  ngOnInit() {
    
  }

}
