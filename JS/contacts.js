const images = [
    '../images/Profile_bg/1x1-1.png',
    '../images/Profile_bg/1x1-2.png',
    '../images/Profile_bg/1x1-3.png',
    '../images/Profile_bg/1x1-4.png',
    '../images/Profile_bg/1x1-5.png'
];

function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const selectedImage = images.splice(randomIndex, 1)[0];
    return selectedImage;
}

for (let i = 1; i <= 5; i++) {
    const figImgId = `figImg${i}`;
    const backgroundImage = getRandomImage();
    document.getElementById(figImgId).style.backgroundImage = `url(${backgroundImage})`;
}