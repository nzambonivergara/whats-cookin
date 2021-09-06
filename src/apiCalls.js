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

export {
  loadUsers,
  loadIngredients,
}
