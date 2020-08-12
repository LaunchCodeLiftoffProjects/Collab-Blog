import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../service/blogs.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  blogs: Array<any>;

  constructor(private blogservice: BlogsService){ }

  ngOnInit(): void {
    this.blogservice.getAll().subscribe(
      data => { this.blogs = data
        console.log(this.blogs);
      }
    );
  }

}
