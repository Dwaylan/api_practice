conole.log('loading main js file')

let fetchPromise = window.fetch("https://randomuser.me/api/5");
fetch.promise.then(function(data){
    console.log ('fetch call is finished', data);
    return data.json()
});

jsonPromise.then(function(json){
    console.log('have an actual payload', json);
    Process(json.results);
})

console.log('after fetch call')


function process(users){

    let ul = document.getElementById("people")

    users.forEach(function(user){
        console.log('user first name', user.name.first)

        let li = document.createElement("li")
        ul.appendChild(li);

        let img = document.createElement("img")
        li.appendChild(img);

        let nameDiv = document.createElement("div")
        li.appendChild(nameDiv);
        
        let addressDiv = document.createElement("div")
        li.appendChild(addressDiv);

        nameDiv.addEventListener('click', function({

        })
    
}