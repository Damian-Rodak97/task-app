import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Task } from '../home/Task.class';
import { TaskList } from '../home/tasklist.class';


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
  addTaskList() {
    // tslint:disable-next-line:prefer-const
    let body = {
      Name: this.formModel.value.Name
    };
    return this.http.post(this.BaseURI + '/TaskList/AddTaskList', body);
  }
  // tslint:disable-next-line:typedef
  addTask(task: Task) {
    return this.http.post(this.BaseURI + '/Task/AddTask', task);
  }
  // tslint:disable-next-line:typedef
  getTaskList() {
    return this.http.get(this.BaseURI + '/TaskList/TaskList');
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
  // tslint:disable-next-line:typedef
  deleteTaskList(taskList: TaskList) {
    return this.http.post(this.BaseURI + '/TaskList/DeleteTaskList', taskList);
  }
}
