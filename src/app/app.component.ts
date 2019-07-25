import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AutentifikacijaService } from './autentifikacija.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TrekkingAppF';

  constructor( private autentifikacijaService: AutentifikacijaService,
              private router: Router ){}
  
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyCiE15ebsTtp0o5CfTtTXAfRcEETx-01i0",
      authDomain: "trekkingf-84b29.firebaseapp.com",
    })
  }
  signOut(){
    this.autentifikacijaService.odjaviSe();
    this.router.navigate(['/signin']);
  }
}
