class Ingredient {
  constructor(ingredient) {
    this.id = ingredient.id;
    this.name = ingredient.name;
    this.estimatedCostInCents = ingredient.estimatedCostInCents;
  }

  calculateCost(amount) {
    return this.estimatedCostInCents * amount / 100;
  }
}

export default Ingredient;
