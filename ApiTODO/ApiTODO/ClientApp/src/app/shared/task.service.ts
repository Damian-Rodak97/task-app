import { HttpClient} from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';


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
  AddTasks()
  {
    // tslint:disable-next-line:prefer-const
    let body = {
      Name: this.formModel.value.Name
    };
    return this.http.post(this.BaseURI + 'TaskList/AddTaskList', body);
  }
  // tslint:disable-next-line:typedef
  getTaskList()
  {
    return this.http.get(this.BaseURI + '/TaskList/TaskList');
  }
}
