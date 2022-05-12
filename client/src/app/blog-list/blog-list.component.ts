import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../service/blogs.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css'],
})
export class BlogListComponent implements OnInit {

  blogs: Array<any>;

  constructor(private blogService:BlogsService, private router: Router){ }

  ngOnInit(): void {
      this.blogService.getAll().subscribe(
        data => { 
          this.blogs = data;
          console.log(this.blogs);
        }
      );
    }
  deleteBlog(id:String){
      console.log("testing delete blog with id:" + id)
      this.blogService.deleteBlog(id).subscribe(
        response => {
        console.log(response)
        console.log("testing navigate to blog-list")
        //this.router.navigate(["blog-list"])
        window.location.reload();
      }
      ) 
    }
    

}
