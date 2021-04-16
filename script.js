//Selecting all DOM elements needed, i.e. body, titles, titles continer, titles and titles fragments
let pageBody = document.querySelector('body');
let titlesContainer = document.querySelector('.titles-container');
let titles = document.querySelectorAll('.titles');

let blackTitles = document.querySelector('.titles-black');
let blueRedTitles = document.querySelector('.titles-blue-red');
let blueGreenTitles = document.querySelector('.titles-blue-green');
let redDarkTitles = document.querySelector('.titles-red-dark');

let blackLetters = document.querySelectorAll('.black-letter');
let blackLettersParts = document.querySelectorAll('.black-letter-part');

let blueRedLetters = document.querySelectorAll('.blue-red-letter');
let blueRedLettersParts = document.querySelectorAll('.blue-red-letter-part');
let blueRedGradientParts = document.querySelectorAll('.blue-red-gradient-part');

let blueGreenLetters = document.querySelectorAll('.blue-green-letter');
let blueGreenLettersParts = document.querySelectorAll('.blue-green-letter-part');
let blueGreenGradientParts = document.querySelectorAll('.blue-green-gradient-part');

let redDarkLetters = document.querySelectorAll('.red-dark-letter');
let redDarkLettersParts = document.querySelectorAll('.red-dark-letter-part');
let redDarkGradientParts = document.querySelectorAll('.red-dark-gradient-part');

//Function to assign width & height to an element
function widthHeight(element, widthValue, heightValue) {
    element.style.width = widthValue;
    element.style.height = heightValue;
}

//Function to assign z-index to an element
function elementZIndex(element, zIndexValue) {
    element.style.zIndex = zIndexValue;
}

//Body Styles
pageBody.style.overflow = 'hidden';
pageBody.style.margin = '0';
pageBody.style.padding = '0';

//Titles Container Styles
widthHeight(titlesContainer, '100vw', '100vh');
titlesContainer.style.display = 'flex';
titlesContainer.style.justifyContent = 'center';
titlesContainer.style.alignItems = 'center';
titlesContainer.style.overflow = 'hidden';

//Titles Styles
for (let i = 0; i < titles.length; i++) {
    titles[i].style.position = 'absolute';
    widthHeight(titles[i], '80%', 'auto');
}

elementZIndex(blackTitles, '3');
elementZIndex(blueRedTitles, '4');
elementZIndex(blueGreenTitles, '2');
elementZIndex(redDarkTitles, '1');

// for (let i = 0; i < blackLetters.length; i++) {
//     blackLetters[i].style.transform = 'scale(0)'
// }

// setTimeout(() => {
//     var animationSequence = anime.timeline({});

//     animationSequence.add({
//         targets: blackLetters,
//         scale: [
//             { value: 1, easing: 'easeInOutQuad', duration: 1000 }
//         ],
//         delay: anime.stagger(100, { grid: [15, 5], from: 'center' }),
//     }).add({
//         targets: [blackLettersParts],
//         translateY: [0, 400],
//         delay: anime.stagger(100, { grid: [15, 5], from: 'center' }),
//     }, 3200).add({
//         targets: [blackLetters],
//         translateY: [0, 400],
//         loop: true,
//         delay: anime.stagger(100, { grid: [15, 5], from: 'center' }),
//     });
// }, 100);