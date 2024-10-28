OBJETIVO:
Valdiar texto digitado por usuário se o mesmo é um palindromo ou não.
Formula de validação:




Adicionar um ouvinte de evento ao botão “verificar”:
JavaScript

document.getElementById('verificar').addEventListener('click', function() {
Código gerado por IA. Examine e use com cuidado. Mais informações em perguntas frequentes.
document.getElementById(‘verificar’): Seleciona o botão com o ID “verificar”.
addEventListener(‘click’, function() {…}): Adiciona um ouvinte de evento que executa a função quando o botão é clicado.
Obter o valor do campo de texto:
JavaScript

const texto = document.getElementById('texto').value;
Código gerado por IA. Examine e use com cuidado. Mais informações em perguntas frequentes.
document.getElementById(‘texto’): Seleciona o campo de entrada de texto com o ID “texto”.
.value: Obtém o valor digitado no campo de texto e o armazena na variável texto.
Selecionar o elemento onde o resultado será exibido:
JavaScript

const resultado = document.getElementById('resultado');
Código gerado por IA. Examine e use com cuidado. Mais informações em perguntas frequentes.
document.getElementById(‘resultado’): Seleciona o parágrafo com o ID “resultado” onde a mensagem será exibida.
Limpar o texto e prepará-lo para verificação:
JavaScript

const textoLimpo = texto.replace(/[\W_]/g, '').toLowerCase();
Código gerado por IA. Examine e use com cuidado. Mais informações em perguntas frequentes.
texto.replace(/[\W_]/g, ‘’): Remove todos os caracteres não alfanuméricos (como espaços e pontuação) do texto.
.toLowerCase(): Converte o texto para letras minúsculas para garantir que a verificação não seja sensível a maiúsculas/minúsculas.
Inverter o texto limpo:
JavaScript

const textoInvertido = textoLimpo.split('').reverse().join('');
Código gerado por IA. Examine e use com cuidado. Mais informações em perguntas frequentes.
textoLimpo.split(‘’): Divide o texto limpo em um array de caracteres.
.reverse(): Inverte a ordem dos caracteres no array.
.join(‘’): Junta os caracteres invertidos de volta em uma string.
Comparar o texto limpo com o texto invertido:
JavaScript

if (textoLimpo === textoInvertido) {
    resultado.textContent = `"${texto}" é um palíndromo!`;
} else {
    resultado.textContent = `"${texto}" não é um palíndromo.`;
}
Código gerado por IA. Examine e use com cuidado. Mais informações em perguntas frequentes.
if (textoLimpo === textoInvertido): Verifica se o texto limpo é igual ao texto invertido.
resultado.textContent: Define o conteúdo de texto do elemento resultado com a mensagem apropriada.
Resumo
O código adiciona um ouvinte de evento ao botão “verificar”.
Quando o botão é clicado, ele obtém o texto digitado, limpa e inverte o texto.
Em seguida, compara o texto limpo com o texto invertido para verificar se é um palíndromo e exibe o resultado.
<a><a><a><a>

CLICK <tr><td> (Verifica Palindromo) 👉 :</td><td> <a href="https://clevertonr.github.io/VeriPalindromoJS/palindromo.html"> 💾</a>   </td></tr>
