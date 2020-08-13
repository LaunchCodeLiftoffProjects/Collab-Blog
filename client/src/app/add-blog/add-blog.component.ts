import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {BlogsService} from '../service/blogs.service'
import { FormControl, FormGroup, Validators, FormBuilder, } from '@angular/forms';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
  

  blogForm:FormGroup;
  constructor(private blogService:BlogsService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.reactiveForm();
    
  }
  createBlog(blog:any){
    this.blogService.addBlog(blog).subscribe()
  }

  reactiveForm(){
    this.blogForm=this.fb.group({
      header:[''],
      subheader:[''],
      image:[''],
      body:['']
    })
  }

}
