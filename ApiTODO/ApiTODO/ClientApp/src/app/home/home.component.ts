import { TaskService } from './../shared/task.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TaskList } from './tasklist.class';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, public service: TaskService) { }
  public taskList: Array<TaskList> = [];
  isHidden;
  ngOnInit(): void {
    this.service.getTaskList().subscribe((res: any) => {
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
    //this.service.addTaskList().subscribe((res: any) => {
   // },
     // err => {
     //   console.log(err);
    //  });
  }
  back(): void{
    this.isHidden = false;
  }
}
