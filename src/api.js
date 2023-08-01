async function fetchPeople(page = 1) {
    const BASE_URL = 'https://swapi.dev/api';
    const END_POINT = "/people/";
    const resp = await fetch(`${BASE_URL}${END_POINT}?page=${page}`)
        if(!resp.ok){
        throw new Error(resp.statusText)
    }
    return resp.json()
    }

async function fetchPlanets(page = 1) {
    const BASE_URL = 'https://swapi.dev/api';
    const END_POINT = "/planets/";
    const resp = await fetch(`${BASE_URL}${END_POINT}?page=${page}`)
        if(!resp.ok){
        throw new Error(resp.statusText)
    }
    return resp.json()
}

async function fetchStarships(page = 1) {
    const BASE_URL = 'https://swapi.dev/api';
    const END_POINT = "/starships/";
    const resp = await fetch(`${BASE_URL}${END_POINT}?page=${page}`)
        if(!resp.ok){
        throw new Error(resp.statusText)
    }
    return resp.json()
    }

export { fetchPeople, fetchPlanets, fetchStarships, }

