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
    Message: ['', Validators.required]
  });
  // tslint:disable-next-line:typedef
  AddTasks()
  {
    // tslint:disable-next-line:prefer-const
    let body = {
      Message: this.formModel.value.Message
    };
    return this.http.post(this.BaseURI + '/Task/AddTask', body);
  }
  // tslint:disable-next-line:typedef
  getTasks()
  {
    return this.http.get(this.BaseURI + '/Task');
  }
}
