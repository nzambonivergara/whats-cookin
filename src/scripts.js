import './styles.css';
import apiCalls from './apiCalls';
import { loadUsers, loadIngredients, loadRecipes } from './apiCalls';
import RecipeRepository from './classes/RecipeRepository';
import User from './classes/User';

let recipeRepository;
let filteredRecipes;
let tags = [];
let user;

const homeViewImage = document.getElementById('homeViewImage');
const homeViewButton = document.getElementById('homeViewButton');
const homeViewSection = document.getElementById('homeViewSection');
const singleRecipeView = document.getElementById('singleRecipeView');

const allRecipesButton = document.getElementById('allRecipesButton');
const allRecipesSection = document.getElementById('allRecipesSection');
const allRecipesContainer = document.getElementById('allRecipesContainer');

const noFavoritesMessage = document.getElementById('noFavoritesMessage');
const favoritesViewButton = document.getElementById('favoritesViewButton');
const addToFavoritesButton = document.getElementById('addToFavoritesButton');
const favoriteRecipesSection = document.getElementById('favoriteRecipesSection');
const favoriteRecipesContainer = document.getElementById('favoriteRecipesContainer');
const removeFromFavoritesButton = document.getElementById('removeFromFavoritesButton')

const weeklyRecipesButton = document.querySelector('.nav-tabs__this-week');
const weeklyRecipesSection = document.getElementById('weeklyRecipesSection');

const recipeName = document.getElementById('recipeName');
const recipeCost = document.getElementById('recipeCost');
const recipeImage = document.getElementById('recipeImage');
const recipeIngredients = document.getElementById('recipeIngredients');
const recipeInstructions = document.getElementById('recipeInstructions');
const mainContentContainer = document.getElementById('mainContentContainer');
const searchIngredientGlide = document.getElementById('searchIngredientGlide');
const taggedRecipesContainer = document.getElementById('taggedRecipesContainer');

const noResults = document.getElementById('noResults');
const searchBar = document.getElementById('searchBarInput');
const searchResults = document.getElementById('searchedRecipesContainer');
const displayedSearchResults = document.getElementById('searchedRecipes');

const weeklyRecipes = document.getElementById('weeklyRecipes');
const addToWeekButton = document.getElementById('addToWeekButton');
const noWeeklyRecipes = document.getElementById('noWeeklyRecipes');
const removeFromWeekButton = document.getElementById('removeFromWeekButton');

window.addEventListener('load', getUser);
searchBar.addEventListener('keyup', () => {prepSearch(event)});
searchResults.addEventListener('click', displayRecipe);
searchIngredientGlide.addEventListener('click', selectTag);
homeViewButton.addEventListener('click', displayHomeView);
allRecipesButton.addEventListener('click', displayAllRecipes);
allRecipesContainer.addEventListener('click', displayRecipe);
taggedRecipesContainer.addEventListener('click', displayRecipe);
displayedSearchResults.addEventListener('click', displayRecipe);
weeklyRecipes.addEventListener('click', displayRecipe);
addToWeekButton.addEventListener('click', addToWeeklyRecipes);
weeklyRecipesButton.addEventListener('click', displayWeeklyRecipes);
removeFromWeekButton.addEventListener('click', removeFromWeeklyRecipes);
favoritesViewButton.addEventListener('click', displayFavoritesView);
addToFavoritesButton.addEventListener('click', addToFavorites);
favoriteRecipesContainer.addEventListener('click', displayRecipe);
removeFromFavoritesButton.addEventListener('click', removeFromFavorites);

function getRandomUser(array) {
  const index =  Math.floor(Math.random() * array.length);
  const userData = array[index];
  return userData;
}

function getUser() {
  loadUsers().then(usersData => {
    const userData = getRandomUser(usersData);
    user = new User(userData);
    getRecipes();
  });
}

function getRecipes() {
  loadRecipes().then(recipeData => {
    recipeRepository = new RecipeRepository(recipeData);
    getIngredients();
  });
}

function getIngredients() {
  loadIngredients().then(ingredientsData => {
    recipeRepository.getRecipesInformation(ingredientsData)
  });
}

function addToFavorites(event) {
  const favoriteRecipe = recipeRepository.recipes.find(recipe => recipe.id === parseInt(addToFavoritesButton.name));
  user.addFavorite(favoriteRecipe);

  hide(addToFavoritesButton);
  show(removeFromFavoritesButton);
}

