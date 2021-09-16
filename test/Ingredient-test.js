import { expect } from 'chai';
import Ingredient from '../src/classes/Ingredient';

describe('Ingredient class', function() {
  let recipeIngredientsDetails, ingredientsData, ingredient1, ingredient2;

  beforeEach(function() {
    recipeIngredientsDetails = [{
      "id": 20081,
      "quantity": {
        "amount": 1.5,
        "unit": "c"
      }
    },
    {
      "id": 18372,
      "quantity": {
        "amount": 0.5,
        "unit": "tsp"
      }
    }];

    ingredientsData = [{
      "id": 20081,
      "name": "wheat flour",
      "estimatedCostInCents": 142
    },
    {
      "id": 18372,
      "name": "bicarbonate of soda",
      "estimatedCostInCents": 582
    }];

    ingredient1 = new Ingredient(recipeIngredientsDetails[0]);
    ingredient2 = new Ingredient(recipeIngredientsDetails[1]);
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

  it('should have a name assigned to an empty string as a default', function() {
    expect(ingredient1.name).to.equal('');
    expect(ingredient2.name).to.equal('');
  });

  it('should have an estimatedCostInCents assigned to 0 as a default', function() {
    expect(ingredient1.estimatedCostInCents).to.equal(0);
    expect(ingredient2.estimatedCostInCents).to.equal(0);
  });

  it('should be able to get the ingredient name', function() {
    ingredient1.findIngredientDetails(ingredientsData);

    expect(ingredient1.name).to.equal('wheat flour');
  });

  it('should be able to get its estimated cost in cents per unit', function() {
    ingredient1.findIngredientDetails(ingredientsData);

    expect(ingredient1.estimatedCostInCents).to.equal(142);
  });

  it('should be able to calculate its total cost in dollars by its amount', function() {
    ingredient1.findIngredientDetails(ingredientsData);
    const totalCostInDollars = ingredient1.calculateCost();

    expect(totalCostInDollars).to.equal(2.13);
  });
})
