
const randUserUrl = 'https://randomuser.me/api/?results=12&nat=us';
const gallery = document.getElementById('gallery');
    console.log(gallery);
let profiles = [];
let data;

/*

*/

async function registrar(url) {
    const peopleResponse = await fetch(url)
        .then(response => response.json())
        .then(data => {
            data.results.map(person => {
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
            })
        })
};

registrar(randUserUrl)