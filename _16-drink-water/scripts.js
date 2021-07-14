const DOM = {
    smallCups: document.querySelectorAll('.cup-small'),
    liters: document.getElementById('liters'),
    percentage: document.getElementById('percentage'),
    remained: document.getElementById('remained'),
    fullCups: document.querySelectorAll('.cup-small.full'),
    bigCup: document.querySelector('.cup'),

    target_cup_is_full: (index) => DOM.smallCups[index].classList.contains('full'),
    target_next_isnt_full: (index) => !DOM.smallCups[index].nextElementSibling.classList.contains('full'),
}




DOM.smallCups.forEach( (cup, index) => {
    cup.addEventListener('click', () => highlightCups(index) );
})

function highlightCups (index) {
    if(DOM.target_cup_is_full(index) && DOM.target_next_isnt_full(index)) {
        console.log('hola');
        index--
    }
    DOM.smallCups.forEach( (cup, index2) => {
        if(index2 <= index){
            cup.classList.add('full');
        }else {
            cup.classList.remove('full');
        }
        return 
    })

    updateBigCup();
}

function updateBigCup () {
    const BigCupHeight = DOM.bigCup.clientHeight;
    const totalCups = DOM.smallCups.length;
    const fullCups = document.querySelectorAll('.cup-small.full').length;
    


    if (fullCups === 0) {
        DOM.percentage.style.visibility = 'hidden';
        DOM.percentage.style.height = 0;
    }else {
        DOM.percentage.style.visibility = 'visible';
        DOM.percentage.style.height = `${fullCups / totalCups * BigCupHeight}px`;
        DOM.percentage.innerText = `${fullCups / totalCups * 100}%`;
    }

    if (fullCups === totalCups) {
        DOM.remained.style.visibility = 'hidden';
        DOM.remained.style.height = 0;
    }else {
        DOM.remained.style.visibility = 'visible';
        DOM.liters.innerText = `${2 - (250 * fullCups / 1000)}L`
    }
}
