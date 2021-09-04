import Recipe from './Recipe';

class RecipeRepository {
  constructor(recipeData) {
    this.recipes = recipeData.map(recipe => new Recipe(recipe));
  }

  getRecipesInformation() {
    this.recipes.forEach((recipe) => {
      recipe.getIngredientsInformation();
    })
  }

  findRecipesByTag(tags) {
    const recipes = this.recipes.reduce((accumulator, recipe) => {
      tags.forEach((tag) => {
        if (recipe.tags.includes(tag) && !accumulator.includes(recipe)) {
          accumulator.push(recipe);
        }
      });
      return accumulator;
    }, []);
    return recipes;
  }

  findRecipes(searchTerm) {
    const filteredRecipes = this.recipes.filter(recipe => {
      const searchedByTag = recipe.tags.toString().toLowerCase().includes(searchTerm);
      const searchedByName = recipe.name.toLowerCase().includes(searchTerm);
      const searchedByIngredient = recipe.ingredients.toString().toLowerCase().includes(searchTerm);
      return searchedByName || searchedByTag || searchedByIngredient;
    });

    return filteredRecipes
  }
}


export default RecipeRepository;
