
const randUserUrl = 'https://randomuser.me/api/?results=12&nat=us';
const gallery = document.querySelector('#gallery');
const title = document.querySelector('title');
const search = document.querySelector('#search-container');
const body = document.querySelector('body');

let profiles = [];
let data;

/*
Fetches data from Random User Generator and waits for all 12 users before proceeding.
Takes the response from the fetch request and "converts" that JSON string into readable JS.
The 'results' from JS is an array that is given to generateProfiles to make the cards on the page and
individual, which displays the modal window for the individual employee.

*/

async function registrar(url) {
    const peopleResponse = await fetch(url)
        .then(response => response.json())
        .then(data => {
            profiles = data.results;
            console.log(profiles);
            generateProfiles(profiles);
            individual(profiles)
        })
        .catch(err => Error('we have a problem'))
};

/*
generateProfiles takes the fetched results from the registrar function and iterates over that array.
Makes a new card for each employee and inserts each new card to the end of the gallery div.
*/

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

        gallery.insertAdjacentHTML('beforeend', person); 
        })
};

/*
When a user clicks on a card, that employees's individual data (stored in the registrar function) is called 
and a modal window is created and inserted after the gallery, displaying employee information. 
*/

function createModal(employee){
    let modal =
            `<div class="modal-container">
                <div class="modal">
                    <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                    <div class="modal-info-container">
                        <img class="modal-img" src="${employee.picture.large}" alt="profile picture">
                        <h3 id="name" class="modal-name cap">${employee.name.first} ${employee.name.last}</h3>
                        <p class="modal-text">${employee.email}</p>
                        <p class="modal-text cap">${employee.location.city}</p>
                        <hr>
                        <p class="modal-text">${employee.phone}</p>
                        <p class="modal-text">${employee.location.street.number} ${employee.location.street.name}, ${employee.location.city}, ${employee.location.state} ${employee.location.postcode}</p>
                        <p class="modal-text">Birthday: ${employee.dob.date.slice(5,7)}/${employee.dob.date.slice(8,10)}/${employee.dob.date.slice(0,4)}</p>
                    </div>
                </div>
            </div>`;
              
   gallery.insertAdjacentHTML('afterend', modal);
   
   const modalCont = document.querySelector('.modal-container');
   const closeButton = document.querySelector('.modal-close-btn');
   closeButton.addEventListener('click', (e) => {
    modalCont.remove();
    })   
       
};

/*
Creates an event listener on each employee 'card' that is created. When that card is clicked on, 
it takes the employee data results at that index and passes it to the createModal function.
This function is also intended to be able to close the modal, but is a one-and-done right now.
*/

function individual(data) {
    const card = document.querySelectorAll('.card');
    for (let i=0; i<data.length; i++) {
        card[i].addEventListener('click', (e)=> {
            createModal(data[i]) 
    })
    }
}

registrar(randUserUrl)
