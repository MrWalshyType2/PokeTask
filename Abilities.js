let userUpperLimit;
let userLowerLimit;



function sendValues(){
    userLowerLimit = document.getElementById("userLowerLimit").value;
    userUpperLimit = document.getElementById("userUpperLimit").value;
    limit(userLowerLimit, userUpperLimit);
    console.log("yo we getting intothis funtcion?");
}

function limit(userLowerLimit, userUpperLimit) {
    document.getElementById("tbody").innerHTML="";
    fetch('https://pokeapi.co/api/v2/ability/?offset=' + userLowerLimit + '&limit=' + (userUpperLimit-userLowerLimit))
    .then(
    function(response) {
    if (response.status !== 200) {
    console.log('Looks like there was a problem. Status Code: ' +
    response.status);
    return;
    }
    response.json().then(function(data) {
        console.log(data);
        for (let i = 0; i < 293; i++) {
        console.log(data.results[i].name);
        console.log(data.results[i].url);
        
        let para = document.createElement("P");
        let tbody = document.getElementById("tbody") // Create a <p> element
        para;
        tbody;
        console.log(tbody);
        let string = '<tr><td>'+data.results[i].name+'</td><td>'+data.results[i].url+'</tr>';
       
        document.getElementById("tbody").innerHTML+=string;
        // para.className = "alert alert-success col-md-8";
        // para.innerText = `The name is : ${(data.results[i].name)} \n
        // The url is : ${data.results[i].url}`; // Insert text

      
        }
        });
        })
}
