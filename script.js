let carouselImages = document.querySelectorAll('.carousel img');
let currentImage = 0;

function carousel() {
    carouselImages[currentImage].classList.remove('active');
    currentImage = (currentImage + 1) % carouselImages.length;
    carouselImages[currentImage].classList.add('active');
}

setInterval(carousel, 3000);


let cultureText = document.querySelector('.culture p');
let studioText = document.querySelector('.studio p');

cultureText.style.display = 'none';
studioText.style.display = 'none';

document.querySelector('.culture').addEventListener('mouseenter', function() {
    cultureText.style.display = 'block';
});

document.querySelector('.culture').addEventListener('mouseleave', function() {
    cultureText.style.display = 'none';
});

document.querySelector('.studio').addEventListener('mouseenter', function() {
    studioText.style.display = 'block';
});

document.querySelector('.studio').addEventListener('mouseleave', function() {
    studioText.style.display = 'none';
});