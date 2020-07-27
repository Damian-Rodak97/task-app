import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TaskList } from '../home/tasklist.class';


@Injectable({
  providedIn: 'root'
})
export class TaskListService {
  constructor(private http: HttpClient) { }

  readonly BaseURI = 'https://localhost:44393/api';

  // tslint:disable-next-line:typedef
  addTaskList(taskList: TaskList) {
    return this.http.post(this.BaseURI + '/TaskList/AddTaskList', taskList);
  }
  // tslint:disable-next-line:typedef
  getTaskList() {
    return this.http.get(this.BaseURI + '/TaskList/TaskList');
  }
  // tslint:disable-next-line:typedef
  deleteTaskList(taskListId: number) {
    return this.http.delete(`${this.BaseURI}/TaskList/DeleteTaskList/${taskListId}`);
  }
   // tslint:disable-next-line:typedef
  editTaskList(taskList: TaskList) {
    return this.http.put(this.BaseURI + '/TaskList/EditTaskList', taskList);
  }
}
