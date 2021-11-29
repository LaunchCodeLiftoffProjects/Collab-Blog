import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BlogsService } from '../service/blogs.service';
import {FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
  

  blogForm:FormGroup;
  constructor(private blogService:BlogsService, private fb:FormBuilder, private router:Router) { }

  selectedFile: File

  fileLabel: String = "Choose File"

  ngOnInit(): void {
    this.reactiveForm();
    
  }
  createBlog(blog:any){
    this.blogService.addBlog(blog).subscribe(
      response => {
        console.log(response)
        this.router.navigate(["blog-list"])
      }
    )
  }

  reactiveForm(){
    this.blogForm=this.fb.group({
      header:[''],
      subheader:[''],
      author:[''],
      image:[''],
      body:['']
    })
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
    this.blogForm.get("image").setValue(this.selectedFile);
    this.fileLabel = this.selectedFile.name;
  }

}
