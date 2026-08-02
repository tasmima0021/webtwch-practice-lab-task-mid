
const images = [
    "https://picsum.photos/id/1015/600/350",
    "https://picsum.photos/id/1016/600/350",
    "https://picsum.photos/id/1018/600/350",
    "https://picsum.photos/id/1020/600/350"
];

let index = 0;

const sliderImage = document.getElementById("sliderImage");


function showImage() {
    sliderImage.src = images[index];
}


function nextImage() {
    index++;
    if (index >= images.length) {
        index = 0;
    }
    showImage();
}


function previousImage() {
    index--;
    if (index < 0) {
        index = images.length - 1;
    }
    showImage();
}


setInterval(nextImage, 3000);