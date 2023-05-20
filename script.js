// script.js

// Função executada quando o botão é clicado
function myFunction() {
  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var mensagem = document.getElementById("mensagem").value;

  // Exemplo de validação simples
  if (nome === "" || email === "" || mensagem === "") {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  // Exemplo de exibição dos dados inseridos
  alert("Nome: " + nome + "\nEmail: " + email + "\nMensagem: " + mensagem);
}

// Evento de envio do formulário
document.getElementById("form-contato").addEventListener("submit", function(event) {
  event.preventDefault(); // Impede o envio do formulário

  // Chama a função myFunction() quando o formulário é enviado
  myFunction();
});
