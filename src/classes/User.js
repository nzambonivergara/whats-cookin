class User {
  constructor(usersData) {
    this.name = usersData.name;
    this.id = usersData.id;
    this.pantry = usersData.pantry
    this.favoriteRecipes = [];
    this.weeklyFavorites = [];
    this.filteredByTag = [];
    this.filteredByIngredient = [];
    this.filteredByName = [];
  }

  addFavorite(recipe) {
    let favRecipe = this.favoriteRecipes;
    favRecipe.push(recipe);
  }

  addWeeklyRecipe() {

  }

  removeFavorite(recipe) {
    return this.favoriteRecipes.splice(
      this.favoriteRecipes.indexOf(recipe), 1);
  }

  removeWeeklyRecipe(recipe) {

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

  // idOfIngredient(ingredientName, ingredientsData) {
  //   return ingredientsData.name === ingredientName
  // }
  //
  // filterFavoriteRecipesByIngredient(ingredientNames, ingredientsData) {
  //   ingredientNames.forEach((ingredient) => {
  //     let ingredientById = ingredientsData.find(function() {
  //       this.idOfIngredient(ingredient, ingredientsData)
  //     })
  //     console.log(ingredientById)
  //     return ingredientById
  //   })
  // }
}

export default User;
