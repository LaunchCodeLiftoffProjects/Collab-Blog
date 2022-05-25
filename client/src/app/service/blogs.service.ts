import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': '',
    'Authorization': 'my-auth-token',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class BlogsService {


  constructor(private http:HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get('//localhost:8080/blogs');
  }

  getBlogById(id:String): Observable<any> {
    return this.http.get('//localhost:8080/blogs/'+ id);
  }

  addBlog(blog:any): Observable<any>{
  
      const formData = new FormData();
      formData.append("image", blog.image);
      delete blog.image;
      let blogData = JSON.stringify(blog);
      formData.append("blogData", blogData);
      return this.http.post('//localhost:8080/blogs', formData);
    }

    updateBlog(blog:any, id:String): Observable<any>{
  
      const formData = new FormData();
      formData.append("image", blog.image);
      console.log("Testing output of blog image", blog.image);
      delete blog.image;
      let blogData = JSON.stringify(blog);
      formData.append("blogData", blogData);
      return this.http.put('//localhost:8080/blogs/' +id, formData);
    }

    updateBlogNoImage(blog:any, id:String): Observable<any>{
  
      const formData = new FormData();
      let blogData = JSON.stringify(blog);
      formData.append("blogData", blogData);
      return this.http.put('//localhost:8080/blogsNoImage/' +id, formData);
    }
    
  deleteBlog(id:String): Observable<any>{
      return this.http.delete('//localhost:8080/blogs/' +id);
  }

}
