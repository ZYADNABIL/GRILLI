//!  preload loader ending

let preload = document.querySelector(".preload")
window.onload = function () {
    preload.classList.add("loaded")
    document.body.classList.add("loaded")
}
let addEvent = function (element,event,callback) {
    for (let i = 0, len = element.length ; i < len; i++) {
        element[i].addEventListener(event,callback);
    }
}

//!  slide on landing page

/*select items */
let landSlide = document.querySelector(".landing-slide")
let landItems = document.querySelectorAll(".landing-item")
let landPrevBtn = document.querySelector(".prev")
let landNextBtn = document.querySelector(".next")
/*make variables */
let currentPos = 0;
let activeSlideItem = landItems[currentPos];


let sliderPos = function () {
    activeSlideItem.classList.remove("active")
    landItems[currentPos].classList.add("active")
    activeSlideItem = landItems[currentPos];
}

let slideNext = function () {
    if (currentPos >= landItems.length - 1) {
        currentPos = 0;
    } else {
        currentPos++;
    }
    sliderPos();
}

landNextBtn.addEventListener("click",slideNext)


function slidePrev() {
    if (currentPos <= 0) {
        currentPos = landItems.length - 1
    } else {
        currentPos--
    }
    sliderPos()
}
landPrevBtn.addEventListener("click",slidePrev);
let counterInterval;
let autoSlide = function () {
    counterInterval = setInterval(function () {
        slideNext();
    }, 7000);
}
window.addEventListener("load",autoSlide)




let nums = document.querySelectorAll(".nums .num");
let section = document.querySelector(".three");
let started = false; // Function Started ? No
console.log(section);
window.onscroll = function () {
    if (window.scrollY >= section.offsetTop) {
        if (!started) {
            nums.forEach((num) => startCount(num));
        }
        started = true;
    }
};

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 2000 / goal);
}


let countDown = new Date("oct 27,2023 23:59:59").getTime();

let counter = setInterval(function () {

    let dateNow = new Date().getTime();
    let dateDiff = countDown - dateNow;


    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor(dateDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    let minutes = Math.floor(dateDiff % (1000 * 60 * 60) / (1000 * 60))
    let seconds = Math.floor(dateDiff % (1000 * 60) / (1000))
    document.querySelector(".days").innerHTML = days;
    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".seconds").innerHTML = seconds;
}, 1000)


let btn = document.querySelector(".back-top")
window.onscroll = function () {
    if (window.scrollY >= 600) {
        btn.style.right="30px"
    } else {
        btn.style.right="-40px"
    }
}
btn.addEventListener("click",function(){
    window.scrollTo({
        left:0,
        top:0 ,
        behavior:"smooth"
    })
})





var swiperPopular = new Swiper(".slide-container", {
    spaceBetween: 32,
    grabCursor: true,
    centeredslides: true,
    slidesPerview: "auto", //3
    loop: true,
    autoplay: {
        delay: 3000,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

let nav = document.querySelectorAll(".nav-list")

function scrollToSec(elements) {
    elements.forEach(ele => {
        ele.addEventListener("click", (e) => {
            e.preventDefault()
            document.querySelector(e.target.dataset.sec).scrollIntoView({
                behavior: "smooth"
            })
        })
    })
}
scrollToSec()