//Selecting all DOM elements needed, i.e. body, titles, titles continer, titles and titles fragments
const pageBody = document.querySelector('body');
const titlesContainer = document.querySelector('.titles-container');
const titles = document.querySelectorAll('.titles');

const blackTitles = document.querySelector('.titles-black');
const blueRedTitles = document.querySelector('.titles-blue-red');
const blueGreenTitles = document.querySelector('.titles-blue-green');
const redDarkTitles = document.querySelector('.titles-red-dark');

const blackLetters = document.querySelectorAll('.black-letter');
const blackLettersLine3 = document.querySelectorAll('.black-letter-line-3');
const blackLettersLine2 = document.querySelectorAll('.black-letter-line-2');
const blackLettersLine1 = document.querySelectorAll('.black-letter-line-1');
const blackLettersLine3P1 = document.querySelectorAll('.black-letter-line-3-part-1');
const blackLettersLine3P2 = document.querySelectorAll('.black-letter-line-3-part-2');
const blackLettersLine2P1 = document.querySelectorAll('.black-letter-line-2-part-1');
const blackLettersLine2P2 = document.querySelectorAll('.black-letter-line-2-part-2');
const blackLettersLine1P1 = document.querySelectorAll('.black-letter-line-1-part-1');
const blackLettersLine1P2 = document.querySelectorAll('.black-letter-line-1-part-2');
const blackLettersParts = document.querySelectorAll('.black-letter-part');

const blueRedLetters = document.querySelectorAll('.blue-red');
const blueRedLettersLine3 = document.querySelectorAll('.blue-red-line-3');
const blueRedLettersLine2 = document.querySelectorAll('.blue-red-line-2');
const blueRedLettersLine1 = document.querySelectorAll('.blue-red-line-1');
const blueRedLettersLine3P1 = document.querySelectorAll('.blue-red-line-3-part-1');
const blueRedLettersLine3P2 = document.querySelectorAll('.blue-red-line-3-part-2');
const blueRedLettersLine2P1 = document.querySelectorAll('.blue-red-line-2-part-1');
const blueRedLettersLine2P2 = document.querySelectorAll('.blue-red-line-2-part-2');
const blueRedLettersLine1P1 = document.querySelectorAll('.blue-red-line-1-part-1');
const blueRedLettersLine1P2 = document.querySelectorAll('.blue-red-line-1-part-2');
const blueRedLettersParts = document.querySelectorAll('.blue-red-letter-part');
const blueRedGradientGroup = document.querySelectorAll('.blue-red-gradient-group');
const blueRedGradientParts = document.querySelectorAll('.blue-red-gradient-part');

const blueGreenLetters = document.querySelectorAll('.blue-green');
const blueGreenLettersLine3 = document.querySelectorAll('.blue-green-line-3');
const blueGreenLettersLine2 = document.querySelectorAll('.blue-green-line-2');
const blueGreenLettersLine1 = document.querySelectorAll('.blue-green-line-1');
const blueGreenLettersLine3P1 = document.querySelectorAll('.blue-green-line-3-part-1');
const blueGreenLettersLine3P2 = document.querySelectorAll('.blue-green-line-3-part-2');
const blueGreenLettersLine2P1 = document.querySelectorAll('.blue-green-line-2-part-1');
const blueGreenLettersLine2P2 = document.querySelectorAll('.blue-green-line-2-part-2');
const blueGreenLettersLine1P1 = document.querySelectorAll('.blue-green-line-1-part-1');
const blueGreenLettersLine1P2 = document.querySelectorAll('.blue-green-line-1-part-2');
const blueGreenLettersParts = document.querySelectorAll('.blue-green-letter-part');
const blueGreenGradientGroup = document.querySelectorAll('.blue-green-gradient-group');
const blueGreenGradientParts = document.querySelectorAll('.blue-green-gradient-part');

const redDarkLetters = document.querySelectorAll('.red-dark');
const redDarkLettersLine3 = document.querySelectorAll('.red-dark-line-3');
const redDarkLettersLine2 = document.querySelectorAll('.red-dark-line-2');
const redDarkLettersLine1 = document.querySelectorAll('.red-dark-line-1');
const redDarkLettersLine3P1 = document.querySelectorAll('.red-dark-line-3-part-1');
const redDarkLettersLine3P2 = document.querySelectorAll('.red-dark-line-3-part-2');
const redDarkLettersLine2P1 = document.querySelectorAll('.red-dark-line-2-part-1');
const redDarkLettersLine2P2 = document.querySelectorAll('.red-dark-line-2-part-2');
const redDarkLettersLine1P1 = document.querySelectorAll('.red-dark-line-1-part-1');
const redDarkLettersLine1P2 = document.querySelectorAll('.red-dark-line-1-part-2');
const redDarkLettersParts = document.querySelectorAll('.red-dark-letter-part');
const redDarkGradientGroup = document.querySelectorAll('.red-dark-gradient-group');
const redDarkGradientParts = document.querySelectorAll('.red-dark-gradient-part');

//Function to assign width & height to an element
function widthHeight(element, widthValue, heightValue) {
    element.style.width = widthValue;
    element.style.height = heightValue;
}

