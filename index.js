'use strict';

// Assuming you have a form element with the id "myForm" in your HTML.
const myForm = document.getElementById('myForm');
const answer = document.getElementById('answer');
const answer2 = document.getElementById('answer2');
const answer3 = document.getElementById('answer3');

myForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const type = document.getElementById('type').value;
  

    // Call the boredFetch function with the user input values.
    boredFetch(type);
});

function addDom(info,info2,info3) {
    // Display the activity info on the page.
    answer.innerHTML = JSON.stringify(info);
    let price = JSON.stringify(info2);
    answer3.innerHTML = `People: ${JSON.stringify(info3)}`;
    if (price == 0){
        answer2.innerHTML = "Price: FREE"
    } else if (price > 0 && price < 0.1){
        answer2.innerHTML = "Price: Dirt Cheap";
    } else if (price >= 0.1 && price < 0.2) {
        answer2.innerHTML = "Price: Cheap";
    } else if (price >= 0.2 && price < 0.3) {
        answer2.innerHTML = "Price: Innexpensive";
    }else if (price >= 0.3 && price < 0.4) {
        answer2.innerHTML = "Price: Fair";
    }else if (price >= 0.4 && price < 0.5) {
        answer2.innerHTML = "Price: Middle of the Range";
    }else if (price >= 0.5 && price < 0.6) {
        answer2.innerHTML = "Price: Getting Pricey";
    }else if (price >= 0.6 && price < 0.7) {
        answer2.innerHTML = "Price: Kinda Expensive";
    }else if (price >= 0.7 && price < 0.8) {
        answer2.innerHTML = "Price: Too Steep";
    }else if (price >= 0.8 && price < 0.9) {
        answer2.innerHTML = "Price: Epensive";
    }else if (price >= 0.9 && price < 1) {
        answer2.innerHTML = "Price: Fit for a King";
    }
  
}


function boredFetch( type) {
    const apiUrl = `https://www.boredapi.com/api/activity?type=${type}`
    

    fetch(apiUrl)
    .then((response) => response.json())
    .then((response) => addDom(response.activity,response.price,response.participants))
    .catch((err) => console.error(`error:`,err));

}

