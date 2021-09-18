import './styles/index.scss';
import domUpdates from './domUpdates';
import { loadUsers, loadIngredients, loadRecipes } from './apiCalls';
import RecipeRepository from './classes/RecipeRepository';
import User from './classes/User';

let recipeRepository;
let tags = [];
let user;

window.addEventListener('load', getUser);
domUpdates.searchBar.addEventListener('keyup', prepSearch);
domUpdates.searchResults.addEventListener('click', displayRecipe);
domUpdates.searchIngredientGlide.addEventListener('click', selectTag);
domUpdates.homeViewButton.addEventListener('click', displayHomeView);
domUpdates.allRecipesButton.addEventListener('click', displayAllRecipes);
domUpdates.allRecipesContainer.addEventListener('click', displayRecipe);
domUpdates.taggedRecipesContainer.addEventListener('click', displayRecipe);
domUpdates.displayedSearchResults.addEventListener('click', displayRecipe);
domUpdates.weeklyRecipes.addEventListener('click', displayRecipe);
domUpdates.addToWeekButton.addEventListener('click', addToWeeklyRecipes);
domUpdates.weeklyRecipesButton.addEventListener('click', displayWeeklyRecipes);
domUpdates.removeFromWeekButton.addEventListener('click', removeFromWeeklyRecipes);
domUpdates.favoritesViewButton.addEventListener('click', displayFavoritesView);
domUpdates.addToFavoritesButton.addEventListener('click', addToFavorites);
domUpdates.favoriteRecipesContainer.addEventListener('click', displayRecipe);
domUpdates.removeFromFavoritesButton.addEventListener('click', removeFromFavorites);
domUpdates.favoriteRecipesSection.addEventListener('click', selectTag)
domUpdates.favoriteTaggedRecipesContainer.addEventListener('click', displayRecipe)

function getRandomUser(array) {
  const index =  Math.floor(Math.random() * array.length);
  const userData = array[index];
  return userData;
}

function getUser() {
  loadUsers().then(usersData => {
    getRecipes(usersData);
  });
}

function getRecipes(usersData) {
  loadRecipes().then(recipeData => {
    recipeRepository = new RecipeRepository(recipeData);
    getIngredients(usersData);
  });
}

function getIngredients(usersData) {
  loadIngredients().then(ingredientsData => {
    recipeRepository.getRecipesInformation(ingredientsData);
    
    const userData = getRandomUser(usersData);
    user = new User(userData, recipeRepository);
  });
}

function addToFavorites() {
  const favoriteRecipe = recipeRepository.recipes.find(recipe => recipe.id === parseInt(domUpdates.addToFavoritesButton.name));
  user.addFavorite(favoriteRecipe);

  domUpdates.hide(domUpdates.addToFavoritesButton);
  domUpdates.show(domUpdates.removeFromFavoritesButton);
}

function removeFromFavorites() {
  const favoriteRecipe = recipeRepository.recipes.find(recipe => recipe.id === parseInt(domUpdates.removeFromFavoritesButton.name));
  user.removeFavorite(favoriteRecipe);

  domUpdates.hide(domUpdates.removeFromFavoritesButton);
  domUpdates.show(domUpdates.addToFavoritesButton);
}

function displayFavoritesView() {
  domUpdates.hide(domUpdates.searchResults);
  domUpdates.hide(domUpdates.homeViewSection);
  domUpdates.hide(domUpdates.singleRecipeView);
  domUpdates.hide(domUpdates.allRecipesSection);
  domUpdates.hide(domUpdates.weeklyRecipesSection);
  domUpdates.show(domUpdates.favoriteRecipesSection);
  clearTags();
  checkFavoriteRecipes();
}

function checkFavoriteRecipes() {
  if (user.favoriteRecipes.length) {
    domUpdates.hide(domUpdates.noFavoritesMessage);
    domUpdates.hide(domUpdates.favoriteTaggedRecipesContainer);
    domUpdates.show(domUpdates.favoriteRecipesContainer);

    domUpdates.addTagsGlide();
    domUpdates.addStyling(domUpdates.favoritesTagsGlide, 'featured__search-ingredient-glide');
    domUpdates.renderRecipeCards(domUpdates.favoriteRecipesContainer, user.favoriteRecipes);
  } else {
    domUpdates.hide(domUpdates.favoriteRecipesContainer);
    domUpdates.show(domUpdates.noFavoritesMessage);
    domUpdates.favoriteRecipesSection.removeChild(domUpdates.favoritesTagsGlide);
  }
}

function prepSearch(event) {
  const searchTerm = event.target.value.toLowerCase();
  checkSearchField(searchTerm);
}

