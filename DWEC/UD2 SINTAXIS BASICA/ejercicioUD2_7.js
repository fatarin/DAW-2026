
//pido filas y columnas
let nFilas = prompt("dime filas:");
let nColumnas = prompt("dime filas:");

//calculo numeros a mostrar

let total = nFilas * nColumnas;

document.write("<table>");

for (let i = 1; i <= nFilas; i++){

    //dibujo filas
    document.write("<tr>");


    for(let j = 1; j <=nColumnas; j++){
        //dibujo columnas
        document.write("<td>" + total + "</td>");
        total -= 1;
    }

    document.write("</tr>");



}

document.write("</table>");