console.log('loading main js file')
// This is the initial log to let us know the our js file is linked to our 

let fetchPromise = window.fetch("https://randomuser.me/api/?results=5");
// fetch requires a request input. It is asking where you would like it to 
// fetch data from. We created a variable that requests data to be fetched from
// the random user API and holds it as a promise. Remember that when we use the promise
// method we are saying that when we retrieve our data we are PROMISING to do something
// with it

console.log('about to make a fetch call')
let jsonPromise = fetchPromise.then(function(data){
    console.log ('fetch call is finished', data);
    return data.json()
});
// We have asked our program to fetch the json data of 5 people via the randomuser.me API
// and once it's fetched then we will console log a finished messege along 
// with the returned data. At his point the json data did not return the payload
// but the promise has been made
// ***Comprehension check. what is json?***

console.log('after the fetch call')

// *** Comprehension check. What is an API? An API or an Application Programming
// Interface give us something when we ask for it by means of promises. Promises
// are requests we shoot to the API, which are delivered to the server and then
// returned to the front end. Once we receive that information we PROMISE to do
// something with it***
// });

jsonPromise.then(function(json){
    console.log('have an actual payload', json);
    process(json.results)
    // The results attribute is what holds the array of users. This is the info
    // we want to extract from our payload
})



function process(users){
// This is a function to process the users we retrieved from our API.
// We want to log the first name for each user

let ul = document.getElementById("people")
// retriving the ul element on the HTML with the id of 'people"

    users.forEach(function(user){
    console.log(user.name.first) 
    
    // creating new elements and appending or adding them to the list element 
    let li = document.createElement("li")
    ul.appendChild(li)
    
    //  Creating an image element and and appending it to the img tag in the body
    let img = document.createElement("img")
    li.appendChild(img);

    // We created a new variable to hold the picture key. Remember the picture is 
    // is being held in the user object so we have to use dot notation to access the
    // actual picture itself. Then we have an option of 3 sizes
    let profilePic = user.picture.large
    img.src = profilePic

    //  Creating a list element and appending it to the name div in the body
    let nameDiv = document.createElement("div")
    li.appendChild(nameDiv);

    let profileName = `Name: ${user.name.first} ${user.name.last}`;

    // Now we access the inner text of the name div that we created and appended
    // and we're going to place our profileName variable in the inner text of all
    // name div
    nameDiv.innerText = profileName;

    // ***Comprehension check. What is the purpose of back-tick notation?***

    //  Creating an address element and appending it to the address div in the body
    let addressDiv = document.createElement("div")
    li.appendChild(addressDiv);

    let profileAddress = `Address: ${user.location.street.number} ${user.location.street.name}, ${user.location.city} ${user.location.state} ${user.location.postcode}`;
    addressDiv.innerText = profileAddress
    })
}
    

//   nameDiv.addEventListener('click', function({
//    adding an event listener to the name div. When the name div is clicked it will show
