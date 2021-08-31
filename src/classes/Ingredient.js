import { ingredientsData } from '../src/data/ingredients'

class Ingredient {
  constructor(ingredient) {
    this.id = ingredient.id;
    this.amount = ingredient.quantity.amount;
    this.unit = ingredient.quantity.unit;
    this.name = retrieveData('name');
    this.estimatedCostInCents = retrieveData('estimatedCostInCents');
    this.totalCostInDollars = calculateCost();
  }

  retrieveData(property) {
    const ingredient = ingredientsData.find(ingredient => ingredient.id === this.id);
    this[property] = ingredient[property];
  }

  calculateCost() {
    return this.estimatedCostInCents * this.amount / 100;
  }
}

export default Ingredient;
