const images = [
    {
        image: 'wallhaven-7396ky.jpg',
        title: "Princess Mononoke",
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.'
    },

    {
        image: 'totoro.jpg',
        title: 'Totoro',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.'
    },

    {
        image: 'la-citta-incantata.jpg',
        title: 'Spirited Away',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos."
    },

    {
        image: '1198624-1920x1080-desktop-full-hd-studio-ghibli-wallpaper-photo.jpg',
        title: 'Castle in the Sky',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city'
    },

    {
        image: 'Howl.jpg',
        title: "Howl's Moving Castle",
        text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay."
    }
];

const titleImages = document.getElementById("title");
const textImages = document.getElementById("text");


let sliderNumber = 1;

function changeSlide(direction) {

    document.querySelector(`#slider img:nth-of-type(${sliderNumber})`).classList.remove("active");

    const thumbnails = document.querySelectorAll(".thumb-img");

    sliderNumber += direction;

    if (sliderNumber > images.length) {
        sliderNumber = 1;

    } else if (sliderNumber < 1) {
        sliderNumber = images.length;
    }

    thumbnails.forEach((element, index) => {

        element.classList.remove("thumb-active");

        if (index == sliderNumber - 1) {
            element.classList.add("thumb-active");

        }
    })

    document.querySelector(`#slider img:nth-of-type(${sliderNumber})`).classList.add("active");

    document.getElementById("title").textContent = images[sliderNumber - 1].title;
    document.getElementById("text").textContent = images[sliderNumber - 1].text;
}


titleImages.innerText = images[0].title;
textImages.innerText = images[0].text;


const sliderElement = document.getElementById("slider");
const thumbnailElement = document.getElementById("thumbnail");


for (let i = 0; i < images.length; i++) {

    let imagesObject = images[i];

    sliderElement.innerHTML += `<img src="./img/${imagesObject.image}" >`;
    thumbnailElement.innerHTML += `<div class= "thumbnail-container"><img src="./img/${imagesObject.image}" class="thumb-img"></div>`;
}


document.querySelector("#slider img:nth-of-type(1)").className = "active";
document.querySelector(".thumbnail-container img:nth-of-type(1)").classList.add("thumb-active");


document.querySelector("#arrow-up").addEventListener("click", () => {
    changeSlide(-1);
});


document.querySelector("#arrow-down").addEventListener("click", () => {
    changeSlide(1);
});



let direction = 1;

let timeUpElement = setInterval(function () {
    changeSlide(direction);
}, 3000);


document.getElementById("reverse").addEventListener("click", () => {

    //se la direzione è = 1, diventa -1. altrimenti il contrario
    direction == 1 ? direction = -1 : direction = 1;

    console.log(direction)
})

document.getElementById("play-stop").addEventListener("click", () => {

    if (timeUpElement) {
        clearInterval(timeUpElement);
        timeUpElement = null;
    } else {
        timeUpElement = setInterval(function () {
            changeSlide(direction);
        }, 3000);
    }
})