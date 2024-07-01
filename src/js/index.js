
const itens = document.querySelectorAll('.item');
const botao = document.querySelector('.btn-enviar');
const textos = document.querySelectorAll(".texto")


itens.forEach(input => {

    botao.addEventListener('click', () => {

        if (input.value === "") {

            input.classList.add('campo-obrigatorio-nao-preenchido');

            textos.forEach(textos => {
                textos.classList.add('texto-obrigatorio');
            });

        } else if (input.value !== '') {

            input.classList.add('campo-obrigatorio-preenchido');
            textos.classList.remove('texto-obrigatorio');

        }

    });
});





























