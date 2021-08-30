const assert = require('chai').assert;
const User = require('../src/classes/User.js');
const Recipe = require('../src/classes/Recipe.js');

define('User', function() {
  var user;
  var recipeOne;
  var recipeTwo;
  var recipeThree;

  beforeEach(() => {
    user = new User();
    recipeOne = new Recipe(); // recipeOne and recipeTwo need to share a tag in commen
    recipeTwo = new Recipe();
    recipeThree = new Recipe(); // recipeTwo and recipeThree need to have an igredient in common that recipeOne does *not* have
  });

  it('should be able to add a favorite recipe', function() {
    assert.deepEqual(user.favoriteRecipes, []);
    user.addFavorite(recipeOne);
    assert.deepEqual(user.favoriteRecipes, [recipeOne]);
    user.addFavorite(recipeTwo);
    assert.deepEqual(user.favoriteRecipes, [recipeOne, recipeTwo]);
  });

  it('should be able to remove favorite recipes', function() {
    user.addFavorite(recipeOne);
    user.addFavorite(recipeTwo);
    user.addFavorite(recipeThree);

    user.removeFavorite(recipeTwo);
    assert.deepEqual(user.favoriteRecipes, [recipeOne, recipeThree]);
  });

  it('should be able to filter favorites by recipe tag', function() {
    user.addFavorite(recipeOne);
    user.addFavorite(recipeTwo);
    user.addFavorite(recipeThree);

    user.filterFavoriteRecipesByTags(tags);
    assert.deepEqual(user.filteredFavoritesByTag, [recipeOne, recipeTwo]);
  });

  it('should be able to filter favorites by ingredient', function() {
    user.addFavorite(recipeOne);
    user.addFavorite(recipeTwo);
    user.addFavorite(recipeThree);

    user.filterFavoriteRecipesByIngredient(ingredient);
    assert.deepEqual(user.filteredByIngredient, [recipeTwo, recipeThree]);
  });

  it('should be able to filter favorites by name', function() {
    user.addFavorite(recipeOne);
    user.addFavorite(recipeTwo);
    user.addFavorite(recipeThree);

    user.filterFavoriteRecipesByName(name);
    assert.deepEqual(user.filteredByName, [recipeThree]);
  });

  it('should be able to add a recipe to the user\'s weekly meal plan', function() {
    expect(user.weeklyFavorites).to.deep.equal([]);

    user.addWeeklyRecipe(recipeOne);
    expect(user.weeklyFavorites).to.deep.equal([recipeOne]);
    user.addWeeklyRecipe(recipeTwo);
    expect(user.weeklyFavorites).to.deep.equal([recipeOne, recipeTwo]);
  });

  it('should be able to remove a recipe from the user\'s weekly meal plan', function() {
    user.addWeeklyRecipe(recipeOne);
    user.addWeeklyRecipe(recipeTwo);
    user.addWeeklyRecipe(recipeThree);

    user.removeWeeklyRecipe(recipeTwo);
    expect(user.favoriteRecipes).to.deep.equal([recipeOne, recipeThree]);
  });
});