function removeFromFavorites(event) {
  const favoriteRecipe = recipeRepository.recipes.find(recipe => recipe.id === parseInt(removeFromFavoritesButton.name));
  user.removeFavorite(favoriteRecipe);

  hide(removeFromFavoritesButton);
  show(addToFavoritesButton);
}

function displayFavoritesView() {
  hide(searchResults);
  hide(homeViewSection);
  hide(singleRecipeView);
  hide(allRecipesSection);
  hide(weeklyRecipesSection);
  show(favoriteRecipesSection);

  checkFavoriteRecipes();
}

function checkFavoriteRecipes() {
  if (user.favoriteRecipes.length) {
    hide(noFavoritesMessage);
    show(favoriteRecipesContainer);
    renderRecipeCards(favoriteRecipesContainer, user.favoriteRecipes);

  } else {
    hide(favoriteRecipesContainer);
    show(noFavoritesMessage);
  }
}

function prepSearch(event) {
  const searchTerm = event.target.value.toLowerCase();
  checkSearchField(searchTerm);
}

function checkSearchField(searchTerm) {
  if (!searchBar.value && !displayedSearchResults.innerHTML) {
    return;

  } else if (searchBar.value){
    hide(noResults);
    hide(homeViewSection);
    hide(weeklyRecipesSection);
    hide(taggedRecipesContainer);
    show(searchResults);
    show(displayedSearchResults);

    addStyling(singleRecipeView, 'single-recipe-view-alt');
    addStyling(allRecipesSection, 'all-recipes-view__recipes-container-alt');
    removeStyling(singleRecipeView, 'single-recipe-view');
    removeStyling(allRecipesSection, 'all-recipes-view__recipes-container');

    searchingNow(searchTerm);

  } else {
    hide(displayedSearchResults);
    show(noResults);
    show(searchResults);
  }
}

function searchingNow(searchTerm) {
  displayedSearchResults.innerHTML = '';
  const filteredRecipes = recipeRepository.findRecipesByName(searchTerm);
  const foundRecipesByIngredient = recipeRepository.findRecipesByIngredient(searchTerm);

  foundRecipesByIngredient.forEach(recipe => {
    if (!filteredRecipes.includes(recipe)) {
      filteredRecipes.push(recipe);
    }
  });

  displaySearchResults(filteredRecipes);
}

function displaySearchResults(filteredRecipes) {
  filteredRecipes.forEach((recipe) => {
    displayedSearchResults.innerHTML += `
      <article class="search-results-container__recipe-card" id=${recipe.id}>
        <img src="${recipe.image}" class="recipe-card__image" alt=${recipe.name}>
        <p class="recipe-card__name">${recipe.name}</p>
      </article>`;
  });
}

function displayHomeView() {
  hide(noResults);
  hide(searchResults);
  hide(singleRecipeView);
  hide(allRecipesSection);
  hide(weeklyRecipesSection);
  hide(displayedSearchResults);
  hide(favoriteRecipesSection);
  show(homeViewSection);

  removeStyling(singleRecipeView, 'single-recipe-view-alt');
  removeStyling(allRecipesSection, 'all-recipes-view__recipes-container-alt');
}

function displayAllRecipes() {
  hide(searchResults);
  hide(homeViewSection);
  hide(singleRecipeView);
  hide(weeklyRecipesSection);
  hide(favoriteRecipesSection);
  show(allRecipesSection);

  removeStyling(singleRecipeView, 'single-recipe-view-alt');
  removeStyling(allRecipesSection, 'all-recipes-view__recipes-container-alt');

  sortRecipesByName();
  renderRecipeCards(allRecipesContainer, recipeRepository.recipes);
}

function displayRecipe(event) {
  const card = event.target.parentNode;

  if (card.classList.contains('recipes-container__recipe-card')
  || card.classList.contains('search-results-container__recipe-card')) {
    hide(homeViewSection);
    hide(allRecipesSection);
    hide(weeklyRecipesSection);
    hide(favoriteRecipesSection);
    show(singleRecipeView);
    renderIndividualRecipe(card.id);
  }
}

function addToWeeklyRecipes() {
  const recipe = findRecipeTitle();
  user.addWeeklyRecipe(recipe);

  hide(addToWeekButton);
  show(removeFromWeekButton);
}

function removeFromWeeklyRecipes() {
  const recipe = findRecipeTitle();
  user.removeWeeklyRecipe(recipe);

  hide(removeFromWeekButton);
  show(addToWeekButton);
}

