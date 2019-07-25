import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MBlogP } from 'src/app/blogB';


@Injectable({
  providedIn: 'root'
})
export class PostblogService {


  constructor(private httpClient: HttpClient) { }
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  
  getBlogs(){
    return this.httpClient.get<MBlogP[]>('api/blogovi',{
      headers: this.headers
    });
  }
  storeBlogs(blog) {
    return this.httpClient.post('api/blogovi', blog, {
        headers: this.headers
    });
  }
  deleteBlog(blogD){
    return this.httpClient.delete('api/blogovi/' + blogD.id, {
      headers: this.headers
    });
  }
  editBlog(blogE){
    return this.httpClient.put('api/blogovi', blogE, {
      headers: this.headers
    });
  }
}
