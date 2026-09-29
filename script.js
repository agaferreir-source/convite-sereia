/* ==========================================================
   CONVITE ANTONELLA
========================================================== */


/* ==========================================================
   LINKS
========================================================== */

const MAPS_URL =
    "https://maps.app.goo.gl/J9DJRDVVVrAqLymv9?g_st=ac";

const RSVP_URL = "https://wa.me/5521983793761?text=Ol%C3%A1!%20Gostaria%20de%20confirmar%20minha%20presen%C3%A7a%20na%20festa%20da%20Antonella!%F0%9F%A9%B7";



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


function limparTransicao() {

    transicao.className = "";

}



/* ==========================================================
   ESCOLHER TRANSIÇÃO
========================================================== */

function escolherTransicao(anterior, destino) {

    limparTransicao();


    /*
       1 → 2
       Abertura principal
    */

    if (
        anterior === 0 &&
        destino === 1
    ) {

        transicao.classList.add("tipo1");

    }


    /*
       2 → 3
       Luz perolada
    */

    else if (
        anterior === 1 &&
        destino === 2
    ) {

        transicao.classList.add("tipo2");

    }


    /*
       3 → 4
       Bolhas
    */

    else if (
        anterior === 2 &&
        destino === 3
    ) {

        transicao.classList.add("tipo3");

    }


    /*
       4 → 5
       Entrada delicada
    */

    else if (
        anterior === 3 &&
        destino === 4
    ) {

        transicao.classList.add("tipo4");

    }


    /*
       5 → 4
       Retorno
    */

    else if (
        anterior === 4 &&
        destino === 3
    ) {

        transicao.classList.add("tipo5");

    }


    void transicao.offsetWidth;

}



/* ==========================================================
   MUDAR DE TELA
========================================================== */

function mudarTela(novaTela) {

    if (trocando) {
        return;
    }

    if (
        novaTela < 0 ||
        novaTela >= telas.length
    ) {
        return;
    }

    if (novaTela === telaAtual) {
        return;
    }

    if (
        !telas[telaAtual] ||
        !telas[novaTela]
    ) {
        return;
    }


    trocando = true;


    const anterior = telaAtual;


    escolherTransicao(
        anterior,
        novaTela
    );


    /*
       A imagem nova entra
       depois que o efeito
       começou.
    */

    setTimeout(() => {

        telas[anterior]
            .classList
            .remove("ativa");

        telas[novaTela]
            .classList
            .add("ativa");

        telaAtual = novaTela;

    }, 430);


    /*
       Finaliza a transição.
    */

    setTimeout(() => {

        limparTransicao();

        trocando = false;

    }, 1150);

}



/* ==========================================================
   PRIMEIRO → SEGUNDO
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
   SEGUNDO → TERCEIRO
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
   TERCEIRO → QUARTO
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
   QUARTO → QUINTA
========================================================== */

const botaoPresentes =
    document.getElementById(
        "botaoPresentes"
    );


if (botaoPresentes) {

    botaoPresentes.addEventListener(
        "click",
        function(event) {

            event.preventDefault();
            event.stopPropagation();

            mudarTela(4);

        }
    );

}



/* ==========================================================
   LOCALIZAÇÃO
========================================================== */

const botaoLocal =
    document.getElementById(
        "botaoLocal"
    );


if (botaoLocal) {

    botaoLocal.addEventListener(
        "click",
        function(event) {

            event.preventDefault();
            event.stopPropagation();

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
    document.getElementById(
        "botaoConfirmar"
    );

const avisoConfirmacao =
    document.getElementById(
        "avisoConfirmacao"
    );


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

                avisoConfirmacao
                    .classList
                    .add("aberto");

            }

        }
    );

}



/* ==========================================================
   FECHAR AVISO
========================================================== */

const fecharAviso =
    document.getElementById(
        "fecharAviso"
    );


if (fecharAviso) {

    fecharAviso.addEventListener(
        "click",
        function() {

            avisoConfirmacao
                .classList
                .remove("aberto");

        }
    );

}



/* ==========================================================
   QUINTA → QUARTA
========================================================== */

const voltarPresentes =
    document.getElementById(
        "voltarPresentes"
    );


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
   PRÉ-CARREGAR IMAGENS
========================================================== */

const imagens = [
    "Primeiro.png",
    "Segundo.png",
    "Terceiro.png",
    "Quarto.png",
    "Quinta.jpg"
];


imagens.forEach(
    function(caminho) {

        const imagem =
            new Image();

        imagem.src = caminho;

    }
);



/* ==========================================================
   TELA INICIAL
========================================================== */

telas.forEach(
    function(tela, indice) {

        if (!tela) {
            return;
        }

        if (indice === 0) {

            tela.classList.add("ativa");

        } else {

            tela.classList.remove("ativa");

        }

    }
);
