import './styles.css';
import apiCalls from './apiCalls';
import { recipeData } from './data/recipes';
import RecipeRepository from './classes/RecipeRepository';

const recipeRepository = new RecipeRepository(recipeData);
const recipesList = recipeData;
let filteredRecipes;
let tags = [];

recipeRepository.getRecipesInformation();

const homeViewImage = document.getElementById('homeViewImage');
const homeViewButton = document.getElementById('homeViewButton');
const homeViewSection = document.getElementById('homeViewSection');
const singleRecipeView = document.getElementById('singleRecipeView');

const allRecipesButton = document.getElementById('allRecipesButton');
const allRecipesSection = document.getElementById('allRecipesSection');
const allRecipesContainer = document.getElementById('allRecipesContainer');

const favoriteRecipesSection = document.getElementById('favoriteRecipesSection');

const recipeName = document.getElementById('recipeName');
const recipeCost = document.getElementById('recipeCost');
const recipeImage = document.getElementById('recipeImage');
const recipeIngredients = document.getElementById('recipeIngredients');
const recipeInstructions = document.getElementById('recipeInstructions');
const addToFavoritesButton = document.getElementById('addToFavoritesButton');
const mainContentContainer = document.getElementById('mainContentContainer');
const searchIngredientGlide = document.getElementById('searchIngredientGlide');
const taggedRecipesContainer = document.getElementById('taggedRecipesContainer');

const noResults = document.getElementById('noResults');
const searchBar = document.getElementById('searchBarInput');
const searchResults = document.getElementById('searchedRecipesContainer');
const displayedSearchResults = document.getElementById('searchedRecipes');

searchBar.addEventListener('keyup', () => {prepSearch(event)});
searchResults.addEventListener('click', displayRecipe);
homeViewButton.addEventListener('click', displayHomeView);
allRecipesButton.addEventListener('click', displayAllRecipes);
allRecipesContainer.addEventListener('click', displayRecipe);
taggedRecipesContainer.addEventListener('click', displayRecipe);
displayedSearchResults.addEventListener('click', displayRecipe);
weeklyRecipesButton.addEventListener('click', displayWeeklyRecipes);
searchIngredientGlide.addEventListener('click', selectTag);

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
  filteredRecipes = recipeRepository.recipes.filter(recipe => {
    const searchedByTag = recipe.tags.toString().toLowerCase().includes(searchTerm);
    const searchedByName = recipe.name.toLowerCase().includes(searchTerm);
    const searchedByIngredient = recipe.ingredients.toString().toLowerCase().includes(searchTerm);
    return searchedByName || searchedByTag || searchedByIngredient;
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

  if (card.classList.contains('recipes-container__recipe-card')) {
    hide(homeViewSection);
    hide(allRecipesSection);
    show(singleRecipeView);
    renderIndividualRecipe(card.id);
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
}

function individualRecipeInterpolation(recipe) {
  recipeImage.alt = recipe.name;
  recipeImage.src = recipe.image;
  recipeName.innerText = recipe.name;
  recipeCost.innerText = recipe.returnCostInDollars();
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
