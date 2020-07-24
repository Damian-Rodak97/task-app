import { TaskList } from './../TaskList.class';
import { TaskService } from './../../shared/task.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../Task.class';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
@Input()
isHidden;
@Output()
isHiddenChange = new EventEmitter<boolean>();
@Input()
listId;
newTask: Task;
message: string;
  constructor(public service: TaskService) { }

  ngOnInit(): void {
    this.newTask = new Task();
  }

  addTask(): void
  {
    this.newTask.message = this.message;
    this.newTask.taskListId = this.listId;
    this.service.addTask(this.newTask).subscribe((res: any) => {

    });
    this.isHiddenChange.emit(false);
  }
}
