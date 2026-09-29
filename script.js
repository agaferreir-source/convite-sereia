// ============================================
// LINKS
// ============================================

const MAPS_URL =
  "https://maps.app.goo.gl/J9DJRDVVVrAqLymv9?g_st=ac";

const PRESENTES_URL = "Quinta.jpg";

// Vamos colocar depois.
const RSVP_URL = "";


// ============================================
// TELAS
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


// ============================================
// TROCAR DE TELA
// ============================================

function mudarTela(proximaTela) {

  if (proximaTela === telaAtual) {
    return;
  }

  // Começa o efeito de mergulho
  transicao.classList.add("ativa");


  // Pequeno intervalo para o efeito aparecer
  setTimeout(() => {

    telas[telaAtual].classList.remove("ativa");

    telas[proximaTela].classList.add("ativa");

    telaAtual = proximaTela;

  }, 450);


  // Retira o efeito depois da troca
  setTimeout(() => {

    transicao.classList.remove("ativa");

  }, 1050);

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


// ============================================
// FECHAR CLICANDO FORA DA IMAGEM
// ============================================

modalPresentes.addEventListener("click", (event) => {

  if (event.target === modalPresentes) {

    modalPresentes.classList.remove("aberto");

  }

});


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
