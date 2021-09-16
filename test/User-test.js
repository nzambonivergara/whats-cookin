import { expect } from 'chai';
import User from '../src/classes/User';
import Recipe from '../src/classes/Recipe';
import { usersData } from '../src/data/users-sample';
import { recipeData } from '../src/data/recipes-sample';
import { ingredientsData } from '../src/data/ingredients-sample';
import RecipeRepository from '../src/classes/RecipeRepository';

describe('User', function() {
  let user;
  let recipeOne;
  let recipeTwo;
  let recipeThree;
  let repo;
  const tagOne = 'appetizer';
  const tagTwo = 'snack';
  const tagThree = 'side dish';

  beforeEach(() => {
    repo = new RecipeRepository(recipeData);
    repo.getRecipesInformation(ingredientsData);
    user = new User(usersData[0], repo);
    recipeOne = new Recipe(recipeData[2]);
    recipeTwo = new Recipe(recipeData[1]);
    recipeThree = new Recipe(recipeData[0]);
    recipeOne.getIngredientsInformation(ingredientsData);
    recipeTwo.getIngredientsInformation(ingredientsData);
    recipeThree.getIngredientsInformation(ingredientsData);
    user.addFavorite(recipeOne);
    user.addFavorite(recipeTwo);
    user.addFavorite(recipeThree);
    user.addWeeklyRecipe(recipeOne);
    user.addWeeklyRecipe(recipeTwo);
    user.addWeeklyRecipe(recipeThree);
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
      [recipeOne, recipeTwo, recipeThree]
    );
  });

  it('should be able to remove favorite recipes', function() {
    user.removeFavorite(recipeTwo);
    expect(user.favoriteRecipes).to.deep.equal([recipeOne, recipeThree]);
  });

  it('should be able to filter favorites by recipe tag', function() {
    expect(user.filterFavoriteRecipesByTags([tagOne])).to.deep.equal(
      [recipeOne, recipeThree]
    );
  });

  it('should be able to filter favorites by more than one recipe tag',
    function() {
      expect(user.filterFavoriteRecipesByTags([tagOne, tagTwo, tagThree])).to.deep.equal(
        [recipeOne, recipeTwo, recipeThree]
      );
    });

  it('should be able to filter favorites by ingredient', function() {
    expect(user.findFavoriteRecipesByIngredient('unsalted butter')).to.deep.equal([recipeOne, recipeThree]);
  });

  it('should be able to filter favorites by name', function() {
    expect(user.findFavoriteRecipesByName('cookies')).to.deep.equal([recipeOne]);
  });

  it('should be able to add a recipe to the user\'s weekly meal plan',
    function() {
      expect(user.weeklyFavorites).to.deep.equal(
        [recipeOne, recipeTwo, recipeThree]
      );
    });

  it('should be able to remove a recipe from the user\'s weekly meal plan',
    function() {
      user.removeWeeklyRecipe(recipeTwo);
      expect(user.weeklyFavorites).to.deep.equal([recipeOne, recipeThree]);
    });
})
