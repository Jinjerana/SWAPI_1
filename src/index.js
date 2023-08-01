import { fetchPeople, fetchPlanets, fetchStarships } from "./api";
import { createMarkupPeople, createMarkupPlanets, createMarkupStarships } from "./createMarkup";

const selectors = {
    container: document.querySelector('.js-container'),
    list: document.querySelector('.list'),
    people: document.querySelector('.js-people'),
    planets: document.querySelector('.js-planets'),
    starships: document.querySelector('.js-starships'),
    load: document.querySelector('.js-load-more'),
}
let pagePeople = 1;
let pagePlanets = 1;
let pageStarships = 1;

selectors.load.addEventListener('click', onLoadMore);

selectors.people.addEventListener('click', () => {
    fetchPeople().then((data) => {
        selectors.container.innerHTML = createMarkupPeople(data.results);
        selectors.load.dataset.current = 'people';
    })
})

selectors.planets.addEventListener('click', () => {
    fetchPlanets().then((data) => {
        selectors.container.innerHTML = createMarkupPlanets(data.results);
        selectors.load.dataset.current = 'planets';
    })
})

selectors.starships.addEventListener('click', () => {
    fetchStarships().then((data) => {
        selectors.container.innerHTML = createMarkupStarships(data.results);
        selectors.load.dataset.current = 'starships'
    })
})

function onLoadMore() {
    switch (selectors.load.dataset.current) {
        case 'people': 
        pagePeople += 1;

        fetchPeople(pagePeople)
        .then(data => {
        selectors.container.insertAdjacentHTML('beforeend', createMarkupPeople(data.results))
        let totalPages = Math.ceil(data.count / 9);
        if(totalPages >= pagePeople) {
        selectors.load.hidden = false;
}
    })
    break;
    case 'planets':
        pagePlanets += 1;
        fetchPlanets(pagePlanets)
        .then(data => {
            selectors.container.insertAdjacentHTML('beforeend', createMarkupPlanets(data.results))
            let totalPages = Math.ceil(data.count / 6);
        if(totalPages >= pagePlanets) {
            selectors.load.hidden = false;
}
    })
    break;
    case 'starships':
        pageStarships += 1;
        fetchStarships(pageStarships)
        .then(data => {
            selectors.container.insertAdjacentHTML('beforeend', createMarkupStarships(data.results))
    })
    let totalPages = Math.ceil(data.count / 4);
        if(totalPages >= pageStarships) {
            selectors.load.hidden = false;
}
}}

fetchPeople()
.then(data => {
    console.log(data);
    selectors.container.insertAdjacentHTML('beforeend', createMarkupPeople(data.results));
    selectors.load.dataset.current = 'people';
})
.catch(err => console.log(err))

fetchPlanets()
.then(data => {
    console.log(data);
    selectors.container.insertAdjacentHTML('beforeend', createMarkupPlanets(data.results));
    selectors.load.dataset.current = 'planets';
})
.catch(err => console.log(err))

fetchStarships()
.then(data => {
    console.log(data);
    selectors.container.insertAdjacentHTML('beforeend', createMarkupStarships(data.results));
    selectors.load.dataset.current = 'starships';
})
.catch(err => console.log(err))