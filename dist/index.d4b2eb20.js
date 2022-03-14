// Slideshow Images
let slideIndex = 0;
showSlides();
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for(i = 0; i < slides.length; i++)slides[i].style.display = "none";
    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 6000); // Change image every 6 seconds
}
// Slider sidebar recipe index
let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value
slider.oninput = function() {
    output.innerHTML = this.value;
};

//# sourceMappingURL=index.d4b2eb20.js.map
