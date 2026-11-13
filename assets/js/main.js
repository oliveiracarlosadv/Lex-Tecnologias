// Lex Tecnologias — menu no celular e ano do rodapé
(function () {
  var botao = document.querySelector('.botao-menu');
  var menu = document.getElementById('menu');
  if (botao && menu) {
    botao.addEventListener('click', function () {
      var aberto = menu.classList.toggle('aberto');
      botao.setAttribute('aria-expanded', aberto ? 'true' : 'false');
    });
  }
  var ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();
})();