function checkSearchField(searchTerm) {
  if (!domUpdates.searchBar.value && !domUpdates.displayedSearchResults.innerHTML) {
    return;

  } else if (domUpdates.searchBar.value) {
    domUpdates.hide(domUpdates.noResults);
    domUpdates.hide(domUpdates.homeViewSection);
    domUpdates.hide(domUpdates.weeklyRecipesSection);
    domUpdates.hide(domUpdates.taggedRecipesContainer);
    domUpdates.show(domUpdates.searchResults);
    domUpdates.show(domUpdates.displayedSearchResults);

    domUpdates.addStyling(domUpdates.singleRecipeView, 'single-recipe-view-alt');
    domUpdates.addStyling(domUpdates.allRecipesSection, 'all-recipes-view__recipes-container-alt');
    domUpdates.removeStyling(domUpdates.singleRecipeView, 'single-recipe-view');
    domUpdates.removeStyling(domUpdates.allRecipesSection, 'all-recipes-view__recipes-container');

    searchingNow(searchTerm);

  } else {
    domUpdates.hide(domUpdates.displayedSearchResults);
    domUpdates.show(domUpdates.noResults);
    domUpdates.show(domUpdates.searchResults);
  }
}

function searchingNow(searchTerm) {
  const filteredRecipes = recipeRepository.findRecipesByName(searchTerm);
  const foundRecipesByIngredient = recipeRepository.findRecipesByIngredient(searchTerm);

  foundRecipesByIngredient.forEach(recipe => {
    if (!filteredRecipes.includes(recipe)) {
      filteredRecipes.push(recipe);
    }
  });

  domUpdates.renderRecipeCards(domUpdates.displayedSearchResults, filteredRecipes);
}

function displayHomeView() {
  domUpdates.hide(domUpdates.noResults);
  domUpdates.hide(domUpdates.searchResults);
  domUpdates.hide(domUpdates.singleRecipeView);
  domUpdates.hide(domUpdates.allRecipesSection);
  domUpdates.hide(domUpdates.weeklyRecipesSection);
  domUpdates.hide(domUpdates.displayedSearchResults);
  domUpdates.hide(domUpdates.favoriteRecipesSection);
  domUpdates.show(domUpdates.homeViewSection);
  domUpdates.hide(domUpdates.taggedRecipesContainer);
  clearTags();
  domUpdates.addStyling(domUpdates.singleRecipeView, 'single-recipe-view');
  domUpdates.addStyling(domUpdates.allRecipesSection, 'all-recipes-view__recipes-container');
  domUpdates.removeStyling(domUpdates.singleRecipeView, 'single-recipe-view-alt');
  domUpdates.removeStyling(domUpdates.allRecipesSection, 'all-recipes-view__recipes-container-alt');
}

function displayAllRecipes() {
  domUpdates.hide(domUpdates.searchResults);
  domUpdates.hide(domUpdates.homeViewSection);
  domUpdates.hide(domUpdates.singleRecipeView);
  domUpdates.hide(domUpdates.weeklyRecipesSection);
  domUpdates.hide(domUpdates.favoriteRecipesSection);
  domUpdates.show(domUpdates.allRecipesSection);

  domUpdates.addStyling(domUpdates.singleRecipeView, 'single-recipe-view');
  domUpdates.addStyling(domUpdates.allRecipesSection, 'all-recipes-view__recipes-container');
  domUpdates.removeStyling(domUpdates.singleRecipeView, 'single-recipe-view-alt');
  domUpdates.removeStyling(domUpdates.allRecipesSection, 'all-recipes-view__recipes-container-alt');

  sortRecipesByName();
  domUpdates.renderRecipeCards(domUpdates.allRecipesContainer, recipeRepository.recipes);
}

function displayRecipe(event) {
  const card = event.target.parentNode;

  if (card.classList.contains('recipes-container__recipe-card')) {
    domUpdates.hide(domUpdates.homeViewSection);
    domUpdates.hide(domUpdates.allRecipesSection);
    domUpdates.hide(domUpdates.weeklyRecipesSection);
    domUpdates.hide(domUpdates.favoriteRecipesSection);
    domUpdates.show(domUpdates.singleRecipeView);
    renderIndividualRecipe(card.id);
  }
}

function addToWeeklyRecipes() {
  const recipe = findRecipeTitle();
  user.addWeeklyRecipe(recipe);

  domUpdates.hide(domUpdates.addToWeekButton);
  domUpdates.show(domUpdates.removeFromWeekButton);
}

function removeFromWeeklyRecipes() {
  const recipe = findRecipeTitle();
  user.removeWeeklyRecipe(recipe);

  domUpdates.hide(domUpdates.removeFromWeekButton);
  domUpdates.show(domUpdates.addToWeekButton);
}

function findRecipeTitle() {
  const recipeTitle = document.querySelector('.recipe-title').innerText;
  const recipes = recipeRepository.findRecipesByName(recipeTitle.toLowerCase());
  return recipes[0];
}

function displayWeeklyRecipes() {
  domUpdates.hide(domUpdates.homeViewSection);
  domUpdates.hide(domUpdates.singleRecipeView);
  domUpdates.hide(domUpdates.allRecipesSection);
  domUpdates.hide(domUpdates.favoriteRecipesSection);
  domUpdates.show(domUpdates.weeklyRecipesSection);

  checkWeeklyFavorites();
}

