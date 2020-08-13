import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class BlogsService {


  constructor(
    private http:HttpClient
  ) { }

  getAll(): Observable<any> {
    return this.http.get('//localhost:8080/blogs');
  }

  addBlog(blog:any): Observable<any>{
    console.log(blog)
    return this.http.post('//localhost:8080/blogs', blog, httpOptions)
  }


}
