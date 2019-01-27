import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe/recipe.module';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[]=[
    new Recipe('test recipe','this is simply a test','https://www.google.com/search?q=recipe&rlz=1C1CHNY_enIN699IN699&source=lnms&tbm=isch&sa=X&ved=0ahUKEwif-634_I3gAhVZFHIKHe_LB2AQ_AUIESgE&biw=1366&bih=626#imgrc=QZl8VRLdzZHjgM:'),
    new Recipe('test recipe','this is simply a test','https://www.google.com/search?q=recipe&rlz=1C1CHNY_enIN699IN699&source=lnms&tbm=isch&sa=X&ved=0ahUKEwif-634_I3gAhVZFHIKHe_LB2AQ_AUIESgE&biw=1366&bih=626#imgrc=QZl8VRLdzZHjgM:'),
    new Recipe('test recipe','this is simply a test','https://www.google.com/search?q=recipe&rlz=1C1CHNY_enIN699IN699&source=lnms&tbm=isch&sa=X&ved=0ahUKEwif-634_I3gAhVZFHIKHe_LB2AQ_AUIESgE&biw=1366&bih=626#imgrc=QZl8VRLdzZHjgM:')
  ];
  constructor() { }
 
  ngOnInit() {
  }

}
