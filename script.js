// Pages
const firstPage = document.querySelector(".first-page");
const secondPage = document.querySelector(".second-page");


// Page One
const mainText = document.querySelector(".main-text");
const secText = document.querySelector(".sec-text");
const ballonImg = document.querySelector(".ballon-img");
const cakeImg = document.querySelector(".cake-img");
const smlText = document.querySelector(".small-text");

// Page Two
const card = document.querySelector(".card");

var end = Date.now() + (5 * 1000);

var colors = ['#FF4D6D', '#FFF0F3'];

window.onload = () => {
    mainText.classList.remove("visible");
    secText.classList.remove("visible");
    ballonImg.classList.remove("visible");
    cakeImg.classList.remove("visible");
    smlText.classList.remove("visible");
    smlText.classList.remove("fade-in-out-animation");
    setTimeout(() => {
        mainText.classList.add("visible");
        secText.classList.add("visible");
        ballonImg.classList.add("visible");
        setTimeout(() => {
            cakeImg.classList.add("visible");
            celebrationAnimaion();
            setTimeout(() => {
                smlText.classList.add("visible");
                smlText.classList.add("fade-in-out-animation");
            }, 5000)
        }, 800)
    }, 500)
}

setTimeout(() => {
    firstPage.onclick = () => {
        firstPage.style.display = 'none';
        secondPage.style.display = 'inline';

        secondPageStructure();
    }
}, 6000)

// celebration Animation
function celebrationAnimaion() {
    (function frame() {
        confetti({
            particleCount: 3,
            angle: 60,
            spread: 40,
            origin: { x: 0 },
            colors: colors
        });
        confetti({
            particleCount: 3,
            angle: 120,
            spread: 40,
            origin: { x: 1 },
            colors: colors
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}

function secondPageStructure() {
    card.classList.remove("visible");
    setTimeout(() => {
        card.classList.add("visible");
    }, 500)
}

card.onclick = () => {
    card.classList.toggle("clicked");
}