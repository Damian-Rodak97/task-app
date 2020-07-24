import { TaskListService } from './../../shared/task-list.service';
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
  task: Task;

  constructor(public taskservice: TaskService, public listService: TaskListService) { }

  ngOnInit(): void {
    this.task = new Task();
    this.taskservice.getTasksForList(this.list.id).subscribe((res: any) => {
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
    this.listService.deleteTaskList(taskList).subscribe((res: any) => {
      window.location.reload();
    });
  }

  addTask(listId: number, message): void {
    this.task.message = message;
    this.task.taskListId = listId;
    this.taskservice.addTask(this.task).subscribe(
      (res: any) => {
        window.location.reload();
      }
    );
  }

}
