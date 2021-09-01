import Ingredient from './Ingredient';
import { ingredientsData } from '../data/ingredients';

class Recipe {
  constructor(recipe) {
    this.id = recipe.id;
    this.image = recipe.image;
    this.ingredients = recipe.ingredients;
    this.instructions = recipe.instructions;
    this.name = recipe.name;
    this.tags = recipe.tags;
  }

  getIngredientsInformation() {
    this.ingredients = this.ingredients.map(ingredient => {
      return new Ingredient(ingredient);
    });

    this.ingredients.forEach(ingredient => ingredient.retrieveNameAndCost(ingredientsData));
  }

  returnIngredientsList() {
    return this.ingredients.map(ingredient => `${ingredient.amount} ${ingredient.unit} ${ingredient.name}`)
  }

  returnCostInDollars() {
    return this.ingredients.reduce((cost, ingredient) => {
      return cost += ingredient.calculateCost();
    }, 0)
  }

  returnInstructions() {
    return this.instructions.map(instruction => `${instruction.number}. ${instruction.instruction}`)
  }
}

export default Recipe;
