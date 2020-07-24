import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Task } from '../home/Task.class';



@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private fb: FormBuilder, private http: HttpClient) { }

  readonly BaseURI = 'https://localhost:44393/api';
  formModel = this.fb.group({
    Name: ['', Validators.required]
  });

  // tslint:disable-next-line:typedef
  addTask(task: Task) {
    return this.http.post(this.BaseURI + '/Task/AddTask', task);
  }

  // tslint:disable-next-line:typedef
  getTasksForList(taskListId) {
    // return this.http.get(this.BaseURI + '/Task/TasksForList', taskListId);
    return this.http.get(`${this.BaseURI}/Task/TasksForList/${taskListId}`);
  }

  // tslint:disable-next-line:typedef
  deleteTask(task: Task) {
    return this.http.post(this.BaseURI + '/Task/DeleteTask', task);
  }
}
