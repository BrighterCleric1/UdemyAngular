import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  constructor(private shoppingListService : ShoppingListService) { }

  ngOnInit(): void {
  }
  
  AddIngredient(nameEl:HTMLInputElement, amountEl:HTMLInputElement){
    this.shoppingListService.addIngredients(nameEl.value, amountEl.valueAsNumber);
  }
}
