import Ingredient from './Ingredient';

class User {
  constructor(usersData) {
    this.name = usersData.name;
    this.id = usersData.id;
    this.pantry = usersData.pantry
    this.favoriteRecipes = [];
    this.weeklyFavorites = [];
    this.filteredByName = [];
  }

  addFavorite(recipe) {
    this.favoriteRecipes.push(recipe)
  }

  addWeeklyRecipe(recipe) {
    const weeklyFav = this.weeklyFavorites;
    weeklyFav.push(recipe);
  }

  removeFavorite(recipe) {
    this.favoriteRecipes.splice(this.favoriteRecipes.indexOf(recipe), 1);
  }

  removeWeeklyRecipe(recipe) {
    return this.weeklyFavorites.splice(
      this.weeklyFavorites.indexOf(recipe), 1);
  }

  filterFavoriteRecipesByTags(tags) {
    const recipes = this.favoriteRecipes.reduce((acc, recipe) => {
      tags.forEach((tag) => {
        if (recipe.tags.includes(tag) && !acc.includes(recipe)) {
          acc.push(recipe);
        }
      });
      return acc;
    }, []);
    return recipes;
  }

  filterFavoriteRecipesByIngredient(ingredientName, ingredientsData) {
    this.getIngredientNames(ingredientsData);
  }
}

export default User;
