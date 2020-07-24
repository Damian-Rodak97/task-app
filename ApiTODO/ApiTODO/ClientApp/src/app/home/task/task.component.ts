import { TaskService } from './../../shared/task.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task;
  constructor(public taskService: TaskService) { }

  ngOnInit(): void {
  }

  done(task): void {
    this.taskService.deleteTask(task).subscribe((res: any) => {
      window.location.reload();
    });
  }


}
