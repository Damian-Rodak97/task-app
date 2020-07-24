import { TaskList } from './../TaskList.class';
import { TaskService } from './../../shared/task.service';
import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../Task.class';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  @Input() list: TaskList;
  public tasks: Array<Task> = [];
  isHidden;
  constructor(public service: TaskService) { }

  ngOnInit(): void {
    this.service.getTasksForList(this.list.id).subscribe((res: any) => {
      this.tasks = res;
    },
      err => {
        console.log(err);
      });
  }

  onTask(): void {
    this.isHidden = true;
  }
  back(): void {
    this.isHidden = false;
  }

  deleteList(taskList: TaskList): void {
    this.service.deleteTaskList(taskList).subscribe((res: any) => {
      window.location.reload();
    });
  }

}
