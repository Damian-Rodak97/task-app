import { TaskListService } from './../../shared/task-list.service';
import { TaskService } from './../../shared/task.service';
import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../Task.class';
import { TaskList } from '../tasklist.class';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  @Input() list: TaskList;
  public tasks: Array<Task> = [];
  isHidden;
  isListHidden;
  task: Task;
  newListTask: TaskList;

  constructor(public taskservice: TaskService, public listService: TaskListService) { }

  ngOnInit(): void {
    this.task = new Task();
    this.newListTask = new TaskList();
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
  onBack(): void{
    this.isListHidden = false;
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
  onEdit(): void{
this.isListHidden = true;
  }
  editTaskList(listId, name): void
  {
    this.newListTask.id = listId;
    this.newListTask.name = name;
    this.listService.editTaskList(this.newListTask).subscribe((res: any) => {
      window.location.reload();
    });
  }
}
