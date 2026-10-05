const quininela = 14;

const resultados = Array.from({length: quininela}, (item, index) =>  {
    let res;
    let opcion = Math.floor(Math.random() * 3 + 1);
    switch (opcion) {
        case 1: res = ' 1';
            break;
        case 2: res = ' 2';
            break;
        case 3: res = ' X';
            break;
    };
    return 'Partido ' + (index + 1) + ': ' + res;
    });
 

    

console.log(resultados);