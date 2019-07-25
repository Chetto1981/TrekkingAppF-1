import { Component, OnInit, Input } from '@angular/core';
import { MBlogP } from 'src/app/blogB';
import { PostblogService } from 'src/app/postblog.service';

@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.css']
})
export class AddblogComponent implements OnInit {
  
  @Input() blog: MBlogP;

  constructor( private postBlogService: PostblogService) { }

  ngOnInit() {
  }
  
  saveChanges(){
    this.postBlogService.editBlog(this.blog);
  }

}