function findRecipeTitle() {
  const recipeTitle = document.querySelector('.recipe-title').innerText;
  const recipe = recipeRepository.findRecipesByName(recipeTitle);
  return recipe;
}

function displayWeeklyRecipes() {
  hide(homeViewSection);
  hide(singleRecipeView);
  hide(allRecipesSection);
  hide(favoriteRecipesSection);
  show(weeklyRecipesSection);

  checkWeeklyFavorites();
}

function checkWeeklyFavorites() {
  if (!user.weeklyFavorites.length) {
    hide(weeklyRecipes);
    show(noWeeklyRecipes);

  } else {
    hide(noWeeklyRecipes);
    show(weeklyRecipes);

    renderRecipeCards(weeklyRecipes, user.weeklyFavorites);
  }
}

function selectTag(e) {
  const tagElement = e.target.closest('button');
  const tag = tagElement.value;

  toggleTag(tag, tagElement);
  updateMain();
}

function updateMain() {
  if (tags.length) {
    const filteredRecipes = recipeRepository.findRecipesByTag(tags);
    renderRecipeCards(taggedRecipesContainer, filteredRecipes);

    hide(noResults);
    hide(searchResults);
    hide(singleRecipeView);
    hide(allRecipesSection);
    hide(mainContentContainer);
    hide(weeklyRecipesSection);
    hide(favoriteRecipesSection);
    hide(displayedSearchResults);
    show(homeViewSection);
    show(mainContentContainer);
    show(taggedRecipesContainer);

  } else {
    removeAllRecipeCards();

    hide(taggedRecipesContainer);
    show(homeViewImage)
  }
}

function removeAllRecipeCards() {
  const recipeCards = document.querySelectorAll('.recipes-container__recipe-card');

  recipeCards.forEach((recipeCard) => {
    recipeCard.remove();
  })
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

  individualRecipeInterpolation(recipe);

  createIngredientList(recipe);
  createInstructionList(recipe);
  checkIfRecipeInWeekly(recipe);
  checkIfRecipeInFavorites(recipe);
}

function checkIfRecipeInWeekly(recipe) {
  const matchingRecipe = user.weeklyFavorites.find((weeklyRecipe) => weeklyRecipe.id === recipe.id);
  if (matchingRecipe) {
    hide(addToWeekButton);
    show(removeFromWeekButton);

  } else {
    hide(removeFromWeekButton);
    show(addToWeekButton);
  }
}

function checkIfRecipeInFavorites(recipe) {
  if (user.favoriteRecipes.includes(recipe)) {
    hide(addToFavoritesButton);
    show(removeFromFavoritesButton);

  } else {
    hide(removeFromFavoritesButton);
    show(addToFavoritesButton);
  }
}

function individualRecipeInterpolation(recipe) {
  recipeImage.alt = recipe.name;
  recipeImage.src = recipe.image;
  recipeName.innerText = recipe.name;
  recipeCost.innerText = recipe.returnCostInDollars();
  addToFavoritesButton.name = recipe.id;
  removeFromFavoritesButton.name = recipe.id;
}

function createIngredientList(recipe) {
  const ingredientList = recipe.returnIngredientsList();

  recipeIngredients.innerHTML= ingredientList.reduce((acc, ingredient) => {
    acc += `<p class="ingredient-list__item">● ${ingredient}</p>`;
    return acc;
  }, '');
}

function createInstructionList(recipe) {
  const instructionsList = recipe.returnInstructions();

  recipeInstructions.innerHTML = instructionsList.reduce((acc, instruction) => {
    acc += `<p class="ingredient-list__item">${instruction}</p>`;
    return acc;
  }, '');
}

function renderRecipeCards(container, recipes) {
  container.innerHTML = '';

  recipes.forEach(recipe => {
    container.innerHTML +=
      `<article class="recipes-container__recipe-card" id=${recipe.id}>
          <img src="${recipe.image}" class="recipe-card__image" alt=${recipe.name}>
          <p class="recipe-card__name">${recipe.name}</p>
      </article>`;
  });
}

function sortRecipesByName() {
  recipeRepository.recipes.sort((a, b) => a.name - b.name);
}

function show(element) {
  element.classList.remove('hidden');
}

function hide(element) {
  element.classList.add('hidden');
}

function addStyling(element, className) {
  element.classList.add(className);
}

function removeStyling(element, className) {
  element.classList.remove(className);
}
