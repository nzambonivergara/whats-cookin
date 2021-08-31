import { expect } from 'chai';
import Ingredient from '../src/classes/Ingredient';

describe('Ingredient class', function() {
  let ingredientDetails1, ingredientDetails2, ingredientsData, ingredient1, ingredient2;

  beforeEach(function() {
    ingredientDetails1 = {
      "id": 20081,
      "quantity": {
        "amount": 1.5,
        "unit": "c"
      }
    }

    ingredientDetails2 = {
      "id": 18372,
      "quantity": {
        "amount": 0.5,
        "unit": "tsp"
      }
    }

    ingredientsData = [{
      "id": 20081,
      "name": "wheat flour",
      "estimatedCostInCents": 142
    },
    {
      "id": 18372,
      "name": "bicarbonate of soda",
      "estimatedCostInCents": 582
    }]

    ingredient1 = new Ingredient(ingredientDetails1);
    ingredient2 = new Ingredient(ingredientDetails2);
  });

  it('should be a function', function() {
    expect(Ingredient).to.be.a('function');
  });

  it('should be an instance of Ingredient', function() {
    expect(ingredient1).to.be.an.instanceOf(Ingredient);
  })

  it('should store an id', function() {
    expect(ingredient1.id).to.equal(20081);
    expect(ingredient2.id).to.equal(18372);
  });

  it('should store an amount', function() {
    expect(ingredient1.amount).to.equal(1.5);
    expect(ingredient2.amount).to.equal(0.5);
  });

  it('should have a unit', function() {
    expect(ingredient1.unit).to.equal('c');
    expect(ingredient2.unit).to.equal('tsp');
  });

  it('should be able to get the ingredient name', function() {
    const ingredient1Name = ingredient1.retrieveData('name');

    expect(ingredient1Name).to.equal(ingredient1.name);
    expect(ingredient1.name).to.equal('wheat flour');
  });

  it('should be able to get its estimated cost in cents per unit', function() {
    const estimatedCostInCents = ingredient1.retrieveData('estimatedCostInCents');

    expect(estimatedCostInCents).to.equal(ingredient1.estimatedCostInCents);
    expect(ingredient1.estimatedCostInCents).to.equal(142);
  });

  it('should be able to calculate its total cost in dollars by its amount', function() {
    const totalCostInDollars = ingredient1.calculateCost();

    expect(totalCostInDollars).to.equal(ingredient1.totalCostInDollars);
    expect(ingredient1.totalCostInDollars).to.equal(2.13);
  });
})
