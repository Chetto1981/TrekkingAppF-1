import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  imageShow: boolean = true;
  video1Show: boolean = false;
  video2Show: boolean = false;
  video3Show: boolean = false;

  video1Play(){
    this.imageShow = false;
    this.video1Show = true;
  }
  video2Play(){
    this.imageShow = false;
    this.video2Show = true;
  }
  video3Play(){
    this.imageShow = false;
    this.video3Show = true;
  }
}
