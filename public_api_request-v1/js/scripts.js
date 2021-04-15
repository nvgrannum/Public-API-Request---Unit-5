
const randUserUrl = 'https://randomuser.me/api/?results=12&nat=us';
const gallery = document.querySelector('title');
    console.log(gallery);
let profiles = [];
let data;

/*
Makes a new promise and goes to the url 12 times. Each time it goes to the URL, 
it 'gets' the JSON and stores it in the array 'profiles'. 
*/

async function registrar(url) {
    const response = await fetch(url);
    profiles = await response.json()
        .then(profile => console.log(profile));  
    return profiles;
}

let test = registrar(randUserUrl)


test.forEach(person => {
   person =
    `<div class="card">
        <div class="card-img-container">
            <img class="card-img" src="https://placehold.it/90x90" alt="profile picture">
        </div>
        <div class="card-info-container">
            <h3 id="name" class="card-name cap">first last</h3>
            <p class="card-text">email</p>
            <p class="card-text cap">city, state</p>
        </div>
    </div>`

gallery.insertAdjacentHTML('beforeend', person) 
});