import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BlogsService } from '../service/blogs.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { mixinColor } from '@angular/material/core';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})

export class AddBlogComponent implements OnInit {
  
  blogForm:FormGroup;
  constructor(private blogService:BlogsService, private fb:FormBuilder, private router:Router) { }
  
  selectedFile: File | undefined;
  
  @ViewChild('tag', {static:true}) tagInput: ElementRef;
  tags: String[] = []
  
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
        header:['', Validators.required],
        subheader:['', Validators.required],
        author:['', Validators.required],
        image:[''],
        body:['', Validators.required],
        tags:[[]]
      })
    }
    
    onFileChanged(event) {
        console.log(event.target.files[0]);
        this.selectedFile = event.target.files[0];
        this.blogForm.get("image").setValue(this.selectedFile);
    }
    
    addTag(event){
      //removes # from tags if present and adds them to the form for submission
      event.preventDefault();
      let tag: string =this.tagInput.nativeElement.value;
      if(tag.startsWith('#')){
        tag = tag.substring(1);
      }
      if(!this.tags.includes(tag) && tag !== ''){
        this.tags.push(tag);
      }
      this.tagInput.nativeElement.value = "";
      this.blogForm.patchValue({tags: this.tags});
    }
    
  }
  