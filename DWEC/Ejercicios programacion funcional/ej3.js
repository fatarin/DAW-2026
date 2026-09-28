const comentarios = [
{ id: 101, texto: 'Me encanta este post' },
{ id: 102, texto: 'Le daría una bofetada al autor' },
{ id: 103, texto: 'Buen contenido, gracias' }
];



comentarios.forEach((x, indice) => {
    if (x.texto.indexOf('bofetada') > 0) {
        console.log('la palabra prohibida aparece en el indice: ' + indice);
        
    };
});





