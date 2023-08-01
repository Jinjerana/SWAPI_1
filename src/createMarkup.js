
function createMarkupPeople (arr) {
    return arr.map(({ name, mass, height, gender }) => `
    <li class="card">
      <h2>${name}</h2>
      <p>${mass}</p>
      <p>${height}</p>
      <p>${gender}</p>
    </li>`)
    .join('')
}

function createMarkupPlanets (arr) {
    return arr.map(({ name, diameter, population, rotation_period }) => `
    <li class="card">
      <h2>${name}</h2>
      <p>${diameter}</p>
      <p>${population}</p>
      <p>${rotation_period}</p>
    </li>`)
    .join('')
}

function createMarkupStarships (arr) {
    return arr.map(({ name, length, model, passengers }) => `
    <li class="card">
      <h2>${name}</h2>
      <p>${length}</p>
      <p>${model}</p>
      <p>${passengers}</p>
    </li>`)
    .join('')
}

export { createMarkupPeople, createMarkupPlanets, createMarkupStarships }