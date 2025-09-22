let fonteAtual = 16;

function aumentarFonte() {
  fonteAtual += 2;
  document.body.style.fontSize = fonteAtual + "px";
}

function diminuirFonte() {
  if (fonteAtual > 10) {
    fonteAtual -= 2;
    document.body.style.fontSize = fonteAtual + "px";
  }
}

function alternarContraste() {
  document.body.classList.toggle("alto-contraste");
}

function resetar() {
  fonteAtual = 16;
  document.body.style.fontSize = fonteAtual + "px";
  document.body.classList.remove("alto-contraste");
}
