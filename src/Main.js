import fetchData from "./fetchdata";
import showSlides from "./showSlides";

const search = document.getElementById('user-input-field');
const form = document.getElementById('on-submit');


form.addEventListener('submit', ( e ) => {

    e.preventDefault();

    fetchData( search.value ).then();

});

showSlides();










// Slider sidebar recipe index
let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

slider.oninput = function() {
    output.innerHTML = this.value;
}




