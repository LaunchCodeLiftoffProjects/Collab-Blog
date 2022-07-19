import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogsService } from '../service/blogs.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  blogs: Array<any>;
  term: String = "Blog";


  constructor(private blogService:BlogsService, private router:Router) { }

  ngOnInit(): void {
    this.blogService.searchBlogs("Blog").subscribe(
      data => { 
        this.blogs = data;
        console.log(this.blogs);
      }
    );
  }

}
