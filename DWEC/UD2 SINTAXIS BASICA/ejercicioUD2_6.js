

for (let i=1; i <=500; i++){
    //document.write(i);

    //compruebo multiplo de 4 o 9
    switch (true){
        case ((i % 4) == 0) : document.write(i + "Múltiplo de 4" + "<br>");
        break;
        case ((i % 9) == 0) : document.write(i + "Múltiplo de 9" + "<br>");
        break;
        case ((i % 5) == 0) : document.write("<hr>" + "<br>");
        break;
        default : document.write(i + "<br>");
    }
    


}