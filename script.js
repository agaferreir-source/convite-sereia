/* ==========================================================
   CONVITE ANTONELLA
========================================================== */


/* ==========================================================
   CONFIGURAÇÕES
========================================================== */

const MAPS_URL =
    "https://maps.app.goo.gl/J9DJRDVVVrAqLymv9?g_st=ac";


/*
   Quando você tiver o número/link da confirmação,
   colocaremos aqui.
*/

const RSVP_URL = "";



/* ==========================================================
   TELAS
========================================================== */

const telas = [
    document.getElementById("tela1"),
    document.getElementById("tela2"),
    document.getElementById("tela3"),
    document.getElementById("tela4"),
    document.getElementById("tela5")
];


let telaAtual = 0;

let trocando = false;



/* ==========================================================
   TRANSIÇÃO
========================================================== */

const transicao =
    document.getElementById("transicao");


function iniciarTransicao() {

    if (!transicao) {
        return;
    }

    transicao.classList.remove("ativa");

    /*
       Força o navegador a reiniciar
       a animação.
    */

    void transicao.offsetWidth;

    transicao.classList.add("ativa");
}


function finalizarTransicao() {

    if (!transicao) {
        return;
    }

    transicao.classList.remove("ativa");
}



/* ==========================================================
   MUDAR DE TELA
========================================================== */

function mudarTela(novaTela) {

    console.log(
        "Mudando da tela",
        telaAtual + 1,
        "para",
        novaTela + 1
    );


    if (novaTela < 0 || novaTela >= telas.length) {
        return;
    }


    if (novaTela === telaAtual) {
        return;
    }


    if (trocando) {
        return;
    }


    trocando = true;


    /*
       Inicia o efeito de água.
    */

    iniciarTransicao();


    /*
       Depois de um pequeno momento,
       troca realmente a imagem.
    */

    setTimeout(function() {

        telas[telaAtual].classList.remove("ativa");

        telas[novaTela].classList.add("ativa");

        telaAtual = novaTela;

    }, 430);


    /*
       Termina a transição.
    */

    setTimeout(function() {

        finalizarTransicao();

        trocando = false;

    }, 1200);

}



/* ==========================================================
   PRIMEIRA TELA
   LACRE → SEGUNDA
========================================================== */

const abrirConvite =
    document.getElementById("abrirConvite");


if (abrirConvite) {

    abrirConvite.addEventListener(
        "click",
        function(event) {

            event.preventDefault();

            event.stopPropagation();

            mudarTela(1);

        }
    );

}



/* ==========================================================
   SEGUNDA → TERCEIRA
========================================================== */

const tela2 =
    document.getElementById("tela2");


if (tela2) {

    tela2.addEventListener(
        "click",
        function(event) {

            event.preventDefault();

            mudarTela(2);

        }
    );

}



/* ==========================================================
   TERCEIRA → QUARTA
========================================================== */

const tela3 =
    document.getElementById("tela3");


if (tela3) {

    tela3.addEventListener(
        "click",
        function(event) {

            event.preventDefault();

            mudarTela(3);

        }
    );

}



/* ==========================================================
   QUARTA → QUINTA
   SUGESTÃO DE PRESENTES
========================================================== */

const botaoPresentes =
    document.getElementById("botaoPresentes");


if (botaoPresentes) {

    botaoPresentes.addEventListener(
        "click",
        function(event) {

            event.preventDefault();

            event.stopPropagation();

            console.log(
                "Botão de presentes clicado!"
            );

            /*
               Vai DIRETAMENTE para Quinta.png/jpg.
            */

            mudarTela(4);

        }
    );

}



/* ==========================================================
   LOCALIZAÇÃO
========================================================== */

const botaoLocal =
    document.getElementById("botaoLocal");


if (botaoLocal) {

    botaoLocal.addEventListener(
        "click",
        function(event) {

            event.preventDefault();

            event.stopPropagation();


            console.log(
                "Localização clicada!"
            );


            if (MAPS_URL) {

                window.open(
                    MAPS_URL,
                    "_blank"
                );

            }

        }
    );

}



/* ==========================================================
   CONFIRMAÇÃO
========================================================== */

const botaoConfirmar =
    document.getElementById("botaoConfirmar");


const avisoConfirmacao =
    document.getElementById("avisoConfirmacao");


if (botaoConfirmar) {

    botaoConfirmar.addEventListener(
        "click",
        function(event) {

            event.preventDefault();

            event.stopPropagation();


            if (RSVP_URL) {

                window.open(
                    RSVP_URL,
                    "_blank"
                );

                return;
            }


            if (avisoConfirmacao) {

                avisoConfirmacao.classList.add(
                    "aberto"
                );

            }

        }
    );

}



/* ==========================================================
   FECHAR AVISO
========================================================== */

const fecharAviso =
    document.getElementById("fecharAviso");


if (fecharAviso) {

    fecharAviso.addEventListener(
        "click",
        function() {

            avisoConfirmacao.classList.remove(
                "aberto"
            );

        }
    );

}



/* ==========================================================
   VOLTAR DA QUINTA
========================================================== */

const voltarPresentes =
    document.getElementById("voltarPresentes");


if (voltarPresentes) {

    voltarPresentes.addEventListener(
        "click",
        function(event) {

            event.preventDefault();

            event.stopPropagation();

            mudarTela(3);

        }
    );

}



/* ==========================================================
   PRÉ-CARREGAMENTO
========================================================== */

const imagens = [

    "Primeiro.png",
    "Segundo.png",
    "Terceiro.png",
    "Quarto.png",
    "Quinta.jpg"

];


imagens.forEach(function(caminho) {

    const img = new Image();

    img.src = caminho;

});



/* ==========================================================
   GARANTIR PRIMEIRA TELA
========================================================== */

telas.forEach(function(tela, indice) {

    if (!tela) {
        return;
    }


    if (indice === 0) {

        tela.classList.add("ativa");

    } else {

        tela.classList.remove("ativa");

    }

});
