import './styles.css';
import apiCalls from './apiCalls';
import { recipeData } from './data/recipes';
import RecipeRepository from './classes/RecipeRepository';

const recipeRepository = new RecipeRepository(recipeData);

const homeViewSection = document.getElementById('homeViewSection');
const homeViewButton = document.getElementById('homeViewButton');

const allRecipesSection = document.getElementById('allRecipesSection');
const allRecipesContainer = document.getElementById('allRecipesContainer');
const allRecipesButton = document.getElementById('allRecipesButton');

const favoriteRecipesSection = document.getElementById('favoriteRecipesSection');

const weeklyRecipesSection = document.getElementById('weeklyRecipesSection');

const singleRecipeView = document.getElementById('singleRecipeView');
const recipeName = document.getElementById('recipeName');
const recipeCost = document.getElementById('recipeCost');
const recipeImage = document.getElementById('recipeImage');
const recipeIngredients = document.getElementById('recipeIngredients');
const recipeInstructions = document.getElementById('recipeInstructions');
const homeViewImage = document.getElementById('homeViewImage');
const addToFavoritesButton = document.getElementById('addToFavoritesButton');
const mainContentContainer = document.getElementById('mainContentContainer');
const searchIngredientGlide = document.getElementById('searchIngredientGlide');
const taggedRecipesContainer = document.getElementById('taggedRecipesContainer');

let tags = [];

homeViewButton.addEventListener('click', displayHomeView);
allRecipesButton.addEventListener('click', displayAllRecipes);
searchIngredientGlide.addEventListener('click', selectTag);
allRecipesContainer.addEventListener('click', displayRecipe);

function displayHomeView() {
  show(homeViewSection);
  hide(allRecipesSection);
  hide(favoriteRecipesSection);
  hide(weeklyRecipesSection);
  hide(singleRecipeView);
}

function displayAllRecipes() {
  hide(homeViewSection);
  hide(favoriteRecipesSection);
  hide(weeklyRecipesSection);
  hide(singleRecipeView);
  show(allRecipesSection);
  sortRecipesByName();
  renderRecipeCards(allRecipesContainer, recipeRepository.recipes);
}

function renderRecipeCards(container, recipes) {
  recipes.forEach(recipe => {
    container.innerHTML +=
      `<article class="recipes-container__recipe-card" id=${recipe.id}>
          <img src="${recipe.image}" class="recipe-card__image" alt=${recipe.name}>
          <p class="recipe-card__name">${recipe.name}</p>
      </article>`
  });
}

function sortRecipesByName() {
  recipeRepository.recipes.sort((a, b) => a.name - b.name);
}

function displayRecipe(event) {
  const card = event.target.parentNode;
  if (card.classList.contains('recipes-container__recipe-card')) {
    hide(allRecipesSection);
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
      return false
    }
    return true
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

function show(element) {
  element.classList.remove('hidden');
}

function hide(element) {
  element.classList.add('hidden');
}
