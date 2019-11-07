import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskService } from '../task-service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  selectedTask = {
    name: null,
    imgurl: null,
    description: null,
    id: null
  };

  constructor(private taskService: TaskService) {
    this.taskService.getData();
  }

  selectTask(task) {
    this.selectedTask = task;
  }

  callGetData() {
    this.taskService.getData();
  }

  updateTask(updateTaskForm: NgForm) {
    this.taskService.putData(updateTaskForm.value).subscribe(resData => {
      console.log(resData);
      updateTaskForm.reset();
    }, err => {
      console.log(err);
    });
  }

  deleteTask(task) {
    this.taskService.deleteData(task).subscribe(resData => {
      console.log(resData);
      this.taskService.getData();
    }, err => {
      console.log(err);
    })
  }

  ngOnInit() {
  }

}

