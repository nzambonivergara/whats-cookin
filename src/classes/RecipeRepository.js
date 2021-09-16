import Recipe from './Recipe';

class RecipeRepository {
  constructor(recipeData) {
    this.recipes = recipeData;
  }

  getRecipesInformation(ingredientsData) {
    this.recipes = this.recipes.map(recipe => new Recipe(recipe));
    this.recipes.forEach((recipe) => {
      recipe.getIngredientsInformation(ingredientsData);
    });
  }

  findRecipesByTag(tags, recipesToSearch) {
    const recipes = recipesToSearch || this.recipes;
    const foundRecipes = recipes.reduce((accumulator, recipe) => {
      tags.forEach((tag) => {
        if (recipe.tags.includes(tag) && !accumulator.includes(recipe)) {
          accumulator.push(recipe);
        }
      });
      return accumulator;
    }, []);
    return foundRecipes;
  }

  findRecipesByName(searchTerm, recipesToSearch) {
    const recipes = recipesToSearch || this.recipes;
    const foundRecipes = recipes.filter((recipe) => {
      return recipe.name.toLowerCase().includes(searchTerm.toLowerCase());
    })
    return foundRecipes;
  }

  findRecipesByIngredient(ingredientName) {
    const filteredRecipe = this.recipes.filter((recipe) => {
      const hasMatchingIngredient = recipe.ingredients.find((ingredient) => {
        return ingredient.name.includes(ingredientName);
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
