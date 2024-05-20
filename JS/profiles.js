const images = [
    '../images/Profile_bg/1.png',
    '../images/Profile_bg/2.png',
    '../images/Profile_bg/3.png',
    '../images/Profile_bg/4.png',
    '../images/Profile_bg/5.png'
];

const images2 = [
    '../images/Profile_bg/6.png',
    '../images/Profile_bg/7.png',
    '../images/Profile_bg/8.png',
    '../images/Profile_bg/10.png',
    '../images/Profile_bg/12.png'
];

function getRandomImage(Images) {
    const randomIndex = Math.floor(Math.random() * Images.length);
    const selectedImage = Images.splice(randomIndex, 1)[0];
    return selectedImage;
}

for (let i = 1; i <= 5; i++) {
    const figImgId = `proff${i}`;
    const backgroundImage = getRandomImage(images);
    document.getElementById(figImgId).style.backgroundImage = `url(${backgroundImage})`;
}

for (let i = 1; i <= 5; i++) {
    const figImgId = `bgg${i}`;
    const backgroundImage = getRandomImage(images2);
    document.getElementById(figImgId).src = backgroundImage;
}