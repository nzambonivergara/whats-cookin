import { expect } from 'chai';
import User from '../src/classes/User.js';
import Recipe from '../src/classes/Recipe.js';
import { recipeData } from '../src/data/recipes.js';
import { users } from '../src/data/users.js';

describe('User', function() {
  let user;
  let recipeOne;
  let recipeTwo;
  let recipeThree;
  let tagOne;
  let tagTwo;

  beforeEach(() => {
    user = new User(users[0]);
    recipeOne = new Recipe(recipeData[7]); // recipeOne and recipeTwo need to share a tag in commen
    recipeTwo = new Recipe(recipeData[3]);
    recipeThree = new Recipe(recipeData[0]); // recipeTwo and recipeThree need to have an igredient in common that recipeOne does *not* have
    tagOne = 'appetizer'
    tagTwo = 'snack'
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
    expect(user.pantry).to.equal(users[0].pantry);
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
    user.filterFavoriteRecipesByTags(tagOne);
    expect(user.filteredFavoritesByTag).to.deep.equal(
      [recipeOne, recipeThree]
    );
  });

  it('should be able to filter favorites by more than one recipe tag',
    function() {
      user.filterFavoriteRecipesByTags(tagOne, tagTwo);
      expect(user.filteredFavoritesByTag).to.deep.equal(
        [recipeOne, recipeThree]
      );
    });

  it('should be able to filter favorites by ingredient', function() {
    user.filterFavoriteRecipesByIngredient('wheat flour');
    expect(user.filteredByIngredient).to.deep.equal([recipeOne, recipeThree]);
  });

  it('should be able to filter favorites by name', function() {
    // the test portion commented out is the less spicy version; the test not commented out is SUPER spicy, ngl
    user.filterFavoriteRecipesByName('cookies'); //or => ('Loaded Chocolate Chip Pudding Cookie Cups');
    expect(user.filteredByName).to.deep.equal([recipeOne, recipeThree]); //or => ([recipeOne]);
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
      expect(user.favoriteRecipes).to.deep.equal([recipeOne, recipeThree]);
    });
})
