
const randUserUrl = 'https://randomuser.me/api/?results=12&nat=us';
const gallery = document.querySelector('#gallery');
const title = document.querySelector('title');
    console.log(title);
    console.log(gallery);
let profiles = [];
let data;

/*

*/

async function registrar(url) {
    const peopleResponse = await fetch(url)
        .then(response => response.json())
        .then(data => {
            profiles = data.results;
            console.log(profiles);
            generateProfiles(profiles);
        })
};

function generateProfiles(arr) {
    arr.map(person => {
        person =
            `<div class="card">
                <div class="card-img-container">
                    <img class="card-img" src="${person.picture.large}" alt="profile picture">
                </div>
                <div class="card-info-container">
                    <h3 id="name" class="card-name cap">${person.name.first} ${person.name.last}</h3>
                    <p class="card-text">${person.email}</p>
                    <p class="card-text cap">${person.location.city}, ${person.location.state}</p>
                </div>
            </div>`

        title.insertAdjacentHTML('beforeend', person) 
        })
}

registrar(randUserUrl)