import './styles.css';
import apiCalls from './apiCalls';
import { recipeData } from './data/recipes';
import RecipeRepository from './classes/RecipeRepository';
import User from './classes/User';
import { usersData } from './data/users';

const recipeRepository = new RecipeRepository(recipeData);
const recipesList = recipeData;
let filteredRecipes;
let tags = [];
let user;

recipeRepository.getRecipesInformation();

const homeViewImage = document.getElementById('homeViewImage');
const homeViewButton = document.getElementById('homeViewButton');
const homeViewSection = document.getElementById('homeViewSection');
const singleRecipeView = document.getElementById('singleRecipeView');

const allRecipesButton = document.getElementById('allRecipesButton');
const allRecipesSection = document.getElementById('allRecipesSection');
const allRecipesContainer = document.getElementById('allRecipesContainer');

const favoriteRecipesSection = document.getElementById('favoriteRecipesSection');
const favoriteRecipesContainer = document.getElementById('favoriteRecipesContainer');
const favoritesViewButton = document.getElementById('favoritesViewButton');
const addToFavoritesButton = document.getElementById('addToFavoritesButton');
const removeFromFavoritesButton = document.getElementById('removeFromFavoritesButton')
const noFavoritesMessage = document.getElementById('noFavoritesMessage');

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

const addToWeekButton = document.getElementById('addToWeekButton');
const removeFromWeekButton = document.getElementById('removeFromWeekButton');
const noWeeklyRecipes = document.getElementById('noWeeklyRecipes');
const weeklyRecipes = document.getElementById('weeklyRecipes');

window.addEventListener('load', getRandomUser);
searchBar.addEventListener('keyup', () => {prepSearch(event)});
searchResults.addEventListener('click', displayRecipe);
homeViewButton.addEventListener('click', displayHomeView);
allRecipesButton.addEventListener('click', displayAllRecipes);
allRecipesContainer.addEventListener('click', displayRecipe);
taggedRecipesContainer.addEventListener('click', displayRecipe);
weeklyRecipes.addEventListener('click', displayRecipe);
weeklyRecipesButton.addEventListener('click', displayWeeklyRecipes);
addToWeekButton.addEventListener('click', addToWeeklyRecipes);
removeFromWeekButton.addEventListener('click', removeFromWeeklyRecipes);
searchIngredientGlide.addEventListener('click', selectTag);
favoritesViewButton.addEventListener('click', displayFavoritesView);
addToFavoritesButton.addEventListener('click', addToFavorites);
removeFromFavoritesButton.addEventListener('click', removeFromFavorites);
favoriteRecipesContainer.addEventListener('click', displayRecipe);

function addToFavorites(event) {
  const favoriteRecipe = recipeRepository.recipes.find(recipe => recipe.id === parseInt(addToFavoritesButton.name));

  user.addFavorite(favoriteRecipe);
  hide(addToFavoritesButton);
  show(removeFromFavoritesButton);
}


function removeFromFavorites(event) {
  const favoriteRecipe = recipeRepository.recipes.find(recipe => recipe.id === parseInt(removeFromFavoritesButton.name));

  user.removeFavorite(favoriteRecipe);
  show(addToFavoritesButton);
  hide(removeFromFavoritesButton);
}

function displayFavoritesView() {
  show(favoriteRecipesSection);
  hide(searchResults);
  hide(singleRecipeView);
  hide(allRecipesSection);
  hide(weeklyRecipesSection);
  hide(homeViewSection);

  checkFavoriteRecipes();
}

function checkFavoriteRecipes() {
  if (user.favoriteRecipes.length) {
    hide(noFavoritesMessage);
    renderRecipeCards(favoriteRecipesContainer, user.favoriteRecipes);
  } else {
    show(noFavoritesMessage);
    hide(favoriteRecipesContainer);
  }
}

function getRandomUser() {
  const index =  Math.floor(Math.random() * usersData.length);
  const userData = usersData[index];
  user = new User(userData);
}

