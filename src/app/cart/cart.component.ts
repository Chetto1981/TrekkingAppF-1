import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../shopping.service';
import {FormGroup} from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  korpa = [];
  suma: number = 0;
  cene =[];
  signupForm: FormGroup;
  
  constructor(private shoppingservice: ShoppingService) {
    this.korpa = this.shoppingservice.uzmiPredmete();
   }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'name' : new FormControl(null, Validators.required),
      'surname': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'phone' : new FormControl(null, Validators.required),
      'textarea': new FormControl(null,Validators.required)
    });
  }
  onPosalji(){
    console.log(this.signupForm);
    this.signupForm.reset();
  }

  isprazniKorpu(){
    this.korpa = this.shoppingservice.ocistiKorpu();
  }
  brojStavki(){
    return this.korpa.length;
  }
  
}
