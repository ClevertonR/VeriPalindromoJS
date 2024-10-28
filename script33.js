document.getElementById('verificar').addEventListener('click', function() {
    const texto = document.getElementById('texto').value;
    const resultado = document.getElementById('resultado');
 
    // Remove espaços e converte para minúsculas
    const textoLimpo = texto.replace(/[\W_]/g, '').toLowerCase();
    const textoInvertido = textoLimpo.split('').reverse().join('');
 
    if (textoLimpo === textoInvertido) {
        resultado.textContent = `"${texto}" é um palíndromo!`;
    } else {
        resultado.textContent = `"${texto}" não é um palíndromo.`;
    }
});