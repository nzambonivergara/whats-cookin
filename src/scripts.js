import './styles.css';
import apiCalls from './apiCalls';
import { recipeData } from './data/recipes';
import RecipeRepository from './classes/RecipeRepository';


const recipeRepository = new RecipeRepository(recipeData);
let recipesList = recipeData;
let filteredRecipes;

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

const searchBar = document.querySelector('.search-bar__search-input');
let mainGlide = document.querySelector('.search-ingredient-glide__images-container');

homeViewButton.addEventListener('click', displayHomeView);
allRecipesButton.addEventListener('click', displayAllRecipes);
allRecipesContainer.addEventListener('click', displayRecipe);
searchBar.addEventListener('keyup', (event) => {
  mainGlide.innerHTML = '';
  let searchTerm = event.target.value;
  filteredRecipes = recipesList.filter(recipe => {
    return recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    || recipe.tags.toString().toLowerCase().includes(searchTerm.toLowerCase())
    || recipe.ingredients.toString().toLowerCase().includes(searchTerm.toLowerCase())
  })
  filteredRecipes.forEach((recipe) => {
    mainGlide.innerHTML += `
      <button class="images-container__button">
        <p class="images-container__ingredient-name">${recipe.name}</p>
        <img class="images-container__image" src="https://www.lecremedelacrumb.com/wp-content/uploads/2016/04/baked-lemon-chicken-6.jpg" alt="image of chicken dish">
      </button>`;
  })
  // console.log(filteredRecipes)
})
// console.log(recipesList)
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
  recipeRepository.getRecipesInformation();
  renderAllRecipeCards();
}

function renderAllRecipeCards() {
  allRecipesContainer.innerHTML = '';
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

function displayRecipe() {
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
}

function show(element) {
  element.classList.remove('hidden');
}

function hide(element) {
  element.classList.add('hidden');
}
