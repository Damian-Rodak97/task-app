import { TaskService } from './../../shared/task.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {

  constructor(public service: TaskService) { }

  ngOnInit(): void {
  }
   // tslint:disable-next-line:typedef
   onSubmit() {
    this.service.addTaskList().subscribe((res: any) => {
      this.service.formModel.reset();
    },
      err => {
        console.log(err);
      }
    );
 }
}
