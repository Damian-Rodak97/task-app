import { TaskService } from './../../shared/task.service';
import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../Task.class';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task;
  @Input() listId;
  isHidden;
  newTask: Task;
  constructor(public taskService: TaskService) { }

  ngOnInit(): void {
    this.newTask = new Task();
  }

  done(task): void {
    this.taskService.deleteTask(task).subscribe((res: any) => {
      window.location.reload();
    });
  }
  editTask(taskId, message, listId): void{
    this.newTask.id = taskId;
    this.newTask.message = message;
    this.newTask.taskListId = listId;
    this.taskService.editTask(this.newTask).subscribe((res: any) => {
      window.location.reload();
    });
  }
  onEdit(): void{
    this.isHidden = true;
  }
  back(): void {
    this.isHidden = false;
  }
}
