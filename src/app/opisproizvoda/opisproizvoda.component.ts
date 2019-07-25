import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { proizvodi } from 'src/app/proizvodi';
import { ShoppingService } from '../shopping.service';


@Component({
  selector: 'app-opisproizvoda',
  templateUrl: './opisproizvoda.component.html',
  styleUrls: ['./opisproizvoda.component.css']
})
export class OpisproizvodaComponent implements OnInit {
  
  proizvod;
  proizvodi = proizvodi;

  constructor(private route: ActivatedRoute,
              private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.proizvod = this.proizvodi[+params.get('proizvodId')];
    })
  }
  staviUKorpu(proizvod){
    window.alert('Your product has been added to the cart!');
    this.shoppingService.dodajUKorpu(proizvod);
  }
}