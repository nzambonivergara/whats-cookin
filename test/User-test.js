const assert = require('chai').assert;
const User = require('../src/classes/User.js');
const Recipe = require('../src/classes/Recipe.js')

define('User', function() {
  var user;
  var recipeOne;
  var recipeTwo;
  var recipeThree;
  var recipeFour;
  var recipeFive;
  var recipeSix;
  var recipeSeven;

  beforeEach(() => {
    user = new User();
    recipeOne = new Recipe(); // recipeOne and recipeTwo need to share a tag in commen
    recipeTwo = new Recipe();
    recipeThree = new Recipe(); // recipeTwo and recipeThree need to have an igredient in common that recipeOne does not have
    recipeFour = new Recipe();
    recipeFive = new Recipe();
    recipeSix = new Recipe();
    recipeSeven = new Recipe();
  });
});
