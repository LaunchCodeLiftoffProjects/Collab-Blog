import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../service/blogs.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.css']
})
export class ViewBlogComponent implements OnInit {
  
  //Id is posted from the blog selected when the page is accessed
  id: String;
  
  //Blog stores the blog data based from the getBlog service 
  blog: {};

  //Injected the Activated Route value passed from the blog-list routing directive
  constructor(private blogservice: BlogsService, private router: Router, private _ActivatedRoute: ActivatedRoute) { }
  
  ngOnInit(): void { 
    // Updates blog to the selected blog, based on id
    this.id = this._ActivatedRoute.snapshot.paramMap.get('id');
    this.blog = this.blogservice.getBlog(this.id);
  }
  
}
