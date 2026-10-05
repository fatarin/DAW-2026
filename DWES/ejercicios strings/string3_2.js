
//recoger un texto y mostrarlo separados por -

const texto = prompt('Introduce un texto: ');

const textoModificado = Array.from(texto).join('-');
document.write(textoModificado);

