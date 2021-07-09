

const $btn = document.querySelectorAll('.faq-toggle')

$btn.forEach(button => {
    button.addEventListener('click', (e) => {
        button.parentNode.classList.toggle('active');
    })
})

/*    boton.addEventListener( (e) => {
        console.log('click')
        e.target.parentNode.classList.toggle('active');
    }) */