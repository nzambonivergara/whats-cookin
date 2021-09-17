import Ingredient from './Ingredient';
import domUpdates from '../domUpdates';

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





  prepPantryCheck(ingredientData, amount) {
    const findIngredientForPantry = ingredientData.find(ingredient => {
      if (ingredient.name.toLowerCase() === domUpdates.ingredientInputFieldTwo.innerText.toLowerCase()) {
        return ingredient
      };
    });
    this.pantryCheck(findIngredientForPantry, amount);
  }

  pantryCheck(findIngredientForPantry, amount) {
    const newIngredient = {
      ingredient: findIngredientForPantry.id,
      amount: amount
    };

    if (!this.pantry.length) {
      this.pantry.push(newIngredient);

    } else {
      this.pantry.forEach(ingredient => {
        if (ingredient.ingredient !== findIngredientForPantry.id) {
          console.log('is this on')
          this.pantry.push(newIngredient);
        };
      });
    };
    console.log('This one', this.pantry)

  }





  removeFavorite(recipe) {
    this.favoriteRecipes.splice(this.favoriteRecipes.indexOf(recipe), 1);
  }

  removeWeeklyRecipe(recipe) {
    return this.weeklyFavorites.splice(
      this.weeklyFavorites.indexOf(recipe), 1);
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
