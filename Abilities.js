(() => {
    let userUpperLimit;
    let userLowerLimit;
    let abilityBtn = document.querySelector("#abilityBtn");
    
    function sendValues() {
      userLowerLimit = document.getElementById("userLowerLimit").value;
      userUpperLimit = document.getElementById("userUpperLimit").value;
      limit(userLowerLimit, userUpperLimit);
      console.log("yo we getting intothis funtcion?");
    }
    
    // Abilities
    function limit(userLowerLimit, userUpperLimit) {
      fetch(
        "https://pokeapi.co/api/v2/ability/?offset=" +
          userLowerLimit +
          "&limit=" +
          (userUpperLimit)
      ).then(function (response) {
        if (response.status !== 200) {
          console.log(
            "Looks like there was a problem. Status Code: " + response.status
          );
          return;
        }
        response.json().then(function (data) {
          console.log(data);
          for (let i = 0; i < 293; i++) {
            console.log(data.results[i].name);
            console.log(data.results[i].url);
    
            let para = document.createElement("P"); // Create a <p> element
            para;
            para.className = "alert alert-danger col-md-8";
            para.innerText = `The name is : ${data.results[i].name} \n
            The url is : ${data.results[i].url}`; // Insert text
    
            let myDiv = document.getElementById("myDiv");
    
            myDiv.appendChild(para);
          }
        });
      });
    }

    abilityBtn.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        sendValues();
    })
})(window);