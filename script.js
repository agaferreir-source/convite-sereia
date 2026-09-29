/* =========================================================
   CONVITE ANTONELLA
   ========================================================= */


/* =========================================================
   LINKS
   ========================================================= */

const MAPS_URL =
    "https://maps.app.goo.gl/J9DJRDVVVrAqLymv9?g_st=ac";


/*
   Por enquanto a sugestão de presentes
   é a imagem Quinta.jpg.

   Se depois você quiser trocar por um link,
   basta substituir o conteúdo desta variável.
*/

const PRESENTES_URL = "Quinta.jpg";


/*
   Quando você tiver o WhatsApp/link de confirmação,
   coloque aqui.

   Exemplo:
   const RSVP_URL = "https://wa.me/5521XXXXXXXXX";
*/

const RSVP_URL = "";


/* =========================================================
   ELEMENTOS
   ========================================================= */

const telas = [
    document.getElementById("tela1"),
    document.getElementById("tela2"),
    document.getElementById("tela3"),
    document.getElementById("tela4")
].filter(Boolean);


const transicao =
    document.getElementById("transicao");


let telaAtual = 0;
let trocando = false;


/* =========================================================
   CRIA A ANIMAÇÃO DA TRANSIÇÃO
   ========================================================= */

function prepararTransicao() {

    if (!transicao) {
        return;
    }

    /*
       Não depende de você adicionar
       vários elementos no HTML.
    */

    transicao.innerHTML = `
        <div class="onda-agua"></div>

        <div class="reflexo reflexo-1"></div>
        <div class="reflexo reflexo-2"></div>

        <div class="bolha-transicao"></div>
        <div class="bolha-transicao"></div>
        <div class="bolha-transicao"></div>
        <div class="bolha-transicao"></div>
        <div class="bolha-transicao"></div>
        <div class="bolha-transicao"></div>

        <div class="brilho-transicao"></div>
        <div class="brilho-transicao"></div>
        <div class="brilho-transicao"></div>
        <div class="brilho-transicao"></div>
    `;
}

prepararTransicao();


/* =========================================================
   REINICIA A ANIMAÇÃO DA TRANSIÇÃO
   ========================================================= */

function reiniciarTransicao() {

    if (!transicao) {
        return;
    }

    transicao.classList.remove("ativa");

    /*
       Força o navegador a reiniciar
       as animações CSS.
    */

    void transicao.offsetWidth;

    transicao.classList.add("ativa");
}


/* =========================================================
   TROCAR DE TELA
   ========================================================= */

function mudarTela(proximaTela) {

    if (trocando) {
        return;
    }

    if (!telas[proximaTela]) {
        return;
    }

    if (proximaTela === telaAtual) {
        return;
    }


    trocando = true;


    /* Começa o efeito de água */

    reiniciarTransicao();


    /*
       A luz/água passa primeiro.
       Depois trocamos a imagem.
    */

    setTimeout(() => {

        if (telas[telaAtual]) {

            telas[telaAtual]
                .classList
                .remove("ativa");

            telas[telaAtual]
                .classList
                .remove("entrando");
        }


        telaAtual = proximaTela;


        telas[telaAtual]
            .classList
            .add("ativa");


        /*
           Reinicia a animação de entrada.
        */

        void telas[telaAtual].offsetWidth;


        telas[telaAtual]
            .classList
            .add("entrando");


    }, 520);


    /*
       Finaliza a transição.
    */

    setTimeout(() => {

        if (transicao) {
            transicao.classList.remove("ativa");
        }

        trocando = false;

    }, 1500);
}


/* =========================================================
   PRIMEIRA TELA → SEGUNDA
   ========================================================= */

const abrirConvite =
    document.getElementById("abrirConvite");


if (abrirConvite) {

    abrirConvite.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            mudarTela(1);

        }
    );
}


/* =========================================================
   SEGUNDA TELA → TERCEIRA
   ========================================================= */

const irTela3 =
    document.getElementById("irTela3");


if (irTela3) {

    irTela3.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            mudarTela(2);

        }
    );
}


/* =========================================================
   TERCEIRA TELA → QUARTA
   ========================================================= */

const irTela4 =
    document.getElementById("irTela4");


if (irTela4) {

    irTela4.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            mudarTela(3);

        }
    );
}


/* =========================================================
   LOCALIZAÇÃO
   ========================================================= */

const botaoLocal =
    document.getElementById("botaoLocal");


if (botaoLocal) {

    botaoLocal.addEventListener(
        "click",
        function (event) {

            event.preventDefault();
            event.stopPropagation();


            if (!MAPS_URL) {
                return;
            }


            window.open(
                MAPS_URL,
                "_blank",
                "noopener,noreferrer"
            );

        }
    );
}


/* =========================================================
   SUGESTÃO DE PRESENTES
   ========================================================= */

const botaoPresentes =
    document.getElementById("botaoPresentes");


const modalPresentes =
    document.getElementById("modalPresentes");


if (botaoPresentes) {

    botaoPresentes.addEventListener(
        "click",
        function (event) {

            event.preventDefault();
            event.stopPropagation();


            /*
               Se existir modal no HTML,
               usamos o modal.
            */

            if (modalPresentes) {

                modalPresentes
                    .classList
                    .add("aberto");

                return;
            }


            /*
               Caso o modal não exista,
               abre a imagem diretamente.
            */

            if (PRESENTES_URL) {

                window.open(
                    PRESENTES_URL,
                    "_blank",
                    "noopener,noreferrer"
                );

            }

        }
    );
}


/* =========================================================
   FECHAR MODAL DE PRESENTES
   ========================================================= */

const fecharPresentes =
    document.getElementById("fecharPresentes");


if (fecharPresentes && modalPresentes) {

    fecharPresentes.addEventListener(
        "click",
        function (event) {

            event.preventDefault();
            event.stopPropagation();

            modalPresentes
                .classList
                .remove("aberto");

        }
    );
}


/* =========================================================
   CLICAR FORA DA IMAGEM PARA FECHAR
   ========================================================= */

if (modalPresentes) {

    modalPresentes.addEventListener(
        "click",
        function (event) {

            if (
                event.target === modalPresentes
            ) {

                modalPresentes
                    .classList
                    .remove("aberto");

            }

        }
    );
}


/* =========================================================
   CONFIRMAR PRESENÇA
   ========================================================= */

const botaoRsvp =
    document.getElementById("botaoRsvp");


if (botaoRsvp) {

    botaoRsvp.addEventListener(
        "click",
        function (event) {

            event.preventDefault();
            event.stopPropagation();


            /*
               Ainda não colocamos o número/link.
            */

            if (!RSVP_URL) {

                alert(
                    "O link para confirmar presença ainda não foi configurado. 💗"
                );

                return;
            }


            window.open(
                RSVP_URL,
                "_blank",
                "noopener,noreferrer"
            );

        }
    );
}


/* =========================================================
   GARANTE QUE A PRIMEIRA TELA COMECE VISÍVEL
   ========================================================= */

if (telas.length > 0) {

    telas.forEach(
        function (tela, index) {

            tela.classList.remove("ativa");
            tela.classList.remove("entrando");

        }
    );


    telas[0].classList.add("ativa");

    /*
       Pequeno atraso para a animação inicial
       não acontecer antes da página carregar.
    */

    requestAnimationFrame(() => {

        telas[0].classList.add("entrando");

    });
}
