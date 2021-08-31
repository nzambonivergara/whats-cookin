import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';
import { recipeData } from '../src/data/recipes';
import { ingredientsData } from '../src/data/ingredients'

describe('Recipe', () => {
  let repo;

  beforeEach(() => {
    repo = new RecipeRepository(recipeData);
  });

  it('Should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });
  
  it('Should be an instance of Recipe', () => {
    expect(repo).to.be.an.instanceOf(RecipeRepository);
  });

  it('Should have all recipes as properties', () => {
    expect(repo[0].id).to.equal(595736);
  });

  it('Should filter recipes based on one tag', () => {
    const tag = 'snack';
    const expected = repo.findRecipesByTag(tag);
    expect(expected.length).to.deep.equal(9);
  });

  it('Should filter recipes based on more than one tag', () => {
    const tag1 = 'snack';
    const tag2 = 'side dish';
    const expected = repo.findRecipesByTag(tag1, tag2);
    expect(expected.name).to.equal('Baked Stuffed Artichokes');
    expect(expected.length).to.deep.equal(1);
  });

  it('Should filer recipes based on name', () => {
    const name = 'Farmer\'s Market Flatbread Pizza';
    const expected = repo.findRecipesByName(name);
    expect(expected.id).to.equal(601216);
  });

  it('Should filter recipes based on ingredients', () => {
    const ingredient = 'wheat flour';
    const expected = repo.findRecipesByIngredient(ingredient);
    expect(expected.length).to.deep.equal(10);
    //use ingredient to pull id from ingredients.js
    //use id to filter results from the recipes repo
  });
});