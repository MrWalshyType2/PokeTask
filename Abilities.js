fetch('https://pokeapi.co/api/v2/')
.then(
function(response) {
if (response.status !== 200) {
console.log('Looks like there was a problem. Status Code: ' +
response.status);
return;
}

// Examine the text in the response 
response.json().then(function(data) {
    console.log(data);
    for (let i = 0; i < 200; i++) {
    document.querySelector("#resp").innerHTML = data[i].id; 
    console.log((document.querySelector("#resp").innerHTML = data[i].userId));
    console.log((document.querySelector("#resp").innerHTML = data[i].title));
    
    console.log((document.querySelector("#resp").innerHTML = data[i].completed));
    console.log((document.querySelector("#resp").innerHTML = data[i].completed));
    
    let para = document.createElement("P"); // Create a <p> element
    para;
    para.className = "alert alert-danger col-md-8";
    para.innerText = `The User id is : ${(document.querySelector("#resp").innerHTML = data[i].id)} \n
     The User id is : ${(document.querySelector("#resp").innerHTML = data[i].userId)} \n
     The title is : ${(document.querySelector("#resp").innerHTML = data[i].title)} \n
     The completed status is : ${(document.querySelector("#resp").innerHTML = data[i].completed)}`; // Insert text

    let myDiv = document.getElementById("");
     
    myDiv.appendChild(para);
    }
    });
    })