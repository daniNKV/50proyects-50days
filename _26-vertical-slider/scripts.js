let DOM = {
    sliderContainer : document.querySelector('.slider-container'),
    slideRight : document.querySelector('.right-slide'),
    slideLeft : document.querySelector('.left-slide'),
    upBtn : document.querySelector('.up-btn'),
    downBtn : document.querySelector('.down-btn'),
   
}


let activeSlideIndex = 0;
let slidesLength = DOM.slideRight.querySelectorAll('div').length;


DOM.slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

DOM.upBtn.addEventListener('click', () => changeSlide('up'))
DOM.downBtn.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    const sliderHeight = DOM.sliderContainer.clientHeight;
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }
    } else if ( direction === 'down'){
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1;
        }
    }

    DOM.slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    DOM.slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}