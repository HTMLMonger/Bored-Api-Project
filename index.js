'use strict';

myForm.addEventListener("submit", (e) => {
    e.preventDefault();
let people = document.getElementById(`numPeople`).value;
let type = document.getElementById(`type`).value;
  

function boredFetch() {
    fetch(`http://www.boredapi.com/api/activity?type=${type}&participants${people}`,{
      })
    .then( response => response.json() )
    .then( response => addDom(response.activity) )
}

function addDom(info){
    document.getElementById(`answer`).innerHTML = JSON.stringify(info);
}
boredFetch(people,type);
})





