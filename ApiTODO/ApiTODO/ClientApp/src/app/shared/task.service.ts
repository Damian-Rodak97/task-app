import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { Injectable } from '@angular/core';
import { formatCurrency } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private fb: FormBuilder, private http: HttpClient) { }
  readonly BaseURI = 'https://localhost:44393/api';
  formModel = this.fb.group({
    Message: ['']
  });
  // tslint:disable-next-line:typedef
  AddTasks()
  {
    const body = {
      Message: this.formModel.value.Message
    };
    return this.http.post(this.BaseURI + '/Task/AddTask', body);
  }
  // tslint:disable-next-line:typedef
  getTasks()
  {
    return this.http.get(this.BaseURI + '/Task/Index');
  }
}
