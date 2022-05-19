import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BlogsService } from '../service/blogs.service';
import { TagsService } from '../service/tags.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { mixinColor } from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IBlog } from '../view-blog/blog';
import {ITag} from '../view-blog/tag';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import { stringify } from '@angular/compiler/src/util';
import { _isNumberValue } from '@angular/cdk/coercion';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-update-blog',
  templateUrl: './update-blog.component.html',
  styleUrls: ['./update-blog.component.css']
})


export class UpdateBlogComponent implements OnInit {
  
  blogForm:FormGroup;
  constructor(private blogService: BlogsService, private router: Router, private fb:FormBuilder, private _ActivatedRoute: ActivatedRoute) { }
  selectedFile: File | undefined;

  @ViewChild('tag', {static:true}) tagInput: ElementRef;
  
  //tags: String[] = []
  tags: ITag[] =[]
  
  //Id is posted from the blog selected when the page is accessed
  id: String;

  blog: IBlog;

  url: String = null;
  
  
  //Injected the Activated Route value passed from the blog-list routing directive
  ngOnInit(): void {

    this.id = this._ActivatedRoute.snapshot.paramMap.get('id');
    this.blogService.getBlogById(this.id).subscribe(
      (data: IBlog) => { 
        this.blog = data;
        console.log("This blog:" + this.blog.header + this.blog.subheader + this.blog.author + this.blog.body + this.blog.image + " " );
        for(let t of this.blog.tags){
          console.log(t.id,t.name);
          this.tags.push(t);
        }
        console.log("this.blog.image: " + this.blog.image);
        this.url = this.blog.image;       
      }
      );
  
    
    this.reactiveForm();
        
  }

  ngAfterViewInit() {
    
    console.log('Values on ngAfterViewInit():');
            
  } 
  
  updateBlog(blog:any){
    if(this.url != null){
        this.blogService.updateBlogNoImage(blog,this.id).subscribe(
          response =>{
            console.log("this.blog: "+ this.blog)
            console.log(response)
            this.router.navigate(["blog-list"])
          }
        )
    }

    else{
        this.blogService.updateBlog(blog,this.id).subscribe(
        response => {
        console.log("this.blog: "+ this.blog)
        console.log(response)
        this.router.navigate(["blog-list"])
      }
      )
    }
    }
   
    
  reactiveForm(){
    this.blogForm=this.fb.group({
      header:['', Validators.required],
      subheader:['', Validators.required],
      author:['', Validators.required],
      image:['', Validators.required],
      body:['', Validators.required],
      tags:[[]]
    })
  }
    
    onFileChanged(event) {
        console.log("logging file: " +event.target.files[0]);
        this.selectedFile = event.target.files[0];
        this.blogForm.get("image").setValue(this.selectedFile);
        const sf = document.getElementById('uploadedImage');
        sf.setAttribute("src",this.selectedFile.toString());
    }
    changeImage(event){
      this.url = undefined;
    }
    
    addTag(event){
      //removes # from tags if present and adds them to the form for submission
      event.preventDefault();
      
      let t: string = this.tagInput.nativeElement.value;
      let tag: ITag = new ITag(null,t);
      console.log(tag.name);
      console.log("id:  "+tag.id,"name   "+tag.name);
      
      if(tag.name.startsWith('#')){
        tag.name = tag.name.substring(1);
      }
      //if(!this.tags.includes(tag){
      if(!this.tags.includes(tag) && tag.name !== ''){
        this.tags.push(tag);
      }
      this.tagInput.nativeElement.value = "";
      this.blogForm.patchValue({tags: this.tags});
    } 
  }
