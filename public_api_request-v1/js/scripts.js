
const randUserUrl = 'https://randomuser.me/api/?results=12&nat=us';
const gallery = document.querySelector('#gallery');
const title = document.querySelector('title');
const search = document.querySelector('#search-container');
const card = document.querySelector('.card-info-container');
const body = document.querySelector('body');
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
            //createModal(profiles)
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

        gallery.insertAdjacentHTML('beforeend', person); 
        })
};


function createModal(profiles){
    let modal = profiles.map(employee =>
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
                        <p class="modal-text">Birthday: ${employee.dob.date}</p>
                    </div>
                </div>

                // IMPORTANT: Below is only for exceeds tasks 
                <div class="modal-btn-container">
                    <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
                    <button type="button" id="modal-next" class="modal-next btn">Next</button>
                </div>
            </div>`
   );  
   gallery.insertAdjacentHTML('afterend',modal);
   console.log(modal)       
};

// document.addEventListener('click', (e)=> {
//     console.log(e.target)
//     console.log(e.target.classList.contains('card'));
//     if (e.target.classList.contains('card')) {
//         createModal(e.target)
//     }
// })

// document.addEventListener('click', e => {
//     if(e.target.type === 'BUTTON' && e.target.className === 'modal-close-btn') {
//         modal.display = 'none';
//     }
// })
registrar(randUserUrl)