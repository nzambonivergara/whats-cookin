import Ingredient from './Ingredient';

class User {
  constructor(usersData, recipeRepository) {
    this.name = usersData.name;
    this.id = usersData.id;
    this.pantry = usersData.pantry;
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

  checkUserPantry(recipe) {
    let match = 0;
    recipe.ingredients.forEach(rIng => {
      this.pantry.forEach(pIng => {
        if (rIng.id === pIng.ingredient && pIng.amount >= rIng.amount) {
          match += 1;
        };
      });
    });
    return match === recipe.ingredients.length;
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

  returnPantryIngredients() {
    let matchingIngredient;

    return this.pantry.reduce((acc, pantryIngredient) => {
      this.repo.recipes.find(recipe => {
        matchingIngredient =  recipe.ingredients.find(ingredient => pantryIngredient.ingredient === ingredient.id)

        return matchingIngredient;
      })

      acc.push(`${pantryIngredient.amount} ${matchingIngredient.name}`)
      return acc
    }, [])
  }

  updateIngredientAmount(ingredients) {
    ingredients.forEach(ingredient => {
      const match = this.pantry.find(pantryIngredient => pantryIngredient.ingredient === ingredient.id)

      if (match) {
        match.amount += ingredient.amount;
        !match.amount && this.removeIngredient(match);
      } else {
        this.addIngredientToPantry(ingredient);
      }
    })
  }

  removeIngredient(ingredient) {
    const ingIndex = this.pantry.indexOf(ingredient);
    this.pantry.splice(ingIndex, 1);
  }

  addIngredientToPantry(ingredient) {
    this.pantry.push({ ingredient: ingredient.id, amount: ingredient.amount });
  }
}

export default User;
