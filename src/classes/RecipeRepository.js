import Recipe from './Recipe';

class RecipeRepository {
  constructor(recipeData) {
    this.recipes = recipeData.map(recipe => new Recipe(recipe));
  }

  getRecipesInformation(ingredientsData) {
    this.recipes.forEach((recipe) => {
      recipe.getIngredientsInformation(ingredientsData);
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

  findRecipesByName(searchTerm) {
    const foundRecipes = this.recipes.filter((recipe) => {
      return recipe.name.toLowerCase().includes(searchTerm);
    })
    return foundRecipes;
  }

  findRecipesByIngredient(ingredientName) {
    const filteredRecipe = this.recipes.filter((recipe) => {
      const hasMatchingIngredient = recipe.ingredients.find((ingredient) => {
        return ingredient.name === ingredientName;
      })
      if (hasMatchingIngredient) {
        return true;
      }
      return false;
    })
    return filteredRecipe;
  }
}

export default RecipeRepository;
