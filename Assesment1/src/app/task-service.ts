import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks = [];
  api = 'https://angular-http-72bd2.firebaseio.com/';
  taskService: any;
  id;

  constructor(private http: HttpClient) { }


  postData(task) {
    return this.http.post(`${this.api}tasks.json`, task);
  }


  putData(task) {

    return this.http.put(`${this.api}this.tasks/${task.id}.json`, task)

  }

  deleteData(task) {
    return this.http.delete(`${this.api}tasks/${task.id}.json`);
  }

  callGetData() {

    this.taskService.getData();
  }


  getData() {
    this.http.get(`${this.api}tasks.json`).pipe(map(resData => {

      let tasks = [];


      for (let key in resData) {
        tasks.push({ ...resData[key], id: key });
      }
      return tasks;

    })).subscribe(data => {
      this.tasks = data;
      console.log(this.tasks);
    })
  }
}
