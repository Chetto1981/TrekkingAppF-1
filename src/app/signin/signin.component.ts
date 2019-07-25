import { Component, OnInit } from '@angular/core';
import { AutentifikacijaService } from '../autentifikacija.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private autentifikacijaService: AutentifikacijaService) { }

  ngOnInit() {
  }
  prijaviSe(form: NgForm){
    const email = form.value.email;
    const sifra = form.value.sifra;
    this.autentifikacijaService.prijaviKorisnika(email, sifra);
  }
}
