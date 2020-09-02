import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../service/blogs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  blogs: Array<any>;

  constructor(private blogservice: BlogsService, private router: Router){ }

  ngOnInit(): void {
      this.blogservice.getAll().subscribe(
        data => { this.blogs = data
          console.log(this.blogs);
        }
      );
    }

}
