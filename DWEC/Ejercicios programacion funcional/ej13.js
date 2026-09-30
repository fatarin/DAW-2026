// enconrar primer libor que trate sobre IA (si alguna de sus etiquetas incluye 'IA' o 'AI')

const biblioteca = [
{ titulo: 'Don Quijote', tags: ['clásico', 'novela', 'españa'] },
{ titulo: 'Algoritmos del Futuro', tags: ['programación', 'AI', 'computación'] },
{ titulo: 'Aprende JS', tags: ['web', 'javascript', 'programación', 'IA'] }
];

// esta opcion muestra todos los libros que cumplen condicion
/* biblioteca.forEach((el, indice) => {
   
    if (el.tags.some((x) => x =='AI' || x =='IA')){
       console.log('El libro ' + el.titulo + 'trata de IA');
       
    } 
           
    
}); */

//esta opción muestra solo primer libro

const filtradoBiblioteca = biblioteca.filter((el)=> el.tags.some((x) => x =='AI' || x =='IA'));
console.log('El libro ' + filtradoBiblioteca[0].titulo + ' trata de IA');