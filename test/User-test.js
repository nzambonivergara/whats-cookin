import { expect } from 'chai';
import User from '../src/classes/User';
import Recipe from '../src/classes/Recipe';
import { usersData } from '../src/data/users-sample';
import { recipeData } from '../src/data/recipes-sample';
import { ingredientsData } from '../src/data/ingredients-sample';
import RecipeRepository from '../src/classes/RecipeRepository';

describe('User', function() {
  let user;
  let missingIngredientsRecipe;
  let notEnoughIngredientsRecipe;
  let hasAllIngredientsRecipe;
  let repo;
  const tagOne = 'appetizer';
  const tagTwo = 'snack';
  const tagThree = 'side dish';

  beforeEach(() => {
    repo = new RecipeRepository(recipeData);
    repo.getRecipesInformation(ingredientsData);
    user = new User(usersData[0], repo);
    missingIngredientsRecipe = new Recipe(recipeData[2]);
    notEnoughIngredientsRecipe = new Recipe(recipeData[1]);
    hasAllIngredientsRecipe = new Recipe(recipeData[0]);
    missingIngredientsRecipe.getIngredientsInformation(ingredientsData);
    notEnoughIngredientsRecipe.getIngredientsInformation(ingredientsData);
    hasAllIngredientsRecipe.getIngredientsInformation(ingredientsData);
    user.addFavorite(missingIngredientsRecipe);
    user.addFavorite(notEnoughIngredientsRecipe);
    user.addFavorite(hasAllIngredientsRecipe);
    user.addWeeklyRecipe(missingIngredientsRecipe);
    user.addWeeklyRecipe(notEnoughIngredientsRecipe);
    user.addWeeklyRecipe(hasAllIngredientsRecipe);
  });

  it('should have a name', function() {
    expect(user.name).to.equal('Saige O\'Kon');
  });

  it('should have an ID', function() {
    expect(user.id).to.equal(1);
  });

  it('should have a pantry of ingredients', function() {
    expect(user.pantry).to.equal(usersData[0].pantry);
  });

  it('should be able to add a favorite recipe', function() {
    expect(user.favoriteRecipes).to.deep.equal(
      [missingIngredientsRecipe, notEnoughIngredientsRecipe, hasAllIngredientsRecipe]
    );
  });

  it('should be able to remove favorite recipes', function() {
    user.removeFavorite(notEnoughIngredientsRecipe);
    expect(user.favoriteRecipes).to.deep.equal([missingIngredientsRecipe, hasAllIngredientsRecipe]);
  });

  it('should be able to filter favorites by recipe tag', function() {
    expect(user.filterFavoriteRecipesByTags([tagOne])).to.deep.equal(
      [missingIngredientsRecipe, hasAllIngredientsRecipe]
    );
  });

  it('should be able to filter favorites by more than one recipe tag',
    function() {
      expect(user.filterFavoriteRecipesByTags([tagOne, tagTwo, tagThree])).to.deep.equal(
        [missingIngredientsRecipe, notEnoughIngredientsRecipe, hasAllIngredientsRecipe]
      );
    });

  it('should be able to filter favorites by ingredient', function() {
    expect(user.findFavoriteRecipesByIngredient('wheat flour')).to.deep.equal([ missingIngredientsRecipe,notEnoughIngredientsRecipe, hasAllIngredientsRecipe ]);
  });

  it('should be able to filter favorites by name', function() {
    expect(user.findFavoriteRecipesByName('cookies')).to.deep.equal([missingIngredientsRecipe]);
  });

  it('should be able to add a recipe to the user\'s weekly meal plan',
    function() {
      expect(user.weeklyFavorites).to.deep.equal(
        [missingIngredientsRecipe, notEnoughIngredientsRecipe, hasAllIngredientsRecipe]
      );
    });

  it('should be able to remove a recipe from the user\'s weekly meal plan',
    function() {
      user.removeWeeklyRecipe(notEnoughIngredientsRecipe);
      expect(user.weeklyFavorites).to.deep.equal([missingIngredientsRecipe, hasAllIngredientsRecipe]);
    });

  it('should be able to check pantry for ingredients needed to cook a recipe',
    function() {
      expect(user.checkUserPantry(hasAllIngredientsRecipe)).to.equal(true)
      expect(user.checkUserPantry(missingIngredientsRecipe)).to.equal(false)
    });

  it('should be able to check user\'s pantry for amount of ingredients necessary to cook a meal',
    function() {
      expect(user.checkUserPantry(notEnoughIngredientsRecipe)).to.equal(false)
      expect(user.checkUserPantry(missingIngredientsRecipe)).to.equal(false)
    });

  it('should be able to return the pantry ingredients', function() {
    const expected = [
      '4 flat leaf parsley leaves',
      '10 kosher salt',
      '5 wheat flour',
      '5 whole garlic clove',
      '6 salt',
      '8 eggs',
      '4 vanilla',
      '5 buck wheat flour'
    ]
    const pantryIngredients = user.returnPantryIngredients()
      expect(pantryIngredients[0]).to.be.a('string');
      expect(pantryIngredients).to.deep.equal(expected);
      expect(pantryIngredients.length).to.equal(8);
    });

    it('should be able to add ingredients', function() {
      const ingredients = [ { id: 20081, amount: -2 }, { id: 1123, amount: 1 } ]

      const originalFlourAmount = user.pantry[2].amount;

      user.updateIngredientAmount(ingredients)

      const updatedFlourAmount = user.pantry[2].amount;

      expect(originalFlourAmount).to.equal(5);
      expect(updatedFlourAmount).to.equal(3)
    });

    it('should be able to remove ingredients', function() {
      const ingredients = [ { id: 20081, amount: 2 }, { id: 1123, amount: -1 } ]

      const originalFlourAmount = user.pantry[5].amount;

      user.updateIngredientAmount(ingredients)

      const updatedFlourAmount = user.pantry[5].amount;

      expect(originalFlourAmount).to.equal(9);
      expect(updatedFlourAmount).to.equal(8)
    });

    it('should remove ingredients if amount is 0', function() {
      const ingredients = [ { id: 20081, amount: -5 }, { id: 1123, amount: 1 } ]

      const originalFlourAmount = user.pantry[2].amount;
      const ingredientAtIndex2 = user.pantry[2].ingredient;
      const originalPantryLength = user.pantry.length;

      user.updateIngredientAmount(ingredients)

      const newIngAtIndex2 = user.pantry[2].ingredient;
      const updatedPantryLength = user.pantry.length;

      expect(originalFlourAmount).to.equal(5);
      expect(ingredientAtIndex2).to.equal(20081);
      expect(newIngAtIndex2).to.equal(11215);
      expect(originalPantryLength).to.equal(8);
      expect(updatedPantryLength).to.equal(7);
    });

})
