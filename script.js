let currentIndex = 0;
const images = document.querySelectorAll('.slider img');
setInterval(() => {
    images[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.display = 'block';
}, 3000);

window.onload = () => {
    images.forEach((img, index) => {
        img.style.display = index === 0 ? 'block' : 'none';
    });
};
