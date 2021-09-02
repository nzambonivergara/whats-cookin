class Ingredient {
  constructor(ingredient) {
    this.id = ingredient.id;
    this.amount = ingredient.quantity.amount;
    this.unit = ingredient.quantity.unit;
    this.name = '';
    this.estimatedCostInCents = 0;
  }

  retrieveNameAndCost(ingredientsData) {
    const ingredient = ingredientsData.find(ingredient => ingredient.id === this.id);
    this.name = ingredient.name
    this.estimatedCostInCents = ingredient.estimatedCostInCents;
  }

  calculateCost() {
    return this.estimatedCostInCents * this.amount / 100;
  }
}

export default Ingredient;
