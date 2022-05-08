import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BlogsService } from '../service/blogs.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { mixinColor } from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-update-blog',
  templateUrl: './update-blog.component.html',
  styleUrls: ['./update-blog.component.css']
})


export class UpdateBlogComponent implements OnInit {
  
  blogForm:FormGroup;
  //constructor(private blogService:BlogsService, private fb:FormBuilder, private router:Router) { }
  constructor(private blogService: BlogsService, private router: Router, private fb:FormBuilder, private _ActivatedRoute: ActivatedRoute) { }
  selectedFile: File | undefined;
  
  @ViewChild('tag', {static:true}) tagInput: ElementRef;
  tags: String[] = []
  
 
  //Id is posted from the blog selected when the page is accessed
  id: String;
  

  //Injected the Activated Route value passed from the blog-list routing directive
  
  ngOnInit(): void {
    this.id = this._ActivatedRoute.snapshot.paramMap.get('id');
    this.reactiveForm();
    
  }
  
  updateBlog(blog:any){
    this.blogService.updateBlog(blog,this.id).subscribe(
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
      if(!this.tags.includes(tag)){
        this.tags.push(tag);
      }
      this.tagInput.nativeElement.value = "";
      this.blogForm.patchValue({tags: this.tags});
    }
    
  }