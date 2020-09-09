conole.log('loading main js file')
// This is the initial log to let us know the our js file is linked to our 

let fetchPromise = window.fetch("https://randomuser.me/api/5");
fetch.promise.then(function(data){
    console.log ('fetch call is finished', data);
    return data.json()
// We have asked our API to fetch the data of 5 people from randomuser.me
// and once it's fetched then we will console log a finished messege along 
// with the returned data
});

jsonPromise.then(function(json){
    console.log('have an actual payload', json);
    Process(json.results);
})

console.log('after fetch call')


function process(users){

    let ul = document.getElementById("people")
    // retriving the ul element on the HTML with the id of 'people"

    users.forEach(function(user){
        console.log('user first name', user.name.first)
    // For each user log the users first name

        let li = document.createElement("li")
        ul.appendChild(li)
    // creating new elements and appending or adding them to the list element 

        let img = document.createElement("img")
        li.appendChild(img);
    //  Creating an image element and and appending it to the img tag in the body

        let nameDiv = document.createElement("div")
        li.appendChild(nameDiv);
    //  Creating a list element and appending it to the name div in the body
        
        let addressDiv = document.createElement("div")
        li.appendChild(addressDiv);
    //  Creating an address element and appending it to the address div in the body

        nameDiv.addEventListener('click', function({
    //  adding an event listener to the name div. When the name div is clicked it will
        }))
    }
}