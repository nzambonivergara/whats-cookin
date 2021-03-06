import { expect } from 'chai';
import Ingredient from '../src/classes/Ingredient';
import Recipe from '../src/classes/Recipe';
import { ingredientsData } from '../src/data/ingredients-sample';
import { recipeData } from '../src/data/recipes-sample';

describe('Recipe Class', function() {
  let recipe;

  beforeEach(function() {
    recipe = new Recipe(recipeData[0]);
  });

  it('should be a function', function() {
    expect(Recipe).to.be.a('function');
  });

  it('should be an instance of Recipe', function() {
    expect(recipe).to.be.an.instanceOf(Recipe);
  });

  describe('Recipe constructor properties', function() {
    it('should have an id', function() {
      expect(recipe.id).to.equal(595736);
    });

    it('should store an image url', function() {
      expect(recipe.image).to.equal("https://spoonacular.com/recipeImages/595736-556x370.jpg");
    });

    it('should store ingredients', function() {
      expect(recipe.ingredients).to.equal(recipeData[0].ingredients);
    });

    it('should be able to create instances of Ingredients and store them', function() {
      recipe.getIngredientsInformation(ingredientsData);

      expect(recipe.ingredients).to.be.an('array');
      expect(recipe.ingredients.length).to.equal(recipeData[0].ingredients.length);
      expect(recipe.ingredients[0]).to.be.an.instanceOf(Ingredient);
      expect(recipe.ingredients[0].name).to.equal('wheat flour');
    });

    it('should store a list of instructions', function() {
      expect(recipe.instructions).to.be.an('array');
      expect(recipe.instructions[0].number).to.equal(1);
      expect(recipe.instructions).to.deep.equal(recipeData[0].instructions);
    });

    it('should have a name', function() {
      expect(recipe.name).to.equal("Loaded Chocolate Chip Pudding Cookie Cups");
    });

    it('should store a list of tags', function() {
      expect(recipe.tags).to.be.an('array');
      expect(recipe.tags[0]).to.be.a('string');
      expect(recipe.tags).to.equal(recipeData[0].tags);
    });
  });

  describe('Recipe functionality', function() {
    it('should return a list of ingredients', function() {
      const expected = [
        "1.50 c wheat flour",
        "0.25 teaspoon kosher salt",
        "3  whole garlic clove",
        "0.25 cup flat leaf parsley leaves",
        "1 large eggs",
        "0.50 tsp salt",
        "0.50 tsp vanilla"
      ];

      recipe.getIngredientsInformation(ingredientsData);
      const listOfIngredients = recipe.returnIngredientsList();

      expect(listOfIngredients).to.be.an('array');
      expect(listOfIngredients).to.deep.equal(expected);
    });

    it('should return the total cost of all ingredients', function() {
      const expected = '24.48';
      recipe.getIngredientsInformation(ingredientsData);
      const totalCost = recipe.returnCostInDollars();

      expect(totalCost).to.equal(expected);
    });

    it('should return the instructions', function() {
      const instructions = recipe.returnInstructions();

      expect(instructions.length).to.equal(recipeData[0].instructions.length);
      expect(instructions[1]).to.equal('2. Add egg and vanilla and mix until combined.');
    });
  });
})
