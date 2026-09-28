const botaoAbrir = document.getElementById("abrirConvite");

const abertura = document.getElementById("abertura");
const cenaMar = document.getElementById("cenaMar");
const cenaMenina = document.getElementById("cenaMenina");
const informacoes = document.getElementById("informacoes");
const presentes = document.getElementById("presentes");
const confirmacao = document.getElementById("confirmacao");

const continuarParaMenina =
    document.getElementById("continuarParaMenina");

const continuarParaInformacoes =
    document.getElementById("continuarParaInformacoes");

const continuarParaPresentes =
    document.getElementById("continuarParaPresentes");

const continuarParaConfirmacao =
    document.getElementById("continuarParaConfirmacao");

const voltarInformacoes =
    document.getElementById("voltarInformacoes");

const voltarPresentes =
    document.getElementById("voltarPresentes");

const abrirLocalizacao =
    document.getElementById("abrirLocalizacao");


let conviteAberto = false;


/* =========================================================
   FUNÇÃO PARA ESCONDER TODAS AS TELAS
========================================================= */

function esconderTelas() {

    cenaMar.classList.remove("ativa");
    cenaMenina.classList.remove("ativa");
    informacoes.classList.remove("ativa");
    presentes.classList.remove("ativa");
    confirmacao.classList.remove("ativa");

}


/* =========================================================
   ABRIR O CONVITE
========================================================= */

botaoAbrir.addEventListener("click", () => {

    if (conviteAberto) {
        return;
    }

    conviteAberto = true;

    botaoAbrir.disabled = true;


    /*
     * O fundo do mar começa a aparecer
     * por trás da capa.
     */

    cenaMar.classList.add("ativa");


    /*
     * Pequeno zoom na capa.
     */

    setTimeout(() => {

        abertura.style.opacity = "0";
        abertura.style.transform = "scale(1.025)";

    }, 100);


    /*
     * Retiramos a capa depois
     * da animação.
     */

    setTimeout(() => {

        abertura.style.display = "none";

    }, 1400);


});


/* =========================================================
   FUNDO DO MAR → MENINA
========================================================= */

if (continuarParaMenina) {

    continuarParaMenina.addEventListener("click", () => {

        cenaMar.classList.remove("ativa");

        setTimeout(() => {

            cenaMenina.classList.add("ativa");

        }, 300);

    });

}


/* =========================================================
   MENINA → INFORMAÇÕES
========================================================= */

if (continuarParaInformacoes) {

    continuarParaInformacoes.addEventListener("click", () => {

        cenaMenina.classList.remove("ativa");

        setTimeout(() => {

            informacoes.classList.add("ativa");

        }, 300);

    });

}


/* =========================================================
   INFORMAÇÕES → PRESENTES
========================================================= */

if (continuarParaPresentes) {

    continuarParaPresentes.addEventListener("click", () => {

        informacoes.classList.remove("ativa");

        setTimeout(() => {

            presentes.classList.add("ativa");

        }, 300);

    });

}


/* =========================================================
   PRESENTES → CONFIRMAÇÃO
========================================================= */

if (continuarParaConfirmacao) {

    continuarParaConfirmacao.addEventListener("click", () => {

        presentes.classList.remove("ativa");

        setTimeout(() => {

            confirmacao.classList.add("ativa");

        }, 300);

    });

}


/* =========================================================
   PRESENTES → INFORMAÇÕES
========================================================= */

if (voltarInformacoes) {

    voltarInformacoes.addEventListener("click", () => {

        presentes.classList.remove("ativa");

        setTimeout(() => {

            informacoes.classList.add("ativa");

        }, 300);

    });

}


/* =========================================================
   CONFIRMAÇÃO → PRESENTES
========================================================= */

if (voltarPresentes) {

    voltarPresentes.addEventListener("click", () => {

        confirmacao.classList.remove("ativa");

        setTimeout(() => {

            presentes.classList.add("ativa");

        }, 300);

    });

}


/* =========================================================
   LOCALIZAÇÃO
========================================================= */

if (abrirLocalizacao) {

    abrirLocalizacao.addEventListener("click", () => {

        const endereco =
            "Associação de Moradores, Rua Oliveira Bueno, 850";

        const url =
            "https://www.google.com/maps/search/?api=1&query=" +
            encodeURIComponent(endereco);

        window.open(url, "_blank");

    });

}
