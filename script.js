const images = [
    {
        image: 'img/01.webp',
        title: "Marvel's Spiderman Miles Morale",
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.'
    },

    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.'
    },

    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos."
    },

    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city'
    },

    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay."
    }
];

function changeSlide(direction) {
    document.querySelector(`#slider img:nth-of-type(${sliderNumber})`).classList.remove("active");

    sliderNumber += direction;

    if (sliderNumber > images.length) {
        sliderNumber = 1;

    } else if (sliderNumber < 1) {
        sliderNumber = images.length;
    }

    document.querySelector(`#slider img:nth-of-type(${sliderNumber})`).classList.add("active");


    document.getElementById("title").textContent = images[sliderNumber - 1].title;
    document.getElementById("text").textContent = images[sliderNumber - 1].text;
}


const sliderElement = document.getElementById("slider");
const thumbnailElement = document.getElementById("thumbnail");


for (let i = 0; i < images.length; i++) {

    let imagesObject = images[i];

    sliderElement.innerHTML += `<img src="${imagesObject.image}" >`;
    thumbnailElement.innerHTML += `<div class= "cassone"><img src="${imagesObject.image}" ></div>`;

}


document.querySelector("#slider img:nth-of-type(1)").className = "active";

let sliderNumber = 1;


document.querySelector("#arrow-up").addEventListener("click", () => {
    changeSlide(1);
});


document.querySelector("#arrow-down").addEventListener("click", () => {
    changeSlide(-1);
});

changeSlide(0);


