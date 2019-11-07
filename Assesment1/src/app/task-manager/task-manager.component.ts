import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task-service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {

  isLoading =false;

  


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
    this.selectedTask= task;
  }

  callGetData() {
    this.taskService.getData();
  }

  updateTask(updateTaskForm: NgForm) {
    this.taskService.putData(updateTaskForm.value).subscribe(resData=> {
      console.log(resData);
      updateTaskForm.reset();
    }, err=> {
      console.log(err);
    });
  }

  deleteTask(task) {
    this.taskService.deleteData(task).subscribe(resData => {
      console.log(resData);
      this.taskService.getData();
    }, err=> {
      console.log(err);
    })
  }
  addUser(addUserForm : NgForm){

    this.isLoading = true;

    this.taskService.postData(addUserForm.value).subscribe(resData=> {
      console.log(resData);
      this.isLoading = false;
      addUserForm.reset();
    }, err => {
      console.log(err);
      this.isLoading = false;
    })
  }

  ngOnInit() {
  }

}

