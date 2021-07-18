let DOM = {
    hourEl :document.querySelector('.hour')    ,
    minuteEl : document.querySelector('.minute')   , 
    secondEl : document.querySelector('.second')   , 
    timeEl : document.querySelector('.time')    ,
    dateEl : document.querySelector('.date')    ,
    toggleEl : document.querySelector('.toggle')    ,

}


const DAYS = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

const MONTHS = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

DOM.toggleEl.addEventListener('click', e => {
    const HTML = document.querySelector('HTML')
    if (HTML.classList.contains('dark')) {
        HTML.classList.remove('dark')
        e.target.innerHTML = 'Dark Mode'
    }else {
        HTML.classList.add('dark');
        e.target.innerHTML = 'Light Mode';
    }
})

function setTime() {
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hours= time.getHours();
    const hoursForClock = hours % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM'
    console.log(time);

    DOM.hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`
    DOM.minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`
    DOM.secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`

    DOM.timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`
    DOM.dateEl.innerHTML = `${DAYS[day]}, ${MONTHS[month]} <span class="circle">${date}</span>`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setInterval(setTime, 1000);

