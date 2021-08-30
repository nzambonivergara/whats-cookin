import { expect } from 'chai';
import User from '../src/classes/User.js';
import Recipe from '../src/classes/Recipe.js';
import recipeData from '../src/data/recipes.js';
import users from '../src/data/users.js';

describe('User', function() {
  let user;
  let recipeOne;
  let recipeTwo;
  let recipeThree;

  beforeEach(() => {
    user = new User(users.name, users.id, users.pantry);
    recipeOne = new Recipe(
      recipeData[0].id,
      recipeData[0].image,
      recipeData[0].ingredients,
      recipeData[0].instructions,
      recipeData[0].name,
      recipeData[0].tags
    ); // recipeOne and recipeTwo need to share a tag in commen
    recipeTwo = new Recipe(
      recipeData[1].id,
      recipeData[1].image,
      recipeData[1].ingredients,
      recipeData[1].instructions,
      recipeData[1].name,
      recipeData[1].tags
    );
    recipeThree = new Recipe(
      recipeData[2].id,
      recipeData[2].image,
      recipeData[2].ingredients,
      recipeData[2].instructions,
      recipeData[2].name,
      recipeData[2].tags
    ); // recipeTwo and recipeThree need to have an igredient in common that recipeOne does *not* have
  });

  it('should have a name', function() {
    expect(user.name).to.equal('Saige O\'Kon');
  });

  it('should have an ID', function() {
    expect(user.id).to.equal(1);
  });

  it('should have a pantry of ingredients', function() {
    expect(user.pantry).to.equal(users.pantry);
  });

  it('should be able to add a favorite recipe', function() {
    expect(user.favoriteRecipes).to.deep.equal([]);
    user.addFavorite(recipeOne);
    expect(user.favoriteRecipes).to.deep.equal([recipeOne]);
    user.addFavorite(recipeTwo);
    expect(user.favoriteRecipes).to.deep.equal([recipeOne, recipeTwo]);
  });

  it('should be able to remove favorite recipes', function() {
    user.addFavorite(recipeOne);
    user.addFavorite(recipeTwo);
    user.addFavorite(recipeThree);

    user.removeFavorite(recipeTwo);
    expect(user.favoriteRecipes).to.deep.equal([recipeOne, recipeThree]);
  });

  it('should be able to filter favorites by recipe tag', function() {
    user.addFavorite(recipeOne);
    user.addFavorite(recipeTwo);
    user.addFavorite(recipeThree);

    user.filterFavoriteRecipesByTags([recipeOne, recipeTwo, recipeThree]);
    expect(user.filteredFavoritesByTag).to.deep.equal([recipeOne, recipeTwo]);
  });

  it('should be able to filter favorites by ingredient', function() {
    user.addFavorite(recipeOne);
    user.addFavorite(recipeTwo);
    user.addFavorite(recipeThree);

    user.filterFavoriteRecipesByIngredient([recipeOne, recipeTwo, recipeThree]);
    expect(user.filteredByIngredient).to.deep.equal([recipeTwo, recipeThree]);
  });

  it('should be able to filter favorites by name', function() {
    user.addFavorite(recipeOne);
    user.addFavorite(recipeTwo);
    user.addFavorite(recipeThree);

    user.filterFavoriteRecipesByName([recipeOne, recipeTwo, recipeThree]);
    expect(user.filteredByName).to.deep.equal([recipeThree]);
  });

  it('should be able to add a recipe to the user\'s weekly meal plan',
    function() {
      expect(user.weeklyFavorites).to.deep.equal([]);

      user.addWeeklyRecipe(recipeOne);
      expect(user.weeklyFavorites).to.deep.equal([recipeOne]);
      user.addWeeklyRecipe(recipeTwo);
      expect(user.weeklyFavorites).to.deep.equal([recipeOne, recipeTwo]);
    });

  it('should be able to remove a recipe from the user\'s weekly meal plan',
    function() {
      user.addWeeklyRecipe(recipeOne);
      user.addWeeklyRecipe(recipeTwo);
      user.addWeeklyRecipe(recipeThree);

      user.removeWeeklyRecipe(recipeTwo);
      expect(user.favoriteRecipes).to.deep.equal([recipeOne, recipeThree]);
    });
})