function checkWeeklyFavorites() {
  if (!user.weeklyFavorites.length) {
    domUpdates.hide(domUpdates.weeklyRecipes);
    domUpdates.show(domUpdates.noWeeklyRecipes);

  } else {
    domUpdates.hide(domUpdates.noWeeklyRecipes);
    domUpdates.show(domUpdates.weeklyRecipes);

    domUpdates.renderRecipeCards(domUpdates.weeklyRecipes, user.weeklyFavorites);
  }
}

function selectTag(event) {
  const tagElement = event.target.closest('button');
  const tag = tagElement.value;

  toggleTag(tag, tagElement);
  if (tagElement.parentNode.id === 'favoriteSearchGlide') {
    updateFavorites();
  } else {
    updateMain();
  }
}

function updateFavorites() {
  if (tags.length) {
    const filteredRecipes = user.filterFavoriteRecipesByTags(tags);
    domUpdates.renderRecipeCards(domUpdates.favoriteTaggedRecipesContainer, filteredRecipes);

    domUpdates.hide(domUpdates.favoriteRecipesContainer);
    domUpdates.show(domUpdates.favoriteTaggedRecipesContainer);

  } else {
    domUpdates.removeAllRecipeCards();

    domUpdates.hide(domUpdates.favoriteTaggedRecipesContainer);
    checkFavoriteRecipes();
  }
}

function updateMain() {
  if (tags.length) {
    const filteredRecipes = recipeRepository.findRecipesByTag(tags);
    domUpdates.renderRecipeCards(domUpdates.taggedRecipesContainer, filteredRecipes);

    domUpdates.hide(domUpdates.noResults);
    domUpdates.hide(domUpdates.searchResults);
    domUpdates.hide(domUpdates.singleRecipeView);
    domUpdates.hide(domUpdates.allRecipesSection);
    domUpdates.hide(domUpdates.mainContentContainer);
    domUpdates.hide(domUpdates.weeklyRecipesSection);
    domUpdates.hide(domUpdates.favoriteRecipesSection);
    domUpdates.hide(domUpdates.displayedSearchResults);
    domUpdates.show(domUpdates.homeViewSection);
    domUpdates.show(domUpdates.mainContentContainer);
    domUpdates.show(domUpdates.taggedRecipesContainer);

  } else {
    domUpdates.removeAllRecipeCards();

    domUpdates.hide(domUpdates.taggedRecipesContainer);
    domUpdates.show(domUpdates.homeViewImage)
  }
}

function toggleTag(tag, tagElement) {
  if (!tags.includes(tag)) {
    addTag(tag);

  } else {
    removeTag(tag);
  }
  tagElement.classList.toggle('tag-selected');
}

function addTag(tag) {
  tags.push(tag);
}

function removeTag(tag) {
  tags = tags.filter((element) => {
    if (element === tag) {
      return false;
    }
    return true;
  })
}

function renderIndividualRecipe(recipeId) {
  const recipe = recipeRepository.recipes.find(recipe => recipe.id === parseInt(recipeId));

  domUpdates.individualRecipeInterpolation(recipe);

  createIngredientList(recipe);
  createInstructionList(recipe);
  checkIfRecipeInWeekly(recipe);
  checkIfRecipeInFavorites(recipe);
}

function checkIfRecipeInWeekly(recipe) {
  const matchingRecipe = user.weeklyFavorites.find((weeklyRecipe) => weeklyRecipe.id === recipe.id);
  if (matchingRecipe) {
    domUpdates.hide(domUpdates.addToWeekButton);
    domUpdates.show(domUpdates.removeFromWeekButton);

  } else {
    domUpdates.hide(domUpdates.removeFromWeekButton);
    domUpdates.show(domUpdates.addToWeekButton);
  }
}

function checkIfRecipeInFavorites(recipe) {
  if (user.favoriteRecipes.includes(recipe)) {
    domUpdates.hide(domUpdates.addToFavoritesButton);
    domUpdates.show(domUpdates.removeFromFavoritesButton);

  } else {
    domUpdates.hide(domUpdates.removeFromFavoritesButton);
    domUpdates.show(domUpdates.addToFavoritesButton);
  }
}

function createIngredientList(recipe) {
  const ingredientList = recipe.returnIngredientsList();
  domUpdates.renderRecipeIngredients(ingredientList);
}

function createInstructionList(recipe) {
  const instructionsList = recipe.returnInstructions();
  domUpdates.renderRecipeInstructions(instructionsList);
}

function sortRecipesByName() {
  recipeRepository.recipes.sort((a, b) => a.name - b.name);
}

function clearTags() {
  const selectedTags = document.querySelectorAll('.tag-selected')
  tags = [];
  selectedTags.forEach(tag => tag.classList.toggle('tag-selected'));
}
