import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() dataFromParent;

  @Output() childEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.childEvent.emit("This is the data from child");
  }
  sendDataToParent(childData) {
    this.childEvent.emit(childData);
  }

}
