import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../shopping.service';
import { proizvodi } from '../proizvodi';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  proizvodi = proizvodi; 

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
  }

}