function prepSearch(event) {
  const searchTerm = event.target.value.toLowerCase();
  checkSearchField(searchTerm);
}

function checkSearchField(searchTerm) {
  if (!searchBar.value && !displayedSearchResults.innerHTML) {
    hide(displayedSearchResults);
    show(noResults);
    show(searchResults);

  } else if (searchBar.value && displayedSearchResults.innerHTML){
    hide(noResults);
    hide(homeViewSection);
    show(searchResults);
    show(displayedSearchResults);

    searchingNow(searchTerm);

  } else {
    hide(displayedSearchResults);
    show(noResults);
    show(searchResults);
  }
}

function searchingNow(searchTerm) {
  displayedSearchResults.innerHTML = '';
  filteredRecipes = recipeRepository.findRecipes(searchTerm);

  displaySearchResults(filteredRecipes);
}

function displaySearchResults(filteredRecipes) {
  filteredRecipes.forEach((recipe) => {
    displayedSearchResults.innerHTML += `
      <article class="recipes-container__recipe-card" id=${recipe.id}>
        <img src="${recipe.image}" class="recipe-card__image" alt=${recipe.name}>
        <p class="recipe-card__name">${recipe.name}</p>
      </article>`;
  });
}

function displayHomeView() {
  hide(searchResults);
  hide(singleRecipeView);
  hide(allRecipesSection);
  hide(weeklyRecipesSection);
  hide(favoriteRecipesSection);
  show(homeViewSection);
}

function displayAllRecipes() {
  hide(searchResults);
  hide(homeViewSection);
  hide(singleRecipeView);
  hide(weeklyRecipesSection);
  hide(favoriteRecipesSection);
  show(allRecipesSection);

  sortRecipesByName();
  renderRecipeCards(allRecipesContainer, recipeRepository.recipes);
}

function displayRecipe(event) {
  const card = event.target.parentNode;

  if (card.classList.contains('recipes-container__recipe-card')) {
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
  show(weeklyRecipesSection);
  hide(homeViewSection);
  hide(allRecipesSection);
  hide(favoriteRecipesSection);
  hide(singleRecipeView);

  checkWeeklyFavorites();
}

function checkWeeklyFavorites() {
  if (!user.weeklyFavorites.length) {
    show(noWeeklyRecipes);
    hide(weeklyRecipes);
  } else {
    show(weeklyRecipes);
    hide(noWeeklyRecipes);
    renderRecipeCards(weeklyRecipes, user.weeklyFavorites);
  }
}

function selectTag(e) {
  const tagElement = e.target.closest('p') || e.target.previousElementSibling;
  const tag = tagElement.innerText;

  toggleTag(tag, tagElement);
  updateMain();
}

function updateMain() {
  if (tags.length) {
    const filteredRecipes = recipeRepository.findRecipesByTag(tags);
    renderRecipeCards(taggedRecipesContainer, filteredRecipes);
    hide(mainContentContainer);
    show(taggedRecipesContainer);

  } else {
    removeAllRecipeCards();
    hide(taggedRecipesContainer);
    show(mainContentContainer);
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
    show(removeFromWeekButton);
    hide(addToWeekButton);
  } else {
    show(addToWeekButton);
    hide(removeFromWeekButton);
  }
}

function checkIfRecipeInFavorites(recipe) {
  if (user.favoriteRecipes.includes(recipe)) {
    show(removeFromFavoritesButton);
    hide(addToFavoritesButton);
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
  const ingredientList = recipe.returnIngredientsList()

  recipeIngredients.innerHTML= ingredientList.reduce((acc, ingredient) => {
    acc += `<p class="ingredient-list__item">● ${ingredient}</p>`
    return acc;
  }, '')
}

function createInstructionList(recipe) {
  const instructionsList = recipe.returnInstructions();

  recipeInstructions.innerHTML = instructionsList.reduce((acc, instruction) => {
    acc += `<p class="ingredient-list__item">${instruction}</p>`
    return acc
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
