// get dom elemnet

const main  = document.getElementById("main");
const addUserBtn = document.getElementById("add-user");
const doubleBtn = document.getElementById("double");
const filterBtn = document.getElementById("filter");
const sortBtn = document.getElementById("sort");
const addBtn =  document.getElementById("sum");

//data array 
let data = [];

// Fetch data from random user api

async function getRandomUser(){
    // wait for the result from API
    const res = await fetch('https://randomuser.me/api/');
    // wait for response to convert into JSON
    const data = await res.json();
    //console.log(data);
    
    // get the user data
    const user = data.results[0];
    // create the new user
    const newUser = {
        name: `${user.name.title} ${user.name.first} ${user.name.last}`,
        balance: Math.floor(Math.random()*1000000)
    }
    console.log(newUser);
    // Add the new user into the array
    addData(newUser);
}

// FUNCTIon to add user data into user data array
function addData(newUser){
    // add new user data in the user data array
    data.push(newUser);
    // update the dom to display tha data into the array
    updateDOM();
}



// Update the ui with data from the user data array
function updateDOM(userData = data) {
    // Clear previous UI
    main.innerHTML = '<h2><strong>User</strong> Wealth</h2>'
    // Loop through userData and render in the UI
    userData.forEach(user => {
        // Create a new div element for the user
        const userDiv = document.createElement('div');
        // Apply the user class to the new div
        userDiv.classList.add('user');
        // Add inner HTML to the user div
        userDiv.innerHTML = `<strong>${user.name}</strong> 
                            ${user.balance}`
        // Add the new element into the DOM
        main.appendChild(userDiv);
    });
}


getRandomUser();
getRandomUser();