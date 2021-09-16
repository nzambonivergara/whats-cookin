import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';
import { ingredientsData } from '../src/data/ingredients-sample';
import { recipeData } from '../src/data/recipes-sample';

describe('Recipe Repository', () => {
  let repo;

  beforeEach(() => {
    repo = new RecipeRepository(recipeData);
    repo.getRecipesInformation(ingredientsData);
  });

  it('Should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });

  it('Should be an instance of Recipe', () => {
    expect(repo).to.be.an.instanceOf(RecipeRepository);
  });

  it('Should have recipes', () => {
    expect(repo.recipes[0].id).to.equal(recipeData[0].id);
    expect(repo.recipes[1].id).to.equal(recipeData[1].id);
  });

  // getRecipesInformation tests

  it('Should filter recipes based on one tag', () => {
    const expected = repo.findRecipesByTag(['snack']);
    expect(expected[0].name).to.equal('Loaded Chocolate Chip Pudding Cookie Cups');
    expect(expected.length).to.equal(2);
  });

  it('Should not return recipes if not found by tag', () => {
    const expected = repo.findRecipesByTag(['cake']);
    expect(expected).to.deep.equal([]);
    expect(expected.length).to.equal(0);
  });

  it('Should filter recipes based on more than one tag', () => {
    const expected = repo.findRecipesByTag(['snack', 'antipasti']);
    expect(expected[0].name).to.equal('Loaded Chocolate Chip Pudding Cookie Cups');
    expect(expected.length).to.equal(2);
  });

  it('Should not return recipes by more than one tag if not found', () => {
    const expected = repo.findRecipesByTag(['dessert', 'cake']);
    expect(expected).to.deep.equal([]);
    expect(expected.length).to.equal(0);
  });

  it('Should filter recipes based on name', () => {
    const expected = repo.findRecipesByName(recipeData[0].name);
    expect(expected[0].id).to.equal(recipeData[0].id);
  });

  it('Should not return recipes by name if not found', () => {
    const expected = repo.findRecipesByName('Fruit Pie');
    expect(expected).to.deep.equal([]);
  });

  it('Should filter recipes based on ingredients', () => {
    const expected = repo.findRecipesByIngredient('wheat flour');
    expect(expected[0].name).to.equal('Loaded Chocolate Chip Pudding Cookie Cups');
    expect(expected.length).to.equal(3);
  });

  it('Should not return recipes by ingredients if not found', () => {
    const expected = repo.findRecipesByIngredient('tapioca');
    expect(expected).to.deep.equal([]);
    expect(expected.length).to.equal(0);
  });
});