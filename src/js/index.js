
const itens = document.querySelectorAll('.item');
const botao = document.querySelector('.btn-enviar');
const textos = document.querySelectorAll(".texto")




botao.addEventListener('click', (e) => {
    e.preventDefault()
    itens.forEach(input => {
        if (input.value) {

            input.classList.add('campo-obrigatorio-preenchido');
            input.nextElementSibling.classList.remove('campo-obrigatorio-nao-preenchido')
            // textos.forEach(textos => {
            //     textos.classList.add('texto-obrigatorio');
            // });

        } else {

            input.classList.remove('campo-obrigatorio-preenchido')
            input.classList.add('campo-obrigatorio-nao-preenchido')
            input.classList.add('texto-obrigatorio ')
            // textos.forEach(textos => {
            //     textos.classList.remove('texto-obrigatorio');
            // });
        }

    });
});






























