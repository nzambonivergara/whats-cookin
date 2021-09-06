function loadUsers() {
  return fetch('https://what-s-cookin-starter-kit.herokuapp.com/api/v1/users')
    .then(response => response.json())
    .then(data => data.usersData)
    .catch(error => console.error(error))
}

function loadIngredients() {
  return fetch('https://what-s-cookin-starter-kit.herokuapp.com/api/v1/ingredients')
    .then(response => response.json())
    .then(data => data.ingredientsData)
    .catch(error => console.error(error))
}

function loadRecipes() {
  return fetch('https://what-s-cookin-starter-kit.herokuapp.com/api/v1/recipes')
    .then(response => response.json())
    .then(data => data.recipeData)
    .catch(error => console.log(error))
}

export {
  loadUsers,
  loadIngredients,
  loadRecipes
}
