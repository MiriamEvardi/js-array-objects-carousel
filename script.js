const images = [
    {
        image: 'wallhaven-7396ky.jpg',
        title: "Princess Mononoke",
        text: "A young prince, seeking the fulfillment of a prophecy, encounters a girl raised by wolves and the two embark on an epic journey to save the forest from destruction."
    },

    {
        image: 'totoro.jpg',
        title: 'Totoro',
        text: "Two young sisters move to the countryside with their father and discover the magical creatures living in the nearby forest, including the gentle and mysterious Totoro."
    },

    {
        image: 'la-citta-incantata.jpg',
        title: 'Spirited Away',
        text: "A young girl finds herself trapped in a mysterious world of spirits and must navigate through an enchanted bathhouse to rescue her parents and return to the human world."
    },

    {
        image: '1198624-1920x1080-desktop-full-hd-studio-ghibli-wallpaper-photo.jpg',
        title: 'Castle in the Sky',
        text: "A young boy and a girl with a mysterious crystal pendant embark on a high-flying adventure to find the legendary floating city of Laputa and uncover its secrets."
    },

    {
        image: 'Howl.jpg',
        title: "Howl's Moving Castle",
        text: "A young woman is transformed into an elderly woman by a curse and seeks refuge in the moving castle of the enigmatic wizard Howl, where she discovers love and the power of friendship."
    }
];

const titleImages = document.getElementById("title");
const textImages = document.getElementById("text");
const sliderElement = document.getElementById("slider");
const thumbnailElement = document.getElementById("thumbnail");


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