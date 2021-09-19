const apiEndpoint = 'http://localhost:3001';

function loadUsers() {
  return fetch(`${apiEndpoint}/api/v1/users`)
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.error(error))
}

function loadIngredients() {
  return fetch(`${apiEndpoint}/api/v1/ingredients`)
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.error(error))
}

function loadRecipes() {
  return fetch(`${apiEndpoint}/api/v1/recipes`)
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log(error))
}

export {
  loadUsers,
  loadIngredients,
  loadRecipes
}
