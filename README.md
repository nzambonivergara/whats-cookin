# What's Cookin'

- [Project Spec - Part I](https://frontend.turing.edu/projects/whats-cookin-part-one.html)
- [Project Spec - Part II](https://frontend.turing.edu/projects/whats-cookin-part-two.html)

## Contributors

- [Natalia Zamboni Vergara](https://github.com/nzambonivergara)
- [Paul Chambers](https://github.com/PaulTimothyChambers)
- [Juliana Fargnoli](https://github.com/jfargnoli01)

## Abstract

This application is a virtual recipe database where users can browse and save recipes for later use! The user is able to view all recipes, add and view their favorite recipes in the favorites section, as well as add and view recipes in the weekly recipes section. Users can use the live search bar at the top of the page to find their meal by name and / or ingredient! If the recipe is no longer of use, the user can delete the recipe card from the favorites and / or weekly views. Users can view the pantry ingredients and decide to cook a recipe. If they don't have enough ingredients, they will be prompted to add the amounts needed. Once they have enough ingredients and decide to cook a meal, those ingredients will be removed from their pantry. Users are able to navigate our website utilizing a screen reader and/or only utilizing the keyboard only.

## Snapshots of Application

Home View:

![main view whats cookin](https://user-images.githubusercontent.com/77421040/132417805-b53f270a-bd87-4fbc-adcc-c164d7a15845.gif)

All Recipes View:

![all recipes whats cookin](https://user-images.githubusercontent.com/77421040/132418149-27a662a9-783f-4b46-b17c-542a44b1e9e8.gif)

Individual Recipe Card:

![save to week and favorites whats cookin](https://user-images.githubusercontent.com/77421040/132417856-630fd251-d5c7-4317-bc9d-2674cd9b5615.gif)

1. From the main view, the user can:
    - select the All Recipes button at the top left to view the entire list of recipes to choose from
    - choose the Favorites button at the top left to view any favorited recipes
    - select the This Week button at the top left to view any recipes added to the weekly recipes section
    - click one or more tag bubbles at the bottom of the main view to see recipes containing the specific tag(s)
    - type in a recipe name or ingredient name in the live search bar to find specific results
2. From any of the recipes display views, the user can select any recipe card to view the individual recipe's required ingredients, instructions, enlarged image, and add/remove recipe button to or from favorite and weekly recipes
3. When in the favorites view, user can see and select any recipe card that has been favorited
4. When in the weekly recipes view, user can see and select any recipe card that has been added to weekly recipes
5. In the single recipe view, user can see recipe details, view their pantry ingredients, decided to cook the recipe and add ingredients needed.

## Technologies

- Mocha
- Chai
- JavaScript
- SCSS
- Fetch API
- ESlint
- Third party package: [Micromodal js](https://micromodal.vercel.app/)
- Github Project Board Project Management

## Wins

- Learning how to use Fetch API and successfully integrating functionality into project
- Working asynchronously to tackle various parts of the project and resolving merge conflicts as they arose
- Using a wireframe program to outline high level project aesthetic and functionality
- Using Github Project Board for the first time
- Collaborating with team mates to tackle complicated tasks and trying various approaches
- Integrating a third party package for our Micromodal functionality
- Utilizing SCSS successfully
- Making our application meet accessibility principles  
- Utilizing resources such as web documents and mentors to expand knowledge base and maximize application display and performance

## Challenges

- Planning out project with Github Project Board and anticipating how long each task will take to complete
- Keeping up with reviewing and merging PRs
- Communicating additions or changes in project with team members
- Merging branches together after independent coding
- Accessing and managing the data and ensuring we write clear readable code

## Install/ Set Up Instructions

### Backend Set Up

1. Go to this [repository](https://github.com/turingschool-examples/whats-cookin-api)
2. Follow Set Up instructions.

### Frontend Set Up

1. Clone down this repository.
  ```
  git clone git@github.com:nzambonivergara/whats-cookin.git
  ```
2. In your terminal, run:
  ```
  npm install
  npm start
  ```
3. Enter the following url in your browser: http://localhost:8080/
4. Explore the website.

## Future Features

- Create search functionality within favorited recipes section
- Allow users to create and save recipe cards
- Update weekly recipes view to include entire month and link to online calendar
- Assess more accessibility updates and opportunities for better user experience
---
