import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Another Test recipe', 'This is another test', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Recipe-575434.svg/1199px-Recipe-575434.svg.png')
  ];

  constructor() { }

  ngOnInit() {
  }

}
