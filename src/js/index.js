/*
Objetivo 1 - qunado cliocarmos na seta de avançar, temos que mostrar o próximo cartão da lista
    - passo 1 - dar um jeito de pegar o elemento HTML da seta avançar
    - passo 2 - dar um jeito de identificar o clique do usuário na seta avançar
    - passo 3 - fazer aparecer o próximo cartão da lista
    - passo 4 - buscar o cartão que esta selecionado e esconder
*/
const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
let cartaoAtual = 0;
const cartoes = document.querySelectorAll('.cartao');

function esconderCartaoSelecionado (){
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');
}

function mostrarCartao (){
    cartoes [cartaoAtual].classList.add('selecionado');
}

btnAvancar.addEventListener ('click', function (){
    if (cartaoAtual === cartoes.length - 1) return

    esconderCartaoSelecionado();

    cartaoAtual++;
    mostrarCartao(cartaoAtual);
});

btnVoltar.addEventListener ('click', function (){
    if (cartaoAtual === 0) return

    esconderCartaoSelecionado ();

    cartaoAtual--;
    mostrarCartao(cartaoAtual);
});
