document.addEventListener('DOMContentLoaded', function() {
    const btnCripto = document.getElementById('btn-cripto');
    const btnDescripto = document.getElementById('btn-descripto');
    const btnCopy = document.getElementById('btn-copy');
    const inputTexto = document.getElementById('input-texto');
    const msgInput = document.getElementById('msg');

    btnCripto.addEventListener('click', function(event) {
        event.preventDefault();
        const textoOriginal = inputTexto.value;
        const textoCriptografado = criptografar(textoOriginal);
        msgInput.value = textoCriptografado;
    });

    btnDescripto.addEventListener('click', function(event) {
        event.preventDefault();
        const textoCriptografado = inputTexto.value;
        const textoDescriptografado = descriptografar(textoCriptografado);
        msgInput.value = textoDescriptografado;
    });

    btnCopy.addEventListener('click', function(event) {
        event.preventDefault();
        msgInput.select();
        document.execCommand('copy');
        alert('Texto copiado para a área de transferência!');
    });

    function criptografar(texto) {
        return texto.replace(/e/g, 'enter')
                    .replace(/i/g, 'imes')
                    .replace(/a/g, 'ai')
                    .replace(/o/g, 'ober')
                    .replace(/u/g, 'ufat');
    }

    function descriptografar(texto) {
        return texto.replace(/enter/g, 'e')
                    .replace(/imes/g, 'i')
                    .replace(/ai/g, 'a')
                    .replace(/ober/g, 'o')
                    .replace(/ufat/g, 'u');
    }
});