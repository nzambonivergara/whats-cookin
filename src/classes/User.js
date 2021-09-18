import Ingredient from './Ingredient';

class User {
  constructor(usersData, recipeRepository) {
    this.name = usersData.name;
    this.id = usersData.id;
    this.pantry = usersData.pantry
    this.favoriteRecipes = [];
    this.weeklyFavorites = [];
    this.filteredByName = [];
    this.repo = recipeRepository;
  }

  addFavorite(recipe) {
    this.favoriteRecipes.push(recipe);
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

  removeIngredientsUsed(ingredients) {
    const pantryIngredients = this.pantry
    const searchForMatches = ingredients.forEach(chosenIngredient => {
      pantryIngredients.filter(pantryItem => {
        return chosenIngredient.id === pantryItem.ingredient
      })
      console.log(searchForMatches)
    })
  }

  checkUserPantry() {
    const recipeIngredients = recipe.ingredients.sort((a, b) => {
      return a.id - b.id
    })

    const userPantryu = this.pantry.sort((a, b) => {
      return a.ingredient - b.ingredient
    })

    .map((id, i) => {
      if (newArr2[i] === id) {
        return true
      }
      return false
    })
    isMatch()
  }

  isMatch() {
    if (checkUserPantry) {
      return true
    }
    return false
  }

  filterFavoriteRecipesByTags(tags) {
    const foundRecipes = this.repo.findRecipesByTag(tags, this.favoriteRecipes);
    return foundRecipes;
  }

  findFavoriteRecipesByName(searchTerm) {
    const foundRecipes = this.repo.findRecipesByName(searchTerm, this.favoriteRecipes);
    return foundRecipes;
  }

  findFavoriteRecipesByIngredient(ingredientName) {
    const filteredRecipe = this.repo.findRecipesByIngredient(ingredientName, this.favoriteRecipes);
    return filteredRecipe;
  }
}

export default User;
