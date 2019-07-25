import { Component, OnInit, Input } from '@angular/core';
import { PostblogService } from 'src/app/postblog.service';
import { MBlogP } from 'src/app/blogB';

@Component({
  selector: 'app-postblog',
  templateUrl: './postblog.component.html',
  styleUrls: ['./postblog.component.css']
})
export class PostblogComponent implements OnInit {
  
  blogs: MBlogP[];

  currentBlog: MBlogP;

  constructor(private postblogService: PostblogService  ) { }

  ngOnInit() {
    this.getBlogs();
  }
  select(blog){
    this.currentBlog = blog;
  }
  getBlogs(){
    this.postblogService.getBlogs()
    .subscribe(
      blogs=>{
        this.blogs = blogs
      }
    );
  }
  deleteBlog(blog){
    this.blogs = this.blogs.filter(bl => bl !==blog);
    this.postblogService.deleteBlog(blog);
  }
}
