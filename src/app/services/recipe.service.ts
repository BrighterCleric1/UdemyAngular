import { EventEmitter } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    private recipes:Recipe[] = [
        new Recipe("Primo","biiiii","https://media.istockphoto.com/vectors/recipe-book-hand-drawn-cover-vector-illustration-vector-id1185879263?k=20&m=1185879263&s=612x612&w=0&h=Qiw3sY0LiWG4IIKcKQI9fAwAxR81xLmbhRpYpgt3S8I=",
        [new Ingredient("pane",1), new Ingredient("carne",3)
        ]),
        new Recipe("Secondo","booo","https://media.istockphoto.com/vectors/recipe-book-hand-drawn-cover-vector-illustration-vector-id1185879263?k=20&m=1185879263&s=612x612&w=0&h=Qiw3sY0LiWG4IIKcKQI9fAwAxR81xLmbhRpYpgt3S8I=",
        [new Ingredient("formaggio",2), new Ingredient("patate",3)]
        )
    ];
    
    getRecipes(){
        return this.recipes;
    }
}