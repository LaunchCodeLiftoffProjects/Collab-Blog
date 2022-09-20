import { Component, OnInit, Input} from '@angular/core';
import { BlogsService } from '../service/blogs.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})

export class BlogListComponent implements OnInit {

  blogs: Array<any>; //Stores blogs subscription from backend on component init - !!Do not manipulate with methods!!
  displayBlogs: Array<any>; //Stores filtered or non filtered blogs as an array - Initially set to blogs, updated by searchBlogs() method

  constructor(private blogService:BlogsService, private router: Router){ }

  // On component initialization, subscribes to backend feed, sets blogs and displayBlogs array equal to all blogs in the backend feed
  ngOnInit(): void {
    
      this.blogService.getAll().subscribe(
        data => { 
          this.blogs = data;
          console.log(this.blogs);
          this.displayBlogs = data;
        }
      );
  }

  //Method used to delete a blog from the backend using the selected blog's id
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

  //Method used to "search" the list of blogs and update the displayBlogs array, accepts a string input entered by the user in the component
  searchBlogs(searchString: string){
    let filteredBlogs: Array<any> = [];

    // Used to reset the display to all blogs from the feed when no search term is entered
    if(typeof searchString == 'undefined'){
      this.displayBlogs = this.blogs;
    } 
    
    // Used to update display to a filtered blog set
    else{
        // Iterate through the blogs object, checks for string partial match in the header, subheader, author, body
        for(const blog of this.blogs) {
            if(
                blog.header.toUpperCase().includes(searchString.toUpperCase()) || 
                blog.subheader.toUpperCase().includes(searchString.toUpperCase()) ||
                blog.author.toUpperCase().includes(searchString.toUpperCase()) ||
                blog.body.toUpperCase().includes(searchString.toUpperCase())            
              ){
                filteredBlogs.push(blog);
            }
        }

        if(filteredBlogs.length <= this.blogs.length) {
          this.displayBlogs = filteredBlogs.slice(0);
        }
    }

    return console.log(this.displayBlogs);
  }
    

}
