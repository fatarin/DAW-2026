 const valors = [true, 5, false,"hola", "adeu", 2];



//comparación caracter a caracter
const texto = valors.filter((x) => typeof(x) == 'string');
 texto.sort((a, b) => a.localeCompare(b));
 console.log(texto); 


 //comparacion longitud cadena texto
  const texto2 = valors.filter((x) => typeof(x) == 'string');
 texto2.sort((a, b) => b.length - a.length);
 console.log(texto2);


 //extraer booleanos
 const booleanos = valors.filter((x) => typeof(x) == 'boolean');
 console.log(booleanos);


 /* //realizar operaciones con valores numericos
  const suma = valors.filter((x) => typeof(x) == 'number').reduce((acc, el) => {
        acc += el;
        return acc
  }, 0);
 console.log(suma);
 */

 //realizar operaciones con valores numericos
 //revisar la inicilizacion del objeto para iniciar desde el primer valor
  const suma = valors.filter((x) => typeof(x) == 'number').reduce((acc, el) => {
        
      acc.suma += el;
      acc.resta -= el;
      acc.multiplicacion *= el;
      acc.division /= el;
       return acc;
  }, {suma: 0,
      resta: 0,
      multiplicacion: 1,
      division: 1
  });
 console.log(suma);