//Function to assign z-index to an element
function elementZIndex(element, zIndexValue) {
    element.style.zIndex = zIndexValue;
}

//Function to hide all letters
function hideLetters(letters, gradients) {
    for (let i = 0; i < letters.length; i++) {
        letters[i].style.opacity = 0;
    }

    for (let i = 0; i < gradients.length; i++) {
        gradients[i].style.opacity = 0;
    }
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

elementZIndex(blackTitles, '4');
elementZIndex(blueRedTitles, '3');
elementZIndex(blueGreenTitles, '2');
elementZIndex(redDarkTitles, '1');

hideLetters(blueRedLetters, blueRedGradientGroup);
hideLetters(blueGreenLetters, blueGreenGradientGroup);
hideLetters(redDarkLetters, redDarkGradientGroup);

for (let i = 0; i < blackLetters.length; i++) {
    blackLetters[i].style.transform = 'scale(0)';
}

var firstAnimationSeq = anime.timeline({
    loop: false,
});

var secondAnimationSeq = anime.timeline({
    loop: true,
});

firstAnimationSeq.add({
    targets: blackLettersLine1P1,
    scale: [{ value: 1, easing: 'spring(1, 80, 10, 0)', duration: 1000 }],
    delay: anime.stagger(100, { grid: [1, 1], from: 'center' })
}).add({
    targets: blackLettersLine1P2,
    scale: [{ value: 1, easing: 'spring(1, 80, 10, 0)', duration: 1000 }],
    delay: anime.stagger(100, { grid: [1, 1], from: 'center' }),
}).add({
    targets: blackLettersLine2P1,
    scale: [{ value: 1, easing: 'spring(1, 80, 10, 0)', duration: 1000 }],
    delay: anime.stagger(100, { grid: [1, 1], from: 'center' }),
}).add({
    targets: blackLettersLine2P2,
    scale: [{ value: 1, easing: 'spring(1, 80, 10, 0)', duration: 1000 }],
    delay: anime.stagger(100, { grid: [1, 1], from: 'center' }),
}).add({
    targets: blackLettersLine3,
    scale: [{ value: 1, easing: 'easeOutBounce', duration: 1000 }],
    delay: anime.stagger(200, { from: 'center' }),
})


setTimeout(() => {
    secondAnimationSeq.add({
        targets: [blueRedLetters, blueRedGradientGroup, blueGreenLetters, blueGreenGradientGroup, redDarkLetters, redDarkGradientGroup],
        opacity: 1,
    }).add({
        targets: blackLettersLine1P1,
        translateY: [{ value: 400, easing: 'easeInOutBack', duration: 1000 }],
        delay: anime.stagger(300),
    }).add({
        targets: blackLettersLine2P2,
        translateY: [{ value: 400, easing: 'easeInOutBack', duration: 1000 }],
        delay: anime.stagger(300),
    }).add({
        targets: blackLettersLine1P2,
        translateY: [{ value: 400, easing: 'easeInOutBack', duration: 1000 }],
        delay: anime.stagger(350),
    }).add({
        targets: blackLettersLine2P1,
        translateY: [{ value: 400, easing: 'easeInOutBack', duration: 1000 }],
        delay: anime.stagger(300),
    }).add({
        targets: blackLettersLine3,
        translateY: [{ value: -400, easing: 'easeInOutQuint', duration: 1000 }],
        delay: anime.stagger(100, { grid: [2, 1], from: 'center' }),
    }).add({
        targets: [blueRedLetters, blueRedGradientGroup],
        opacity: [
            { value: .1, easing: 'easeOutSine', duration: 500 },
            { value: 1, easing: 'easeInOutQuad', duration: 1200 },
            { value: 0, easing: 'easeInOutQuad', duration: 1700 },
        ],
        delay: anime.stagger(250, { grid: [14, 5], from: 'center' }),
    }).add({
        targets: [blueGreenLetters, blueGreenGradientGroup],
        opacity: [
            { value: .1, easing: 'easeOutSine', duration: 500 },
            { value: 1, easing: 'easeInOutQuad', duration: 1200 },
            { value: 0, easing: 'easeInOutQuad', duration: 1700 },
        ],
        delay: anime.stagger(250, { grid: [14, 5], from: 'center' }),
    }).add({
        targets: blackLettersLine1P1,
        translateY: [{ value: 0, easing: 'easeInOutBack', duration: 1000 }],
        delay: anime.stagger(300),
    }).add({
        targets: blackLettersLine2P2,
        translateY: [{ value: 0, easing: 'easeInOutBack', duration: 1000 }],
        delay: anime.stagger(300),
    }).add({
        targets: blackLettersLine1P2,
        translateY: [{ value: 0, easing: 'easeInOutBack', duration: 1000 }],
        delay: anime.stagger(350),
    }).add({
        targets: blackLettersLine2P1,
        translateY: [{ value: 0, easing: 'easeInOutBack', duration: 1000 }],
        delay: anime.stagger(300),
    }).add({
        targets: blackLettersLine3,
        translateY: [{ value: 0, easing: 'easeInOutQuint', duration: 1000 }],
        delay: anime.stagger(100, { grid: [2, 1], from: 'center' }),
    })
}, 10000);