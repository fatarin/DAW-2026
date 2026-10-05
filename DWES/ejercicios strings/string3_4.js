//extraer de un texto la cadena entre ()

const texto = prompt('Introduce un texto: ');

//encontramos (
let parentesis1 = texto.indexOf('(') + 1;
console.log(parentesis1);

//encontramos )
let parentesis2 = texto.indexOf(')');
console.log(parentesis2);

//extraemos y mostramos por pantlla
const extraerTexto = (texto, it1, it2) =>{
    let extraccion;
if(it1){
    //comprobar si existe parentesis2
    if(it2){
        extraccion = texto.slice(it1, it2);
    }else  extraccion = texto.slice(it1);
}else extraccion = '';

return extraccion;
}

document.write('El texto entre paréntesis es: ' + extraerTexto(texto,parentesis1, parentesis2));