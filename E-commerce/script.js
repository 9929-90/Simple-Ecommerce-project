let currentSlide = 0;

function showSlide(index){
    const slides = document.querySelectorAll('.slide');
    if(index >= slides.length) {
        currentSlide = 0;
    }
    else if (index < 0){
        currentSlide = slides.length - 1;
    } 
    else {
        currentSlide = index;
    }
    slides.forEach((slide, i) => {
        slide.style.opacity = (i === currentSlide) ? 1 : 0;
    
    });
}
function changeSlide(direction){
    showSlide(currentSlide + direction);
}
setInterval(() => {
    showSlide(currentSlide +1);
}, 5000);

showSlide(currentSlide);