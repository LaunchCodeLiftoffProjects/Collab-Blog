import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('tag', {static:true}) tagInput: ElementRef;
  tags: String[] = []

  ngOnInit(): void {
    this.reactiveForm();
    
  }
  createBlog(blog:any){
    console.log(blog);
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
      image:[''],
      body:[''],
      tags:['']
    })
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
    this.blogForm.get("image").setValue(this.selectedFile);
    this.fileLabel = this.selectedFile.name;
  }
  addTag(event){
    //removes # from tags if present and adds them to the form for submission
    event.preventDefault();
    let tag: string =this.tagInput.nativeElement.value;
    if(tag.startsWith('#')){
      tag = tag.substring(1);
    }
    if(!this.tags.includes(tag)){
      this.tags.push(tag);
    }
    this.tagInput.nativeElement.value = "";
    this.blogForm.patchValue({tags: this.tags});
  }

}
