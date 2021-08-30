import { expect } from 'chai';
import Ingredient from '../src/classes/Ingredient';

describe('Ingredient class', function() {
  let ingredient;

  beforeEach(function() {
    ingredient = new Ingredient({"id": 20081, "name": "wheat flour", "estimatedCostInCents": 142});
  });

  it('should be a function', function() {
    expect(Ingredient).to.be.a('function');
  });

  it('should be an instance of Ingredient', function() {
    expect(ingredient).to.be.an.instanceOf(Ingredient);
  })

  it('should store an id', function() {
    expect(ingredient.id).to.equal(20081);
  });

  it('should have a name', function() {
    expect(ingredient.name).to.equal('wheat flour');
  });

  it('should have an estimated cost in cents', function() {
    expect(ingredient.estimatedCostInCents).to.equal(142);
  });

  it('should be able to calculate its cost by a provided unit amount', function() {
    const ingredientCostInDollars = ingredient.calculateCost(1.5);

    expect(ingredientCostInDollars).to.equal(2.13);
  });
})
