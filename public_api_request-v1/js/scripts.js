
const randUserUrl = 'https://randomuser.me/api/';
let profiles = [];
let data;

/*
Makes a new promise and goes to the url 12 times. Each time it goes to the URL, 
it 'gets' the JSON and stores it in the array 'profiles'. 
*/

function registrar(url) {
return new Promise ((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    //for (let i=0; i<12; i++) {
        xhr.open('GET', url);
        xhr.onload = () => {
            if (xhr.status === 200) {
                data = JSON.parse(xhr.responseText);
                resolve(profiles.push(data));
                //console.log(data);
            } else {
                reject(Error(xhr.statusText));
            }
        };

        xhr.send()
//}
})
};

//console.log(registrar(randUserUrl));
//Make a promise of promises so page waits for all 'data' to load before displaying

function getProfiles() {
    for (let i=0; i<12; i++) {
        // let profile = registrar(randUserUrl);
        // profiles.push(profile); 
        registrar(randUserUrl);
    }
    //console.log(Promise.all(data))
    return profiles;
    
};

console.log(getProfiles());
