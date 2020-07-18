import { TaskService } from './../shared/task.service';
import { UserService } from './../shared/user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
taskLists;
  constructor(private router: Router, private service: TaskService) { }

  ngOnInit(): void {
    this.service.getTasks().subscribe(
      res => {
        this.taskLists = res;
      },
      err => {
        console.log(err);
      },
    );
  }

  // tslint:disable-next-line:typedef
  onLogout(){
  localStorage.removeItem('token');
  this.router.navigate(['user/login']);
  }
  // tslint:disable-next-line:typedef
}
