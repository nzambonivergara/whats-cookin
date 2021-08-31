import { ingredientsData } from '../data/ingredients'

class Ingredient {
  constructor(ingredient) {
    this.id = ingredient.id;
    this.amount = ingredient.quantity.amount;
    this.unit = ingredient.quantity.unit;
    this.name = this.retrieveData('name');
    this.estimatedCostInCents = this.retrieveData('estimatedCostInCents');
    this.totalCostInDollars = this.calculateCost();
  }

  retrieveData(property) {
    const ingredient = ingredientsData.find(ingredient => ingredient.id === this.id);
    return ingredient[property];
  }

  calculateCost() {
    return this.estimatedCostInCents * this.amount / 100;
  }
}

export default Ingredient;
