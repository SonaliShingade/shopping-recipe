import { Component, OnInit } from '@angular/core';
import{Ingredient}from '../share/share.module';
@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit {
ingredients:Ingredient[]=[
  new Ingredient('Apple',5),
  new Ingredient('Tomatoes',10)
];
  constructor() { }

  ngOnInit() {
  }

}
