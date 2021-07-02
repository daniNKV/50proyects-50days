const $progreso = document.getElementById('progreso');
const $prevBtn = document.getElementById('prev');
const $nextBtn = document.getElementById('next');
const $circles = document.querySelectorAll('.circle');

let activoActual = 1 ;

$nextBtn.addEventListener('click', () => {
    activoActual++

    if (activoActual > $circles.length) {
        activoActual = $circles.length;
    }
    update()

})

$prevBtn.addEventListener('click', () => {
    activoActual--;

    if (activoActual < 1) {
        activoActual = 1;
    }
    update()
})

function update() {
    $circles.forEach((circle,index) => {
        if(index < activoActual) {
            circle.classList.add('activo')
        }
        else {
            circle.classList.remove('activo');
        }
    })

    const activos = document.querySelectorAll('.activo')

    $progreso.style.width = (activos.length - 1) / ($circles.length - 1) * 100 + '%';

    if (activoActual == 1) {
        $prevBtn.disabled = true;
    } else if (activoActual === $circles.length) {
        $nextBtn.disabled = true;
    } else {
        $prevBtn.disabled = false;
        $nextBtn.disabled = false;
    }
}