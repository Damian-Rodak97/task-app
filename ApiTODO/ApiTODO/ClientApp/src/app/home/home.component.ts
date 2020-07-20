import { TaskService } from './../shared/task.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Task } from './task.class';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, public service: TaskService) { }
  public tasks: Array<Task> = [];
  ngOnInit(): void {
   // this.service.getTasks().subscribe((res: any) => {
    //  this.tasks = res;
   // },
    //  err => {
   //     console.log(err);
    //  });
  }


  // tslint:disable-next-line:typedef
  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['user/login']);
  }
}
