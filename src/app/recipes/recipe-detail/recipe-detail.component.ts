import { Component, OnInit, Input } from '@angular/core';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe:Recipe;
  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
  }

  addIngredients(){
    let ingredients = this.recipe.ingredients;
    ingredients.forEach(element => {
      this.slService.addIngredients(element.name, element.amount);
    });
  }

}
