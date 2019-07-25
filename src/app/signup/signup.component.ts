import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AutentifikacijaService } from '../autentifikacija.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private autentifikacijaService: AutentifikacijaService) { }
  

  ngOnInit() {
  }
  registrujSe(form: NgForm){
    const email = form.value.email;
    const sifra = form.value.sifra;
    this.autentifikacijaService.registrujkorisnika(email, sifra);
 }
}
