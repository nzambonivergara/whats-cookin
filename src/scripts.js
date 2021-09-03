import './styles.css';
import apiCalls from './apiCalls';
import { recipeData } from './data/recipes';
import RecipeRepository from './classes/RecipeRepository';

// let recipesList = recipesData;  need to plug in recipeData here
let filteredRecipes;

const recipeRepository = new RecipeRepository(recipeData);

const homeViewSection = document.getElementById('homeViewSection');
const homeViewButton = document.getElementById('homeViewButton');

const allRecipesSection = document.getElementById('allRecipesSection');
const allRecipesContainer = document.getElementById('allRecipesContainer');
const allRecipesButton = document.getElementById('allRecipesButton');

const favoriteRecipesSection = document.getElementById('favoriteRecipesSection');

const weeklyRecipesSection = document.getElementById('weeklyRecipesSection');

let searchBar = document.querySelector('.favorites-view__favorites');
let mainGlide = document.querySelector('.search-ingredient-glide__images-container');

homeViewButton.addEventListener('click', displayHomeView);
allRecipesButton.addEventListener('click', displayAllRecipes);
searchBar.addEventListener('keyup', (e) => {
  mainGlide.innerHTML = '';
  const searchTerm = e.target.value;
  filteredRecipes = recipesList.filter(recipe => {
    return recipe.name.toLowerCase().includes(searchTerm.toLowerCase());
    || recipe.tags.toString().toLowerCase().includes(searchTerm.toLowerCase());
    || recipe.ingredients.toString().toLowerCase().includes(searchTerm.toLowerCase());
  });
  filteredRecipes.forEach((recipe) => {
    mainGlide.innerHTML += `
      <button class="images-container__button">
        <p class="images-container__ingredient-name">${recipe.name}</p>
        <img class="images-container__image" src="${recipe.image}" alt="image of search result">
      </button>`;
  });
});

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
