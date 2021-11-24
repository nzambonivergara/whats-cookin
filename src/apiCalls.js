const apiEndpoint = 'https://whats-cookin-api-data.herokuapp.com';

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

function alterIngredients(userId, ingredientsId, ingredientsModification) {
  return fetch(`${apiEndpoint}/api/v1/users`, {
    method: 'POST',
    body: JSON.stringify({
      "userID": userId,
      "ingredientID": ingredientsId,
      "ingredientModification": ingredientsModification
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => data)
  .catch(error => console.log(error))
}

export {
  loadUsers,
  loadIngredients,
  loadRecipes,
  alterIngredients
}
