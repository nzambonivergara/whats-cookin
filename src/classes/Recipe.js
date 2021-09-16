import Ingredient from './Ingredient';

class Recipe {
  constructor(recipe) {
    this.id = recipe.id;
    this.image = recipe.image;
    this.ingredients = recipe.ingredients;
    this.instructions = recipe.instructions;
    this.name = recipe.name;
    this.tags = recipe.tags;
  }

  getIngredientsInformation(ingredientsData) {
    this.ingredients = this.ingredients.map(ingredient => {
      return new Ingredient(ingredient);
    });

    this.ingredients.forEach(ingredient => ingredient.findIngredientDetails(ingredientsData));
  }

  returnIngredientsList() {
    return this.ingredients.map(ingredient => `${ingredient.amount.toFixed(2).replace(/\.00$/, '')} ${ingredient.unit} ${ingredient.name}`)
  }

  returnCostInDollars() {
    const cost = this.ingredients.reduce((acc, ingredient) => {
      acc += ingredient.calculateCost();
      return acc;
    }, 0)
    return cost.toFixed(2);
  }

  returnInstructions() {
    return this.instructions.map(instruction => `${instruction.number}. ${instruction.instruction}`)
  }
}

export default Recipe;
