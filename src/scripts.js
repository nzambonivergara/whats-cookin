import './styles.css';
import apiCalls from './apiCalls';
import { recipeData } from './data/recipes';
import RecipeRepository from './classes/RecipeRepository';

const recipeRepository = new RecipeRepository(recipeData);
const recipesList = recipeData;
let filteredRecipes;
let tags = [];

const homeViewSection = document.getElementById('homeViewSection');
const homeViewButton = document.getElementById('homeViewButton');

const allRecipesSection = document.getElementById('allRecipesSection');
const allRecipesContainer = document.getElementById('allRecipesContainer');
const allRecipesButton = document.getElementById('allRecipesButton');

const favoriteRecipesSection = document.getElementById('favoriteRecipesSection');

const weeklyRecipesSection = document.getElementById('weeklyRecipesSection');
const weeklyRecipesButton = document.querySelector('.nav-tabs__this-week');
const weekOne = document.getElementById('weekOne');
const weekTwo = document.getElementById('weekTwo');
const weekThree = document.getElementById('weekThree');
const weekFour = document.getElementById('weekFour');
const weekOneGlider = document.querySelector('.week-one__glider-one');
const weekTwoGlider = document.querySelector('.week-two__glider-two');
const weekThreeGlider = document.querySelector('.week-three__glider-three');
const weekFourGlider = document.querySelector('.week-four__glider-four');

const singleRecipeView = document.getElementById('singleRecipeView');
const recipeName = document.getElementById('recipeName');
const recipeCost = document.getElementById('recipeCost');
const recipeImage = document.getElementById('recipeImage');
const recipeIngredients = document.getElementById('recipeIngredients');
const recipeInstructions = document.getElementById('recipeInstructions');

const mainContentContainer = document.getElementById('mainContentContainer');
const searchIngredientGlide = document.getElementById('searchIngredientGlide');
const taggedRecipesContainer = document.getElementById('taggedRecipesContainer');

const searchBar = document.querySelector('.search-bar__search-input');
const mainGlide = document.querySelector('.search-ingredient-glide__images-container');

homeViewButton.addEventListener('click', displayHomeView);
allRecipesButton.addEventListener('click', displayAllRecipes);
allRecipesContainer.addEventListener('click', displayRecipe);
// weeklyRecipesButton.addEventListener('click', displayWeeklyRecipes);
searchIngredientGlide.addEventListener('click', selectTag);

searchBar.addEventListener('keyup', () => {searchingNow(event)});

function searchingNow(event) {
  mainGlide.innerHTML = '';
  const searchTerm = event.target.value;
  filteredRecipes = recipesList.filter(recipe => {
    const searchedByName = recipe.name.toLowerCase().includes(searchTerm.toLowerCase());
    const searchedByTag = recipe.tags.toString().toLowerCase().includes(searchTerm.toLowerCase());
    const searchedByIngredient = recipe.ingredients.toString().toLowerCase().includes(searchTerm.toLowerCase());
    return searchedByName || searchedByTag || searchedByIngredient
  });
  displayFilteredRecipes();
}

function displayFilteredRecipes() {
  filteredRecipes.forEach((recipe) => {
    mainGlide.innerHTML += `
    <button class="images-container__button">
      <p class="images-container__ingredient-name">${recipe.name}</p>
      <img class="images-container__image" src="${recipe.image}" alt="image of chicken dish">
    </button>`;
  });
}

function displayHomeView() {
  hide(allRecipesSection);
  hide(favoriteRecipesSection);
  hide(weeklyRecipesSection);
  hide(singleRecipeView);
  show(homeViewSection);
}

function displayAllRecipes() {
  hide(homeViewSection);
  hide(favoriteRecipesSection);
  hide(weeklyRecipesSection);
  hide(singleRecipeView);
  show(allRecipesSection);

  sortRecipesByName();
  recipeRepository.getRecipesInformation();
  renderRecipeCards(allRecipesContainer, recipeRepository.recipes);
}

function renderRecipeCards(container, recipes) {
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

function selectTag(e) {
  const tagElement = e.target.closest('p') || e.target.previousElementSibling;
  const tag = tagElement.innerText;

  toggleTag(tag, tagElement);
  updateMain();
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

function updateMain() {
  if (tags.length) {
    const filteredRecipes = recipeRepository.findRecipesByTag(tags);

    hide(mainContentContainer);
    show(taggedRecipesContainer);

    renderRecipeCards(taggedRecipesContainer, filteredRecipes);
  } else {
    removeAllRecipeCards();

    show(mainContentContainer);
    hide(taggedRecipesContainer);
  }
}

function removeAllRecipeCards() {
  const recipeCards = document.querySelectorAll('.recipes-container__recipe-card');
    recipeCards.forEach((recipeCard) => {
      recipeCard.remove();
    })
}

function displayRecipe() {
  const card = event.target.parentNode;
  if (card.classList.contains('recipes-container__recipe-card')) {
    hide(allRecipesSection);
    hide(homeViewSection);
    hide(favoriteRecipesSection);
    hide(weeklyRecipesSection);
    show(singleRecipeView);
    renderIndividualRecipe(card.id);
  }
}

function renderIndividualRecipe(recipeId) {
  const recipe = recipeRepository.recipes.find(recipe => recipe.id === parseInt(recipeId));
  recipeName.innerText = recipe.name;
  recipeCost.innerText = recipe.returnCostInDollars();
  recipeImage.src = recipe.image;
  recipeImage.alt = recipe.name;
  createIngredientList(recipe);
  createInstructionList(recipe);
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

function show(element) {
  element.classList.remove('hidden');
}

function hide(element) {
  element.classList.add('hidden');
}
