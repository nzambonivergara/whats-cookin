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
    // const userIng = this.pantry.map(ing => ing.ingredient)
    // const recipeIng = recipe.ingredients.map(mIng => mIng.id)
  }



  returnNeededIngredients(recipe) {
    const result = recipe.ingredients.reduce((obj, rIng) => {
      let match = this.pantry.find(pIng => {
        return rIng.id === pIng.ingredient
      })

      if (match) {
        obj.have.push(rIng)
      } else {
        obj.need.push(rIng)
      }

      return obj
    }, {have: [], need: []})

    const needByAmount = result.have.filter(resultIng => {
      let foundMatches = this.pantry.find(ingredi => ingredi.ingredient === resultIng.id)
      return foundMatches.amount < resultIng.amount

    }).map(recipIng => {
      const foundMatches = this.pantry.find(panIng => panIng.ingredient === recipIng.id)

      return {
        id: recipIng.id,
        name: recipIng.name,
        amount: recipIng.amount - foundMatches.amount
      }
    })

    const totalNeed = result.need.concat(needByAmount)
    console.log(totalNeed)
    return totalNeed
  }


  // chain on a .map to the filter/find and within it set a var and assign it to
  //    find through the pantry ingredient ids, matching them to the recipe ingredient ids__
  // return { name: recipe ingredient name, amount: recipe ingredient amount
    //    minus var assigned to pantry ing amount}__
    // create const totalNeed and assign it to result.need and concat it with needByAmount__
    // return totalNeed__


      // this.pantry.forEach(pIng => {
      //   // console.log('ring', rIng.id)
      //   // console.log('ping', pIng.ingredient)
      //   const ingNeeded = rIng.name;
      //   const partialAmountNeeded = (rIng.amount - pIng.amount);
      //   const fullAmountNeeded = rIng.amount;
      //   const mem = pIng.ingredient
      //   const memmeme = rIng.id
      //   if (rIng.id === pIng.ingredient && pIng.amount < rIng.amount) {
      //     mismatched.push({ingNeeded, partialAmountNeeded})
      //   } else if (rIng.id === pIng.ingredient && pIng.amount >= rIng.amount) {
      //     match += 1;
      //   } else if (rIng.id !== pIng.ingredient && !missingIngredients.includes(pIng.ingredient) && !missingIngredients.includes(rIng.id)){
      //     missingIngredients.push({mem, memmeme, ingNeeded, fullAmountNeeded})
      //   }
      // })
      // if (mismatched.includes(rIng)) {
      //   const mismatched.splice(mismatched.indexOf(rIng))
      // }
    // })
    // missingIngredients.forEach(ing => {
    //   if (ing.name ===
    // })
    // this.sortThroughMissingIngredients(missingIngredients)
    // console.log(mismatched)
    // console.log('FFF', missingIngredients)
    // const uniqueIngredients = [];
    // missingIngredients.forEach(ing => {
    //   if (!uniqueIngredients.includes(ing)) {
    //     console.log('baby')
    //     uniqueIngredients.push(ing);
    //   }
    // })
    // console.log(uniqueIngredients)
    // return uniqueIngredients

    // this.displayMissingIngredients(missingIngredients);
  //   return match === recipe.ingredients.length;
  // }

  // sortThroughMissingIngredients(missingIngredients) {


  displayMissingIngredients(missingIngredients) {
    console.log('my missing ingredints', missingIngredients)
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
