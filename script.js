// Access Token : 6725968844085001
// https://superheroapi.com/api/access-token
// https://superheroapi.com/api/access-token/character-id

const SUPERHERO_TOKEN = 6725968844085001;
const BASE_URL = `https:superheroapi.com/api.php/${SUPERHERO_TOKEN}`;
const heroImageDiv = document.getElementById("heroImage");
const superheroBtn = document.getElementById("newHeroButton");
const searchBtn = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");

const randomHero = () => {
    const numberOfHeroes = 731
    const result = Math.floor(Math.random() * numberOfHeroes) + 1;
    console.log(result);
    return result;
}


const getSuperHero = (id, name) =>{
    // name => base_url/search/batman
    // id => base_url/id
    fetch(`${BASE_URL}/${id}`)
    .then(response => response.json())
    .then(json => {
        const superHero = json;
        showHeroInfo(json);
    });

}

const showHeroInfo = (character) => {
    const name = `<h2>${character.name}</h2>`
    const img = `<img src="${character.image.url}" height=600px width=500px>`;
   
    const stats = Object.keys(character.powerstats).map(stat => {
       return `<p>${stat.toUpperCase()}: ${character.powerstats[stat]}</p>`
    }).join('');
    
    //console.log(stats.join(''));
    
    heroImageDiv.innerHTML = `${name}${img}${stats}`; 
}

const getSearchSuperHero = (name) => {
    fetch(`${BASE_URL}/search/${name}`)
    .then(response => response.json())
    .then(json => {
        const hero = json.results[0];
        console.log(hero);
        showHeroInfo(hero);
    });
}







superheroBtn.onclick = () => getSuperHero(randomHero());
searchBtn.onclick = () => getSearchSuperHero(searchInput.value);

