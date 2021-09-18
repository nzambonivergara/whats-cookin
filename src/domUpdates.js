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
const removeFromFavoritesButton = document.getElementById('removeFromFavoritesButton');
const favoriteTaggedRecipesContainer = document.getElementById('favoriteTaggedRecipesContainer');

const mainContentContainer = document.getElementById('mainContentContainer');
const searchIngredientGlide = document.getElementById('searchIngredientGlide');
const taggedRecipesContainer = document.getElementById('taggedRecipesContainer');
const favoritesTagsGlide = searchIngredientGlide.cloneNode(true);

const weeklyRecipesButton = document.querySelector('.nav-tabs__this-week');
const weeklyRecipesSection = document.getElementById('weeklyRecipesSection');

const recipeName = document.getElementById('recipeName');
const recipeCost = document.getElementById('recipeCost');
const recipeImage = document.getElementById('recipeImage');
const recipeIngredients = document.getElementById('recipeIngredients');
const recipeInstructions = document.getElementById('recipeInstructions');

const noResults = document.getElementById('noResults');
const searchBar = document.getElementById('searchBarInput');
const searchResults = document.getElementById('searchedRecipesContainer');
const displayedSearchResults = document.getElementById('searchedRecipes');

const weeklyRecipes = document.getElementById('weeklyRecipes');
const addToWeekButton = document.getElementById('addToWeekButton');
const noWeeklyRecipes = document.getElementById('noWeeklyRecipes');
const removeFromWeekButton = document.getElementById('removeFromWeekButton');

const allSections = document.querySelectorAll('section > section');

let domUpdates = {
  show(element) {
    element.classList.remove('hidden');
  },

  hide(element) {
    element.classList.add('hidden');
  },

  addStyling(element, className) {
    element.classList.add(className);
  },

  removeStyling(element, className) {
    element.classList.remove(className);
  },

  renderRecipeCards(container, recipes) {
    container.innerHTML = '';

    recipes.forEach(recipe => {
      container.innerHTML +=
        `<article tabindex="0" role="button" class="recipes-container__recipe-card" id=${recipe.id}>
            <img src="${recipe.image}" class="recipe-card__image" alt=${recipe.name}>
            <p class="recipe-card__name">${recipe.name}</p>
        </article>`;
    });
  },

  renderRecipeInstructions(instructions) {
    recipeInstructions.innerHTML = instructions.reduce((acc, instruction) => {
      acc += `<li class="ingredient-list__item">${instruction}</li>`;
      return acc;
    }, '');
  },

  renderRecipeIngredients(ingredients) {
    recipeIngredients.innerHTML = ingredients.reduce((acc, ingredient) => {
      acc += `<li class="ingredient-list__item">● ${ingredient}</li>`;
      return acc;
    }, '');
  },

  individualRecipeInterpolation(recipe) {
    recipeImage.alt = recipe.name;
    recipeImage.src = recipe.image;
    recipeName.innerText = recipe.name;
    recipeCost.innerText = recipe.returnCostInDollars();
    addToFavoritesButton.name = recipe.id;
    removeFromFavoritesButton.name = recipe.id;
  },

  removeAllRecipeCards() {
    const recipeCards = document.querySelectorAll('.recipes-container__recipe-card');

    recipeCards.forEach((recipeCard) => {
      recipeCard.remove();
    })
  },

  addTagsGlide() {
    if (!favoriteRecipesSection.contains(favoritesTagsGlide)) {
      favoritesTagsGlide.id = 'favoriteSearchGlide';
      favoriteRecipesSection.appendChild(favoritesTagsGlide);
    }
  },

  homeViewImage,
  homeViewButton,
  homeViewSection,
  singleRecipeView,
  allRecipesButton,
  allRecipesSection,
  allRecipesContainer,
  noFavoritesMessage,
  favoritesViewButton,
  addToFavoritesButton,
  favoriteRecipesSection,
  favoriteRecipesContainer,
  removeFromFavoritesButton,
  favoriteTaggedRecipesContainer,
  weeklyRecipesButton,
  weeklyRecipesSection,
  recipeName,
  recipeCost,
  recipeImage,
  recipeIngredients,
  recipeInstructions,
  mainContentContainer,
  searchIngredientGlide,
  taggedRecipesContainer,
  favoritesTagsGlide,
  noResults,
  searchBar,
  searchResults,
  displayedSearchResults,
  weeklyRecipes,
  addToWeekButton,
  noWeeklyRecipes,
  removeFromWeekButton,
  allSections
};

export default  domUpdates;
