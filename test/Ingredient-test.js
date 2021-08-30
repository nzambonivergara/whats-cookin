import { expect } from 'chai';
import Ingredient from '../src/classes/Ingredient';

describe('Ingredient class', function() {
  let ingredient;

  beforeEach(function() {
    ingredient = new Ingredient({"id": 20081, "name": "wheat flour", "estimatedCostInCents": 142});
  });

})
