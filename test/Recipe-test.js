import { expect } from 'chai';
import Ingredient from '../src/classes/Ingredient';
import Recipe from '../src/classes/Ingredient';

describe('Recipe Class', function() {
  let recipeDetails, recipe;

  beforeEach(function() {
    recipeDetails = {
      "id": 595736,
      "image": "https://spoonacular.com/recipeImages/595736-556x370.jpg",
      "ingredients": [
        {
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
        },
        {
          "id": 1123,
          "quantity": {
            "amount": 1,
            "unit": "large"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
          "number": 1
        },
        {
          "instruction": "Add egg and vanilla and mix until combined.",
          "number": 2
        },
        {
          "instruction": "Add dry ingredients and mix on low just until incorporated. Stir in chocolate chips.Scoop the dough into 1,5 tablespoon size balls and place on a plate or sheet. Cover with saran wrap and chill at least 2 hours or overnight.When ready to bake, preheat oven to 350 degrees.",
          "number": 3
        }
      ],
      "name": "Loaded Chocolate Chip Pudding Cookie Cups",
      "tags": [
        "antipasti",
        "starter",
        "snack",
        "appetizer",
        "antipasto",
        "hor d'oeuvre"
      ]
    };

    recipe = new Recipe(recipeDetails);
  });

  it('should have be a function', function() {
    expect(Recipe).to.be.a('function');
  });

  it('should be an instance of Recipe', function() {
    expect(recipe).to.be.an.instanceOf(Recipe);
  });

  desbribe('Recipe constructor properties', function() {
    it('should have an id', function() {
      expect(recipe.id).to.equal(595736);
    });

    it('should store an image url', function() {
      expect(recipe.image).to.equal("https://spoonacular.com/recipeImages/595736-556x370.jpg");
    });

    it('should be able to all ingredient\'s information', function() {
      const ingredients = recipe.getIngredients(recipeDetails.ingredients);

      expect(recipe.ingredients).to.be.an('array');
      expect(recipe.ingredients.length).to.deep.equal(3);
      expect(ingredients).to.deep.equal(recipe.ingredients);
      expect(recipe.ingredients[0]).to.be.an.intanceOf(Ingredient);
      expect(recipe.ingredients[0].name).to.equal('wheat flour');
    });

    it('should store a list of instructions', function() {
      expect(recipe.instructions).to.be.an('array');
      expect(recipe.instructions[0]).to.be.an('object');
      expect(recipe.instructions).to.deep.equal(recipeDetails.instructions);
    });

    it('should have a name', function() {
      expect(recipe.name).to.equal("Loaded Chocolate Chip Pudding Cookie Cups");
    });

    it('should store a list of tags', function() {
      expect(recipe.tags).to.be.an('array');
      expect(recipe.tags[0]).to.be.a('string');
      expect(recipe.tags).to.equal(recipeDetails.tags);
    });
  });

  describe('Recipe functionality', function() {
    it('should return a list of ingredients', function() {
      const listOfIngredients = recipe.returnIngredients();

      expect(listOfIngredients).to.be.an('array');
      expect(listOfIngredients).to.deep.equal(['1.5 c wheat flour', '0.5 tsp bicarbonate of soda', '1 large egg']);
    });

    it('should return the total cost of all ingredients', function() {
      const totalCost = recipe.returnCostInDollars();

      expect(totalCost).to.equal(9.72);
    });

    it('should return the instructions', function() {
      const instructions = recipe.returnInstructions();

      expect(instructions[1]).to.equal('2. Add egg and vanilla and mix until combined.');
    });
  });
})
