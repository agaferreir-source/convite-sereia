// ============================================
// LINKS
// ============================================

const MAPS_URL =
  "https://maps.app.goo.gl/J9DJRDVVVrAqLymv9?g_st=ac";

const PRESENTES_URL = "Quinta.jpg";

const RSVP_URL = "";


// ============================================
// ELEMENTOS
// ============================================

const telas = [
  document.getElementById("tela1"),
  document.getElementById("tela2"),
  document.getElementById("tela3"),
  document.getElementById("tela4")
];

const transicao =
  document.getElementById("transicao");

let telaAtual = 0;
let trocando = false;


// ============================================
// TROCA DE TELA
// ============================================

function mudarTela(proximaTela) {

  if (trocando || proximaTela === telaAtual) {
    return;
  }

  trocando = true;


  // Começa a passagem de luz/água
  transicao.classList.add("ativa");


  /*
    Esperamos a luz passar pelo centro
    antes de trocar a imagem.
  */

  setTimeout(() => {

    telas[telaAtual].classList.remove("ativa");

    telas[telaAtual].classList.remove("entrando");


    telas[proximaTela].classList.add("ativa");

    telas[proximaTela].classList.add("entrando");

    telaAtual = proximaTela;

  }, 500);


  /*
    Retira a camada da transição
    depois que a nova imagem já entrou.
  */

  setTimeout(() => {

    transicao.classList.remove("ativa");

    trocando = false;

  }, 1150);

}


// ============================================
// PRIMEIRO → SEGUNDO
// ============================================

document
  .getElementById("abrirConvite")
  .addEventListener("click", () => {

    mudarTela(1);

  });


// ============================================
// SEGUNDO → TERCEIRO
// ============================================

document
  .getElementById("irTela3")
  .addEventListener("click", () => {

    mudarTela(2);

  });


// ============================================
// TERCEIRO → QUARTO
// ============================================

document
  .getElementById("irTela4")
  .addEventListener("click", () => {

    mudarTela(3);

  });


// ============================================
// LOCALIZAÇÃO
// ============================================

document
  .getElementById("botaoLocal")
  .addEventListener("click", () => {

    if (!MAPS_URL) {
      return;
    }

    window.open(
      MAPS_URL,
      "_blank",
      "noopener,noreferrer"
    );

  });


// ============================================
// SUGESTÃO DE PRESENTES
// ============================================

const modalPresentes =
  document.getElementById("modalPresentes");


document
  .getElementById("botaoPresentes")
  .addEventListener("click", () => {

    modalPresentes.classList.add("aberto");

  });


// ============================================
// FECHAR PRESENTES
// ============================================

document
  .getElementById("fecharPresentes")
  .addEventListener("click", () => {

    modalPresentes.classList.remove("aberto");

  });


modalPresentes.addEventListener(
  "click",
  (event) => {

    if (event.target === modalPresentes) {

      modalPresentes.classList.remove("aberto");

    }

  }
);


// ============================================
// CONFIRMAR PRESENÇA
// ============================================

document
  .getElementById("botaoRsvp")
  .addEventListener("click", () => {

    if (!RSVP_URL) {

      alert(
        "A confirmação de presença será configurada em breve. 💗"
      );

      return;
    }

    window.open(
      RSVP_URL,
      "_blank",
      "noopener,noreferrer"
    );

  });
