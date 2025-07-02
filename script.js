//Trocar imagens de produtos do site no home

const imagens = ["media/cardapio/bolo.webp", "media/cardapio/cha.jpg", "media/cardapio/empada.jpg", "media/cardapio/Cappuccino.jpg","media/cardapio/folhado.webp", "media/cardapio/mocaccino.jpg", "media/cardapio/pastel.jpg", "media/cardapio/kombucha.webp", "media/cardapio/sanduiche.webp", "media/cardapio/expresso.avif"];

const produtos = ["Bolo", "Chá", "Empada", "Capuccino", "Folhado", "Mocaccino", "Pastel", "Kombucha", "Sanduiche", "Expresso"]

let indAtual = 0;

let indAtualP = 0;

const img = document.getElementById('img-cardapio');

const nome = document.getElementById('nome-produto');

function voltaImg() {
    indAtual = (indAtual - 1 + imagens.length) % imagens.length;
    img.src = imagens[indAtual];

    indAtualP = (indAtualP - 1 + produtos.length) % produtos.length;
    nome.innerHTML = produtos[indAtualP];
}

function avancaImg() {
    indAtual = (indAtual + 1) % imagens.length;
    img.src = imagens[indAtual];

    indAtualP = (indAtualP + 1) % produtos.length;
    nome.innerHTML = produtos[indAtualP];
}



function mudaTema(){

    const resposta = confirm('Desejar aplicar outro tema?');

    if(resposta == true){
        alert('Tema aplicado!')

        const corFundo1 = document.getElementById('interface1');
        const corFundo2 = document.getElementById('interface2');
        const corFundo3 = document.getElementById('interface3');
        const corFundo4 = document.getElementById('interface4');
        const corFundo5 = document.getElementById('interface5');
        const corFundo6 = document.getElementById('itens-cardapio');
        const corFundo7 = document.getElementById('interface6');


        const header = document.getElementById('header');
        const main = document.getElementById('main');
        
        corFundo1.classList.toggle('tema-alt1');
        corFundo2.classList.toggle('tema-alt2');
        corFundo3.classList.toggle('tema-alt1');
        corFundo4.classList.toggle('tema-alt2');
        corFundo5.classList.toggle('tema-alt1');
        corFundo6.classList.toggle('tema-alt2');
        corFundo7.classList.toggle('tema-alt1');

        header.classList.toggle('tema-alt1');
        main.classList.toggle('tema-alt1');
    } else {
        alert('De volta ao original!')
    }

}

