import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../service/blogs.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  message: any

  constructor(private service: BlogsService) { }

  ngOnInit() {
  }

  doLogin() {
    let resp = this.service.login(this.username, this.password);
    resp.subscribe(data => {
      this.message = data;
      console.log(data);
    });
  }
}
