// As "chaves" de criptografia que utilizaremos são:
// A letra "a" é convertida para "ai"
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"


// Selecionando os elementos do DOM
const textoInput = document.querySelector('.conteudo-principal-escrito-areatexto');
const areaOutput = document.querySelector('.conteudo-secundario-areatexto');
const mensagemRetirada = document.querySelector('.conteudo-secundario-mensagem');
const imagemFundoRetirada = document.querySelector('.conteudo-secundario-areatexto'); // Selecionando esta área apenas para podermos retirar a sua imagem de fundo posteriormente

// Função para remover acentos, caso digitemos alguma palavra com acento
function removerAcentos(texto) {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}

// Função para criptografar o texto
function criptografar() {
    const texto = removerAcentos(textoInput.value.toLowerCase()); // Remove acentos e converte para minúsculas
    const resultadoCriptografado = texto
        .replace(/a/g, "a")
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    areaOutput.value = resultadoCriptografado;
    mensagemRetirada.style.display = 'none'; // Oculta a mensagem de texto
    imagemFundoRetirada.style.backgroundImage = 'none'; // Remove a imagem de fundo
    textoInput.value = ''; // Limpa a área de entrada de texto
}

// Função para descriptografar o texto
function descriptografar() {
    const texto = removerAcentos(textoInput.value.toLowerCase()); // Remove acentos e converte para minúsculas
    const resultadoDescriptografado = texto
        .replace(/a/g, "a")
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    areaOutput.value = resultadoDescriptografado;
    mensagemRetirada.style.display = 'none'; // Oculta a mensagem de texto
    imagemFundoRetirada.style.backgroundImage = 'none'; // Remove a imagem de fundo
    textoInput.value = ''; // Limpa a área de entrada de texto
}

// Função para copiar o texto para a área de transferência
function copiar() {
    navigator.clipboard.writeText(areaOutput.value)
        .then(() => {
            areaOutput.value = 'Nenhuma mensagem'; // Define a mensagem 'Nenhuma mensagem' após copiar
        })
        .catch(err => {
            console.error('Falha ao copiar o texto: ', err);
        });
}


