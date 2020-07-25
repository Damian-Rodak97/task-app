import { TaskListService } from './../shared/task-list.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TaskList } from './tasklist.class';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, public listService: TaskListService) { }

  public taskList: Array<TaskList> = [];
  list: TaskList;
  isHidden;

  ngOnInit(): void {
    this.list = new TaskList();
    this.listService.getTaskList().subscribe((res: any) => {
      this.taskList = res;
    },
      err => {
        console.log(err);
      });
  }

  onLogout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['user/login']);
  }

  onTaskList(): void
  {
      this.isHidden = true;
  }

  back(): void{
    this.isHidden = false;
  }

  addTaskList(name): void
  {
    this.list.name = name;
    this.listService.addTaskList(this.list).subscribe(
      (res: any) => {
        window.location.reload();
      }
    );
  }
}
