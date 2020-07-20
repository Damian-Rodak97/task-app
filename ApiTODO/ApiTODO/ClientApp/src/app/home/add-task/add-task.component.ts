import { TaskService } from './../../shared/task.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(public service: TaskService) { }

  ngOnInit(): void {
  }
// tslint:disable-next-line:typedef
onSubmit() {
  this.service.AddTasks().subscribe((res: any) => {
      this.service.formModel.reset();
  },
    err => {
      console.log(err);
    }
  );
}
}
