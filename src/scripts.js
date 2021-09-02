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


homeViewButton.addEventListener('click', displayHomeView);
allRecipesButton.addEventListener('click', displayAllRecipes);

function displayHomeView() {
  show(homeViewSection);
  hide(allRecipesSection);
  hide(favoriteRecipesSection);
  hide(weeklyRecipesSection);
}

function displayAllRecipes() {
  hide(homeViewSection);
  hide(favoriteRecipesSection);
  hide(weeklyRecipesSection);
  show(allRecipesSection);
  sortRecipesByName();
  renderAllRecipeCards();
}

function renderAllRecipeCards() {
  allRecipesContainer.innerHTML = '';
  console.log('is this running')
  recipeRepository.recipes.forEach(recipe => {
    allRecipesContainer.innerHTML +=
      `<article class="recipes-container__recipe-card" id=${recipe.id}>
          <img src="${recipe.image}" class="recipe-card__image" alt=${recipe.name}>
          <p class="recipe-card__name">${recipe.name}</p>
      </article>`
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
