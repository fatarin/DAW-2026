function calcularEscudo(nivel) { return nivel * 15; }
//console.log(calcularEscudo(2));

//(Usa sintaxis concisa de un solo parámetro sin paréntesis y retorno implícito)
const calcularEscudoRef = nivel => nivel * 15;
//console.log(calcularEscudoRef(2));


function impactoCritico(danoBase, multiplicador) { return danoBase * multiplicador; }
//console.log(impactoCritico(3, 5));
//Usa retorno implícito de dos parámetros
const impactoCriticoRef = (danoBase, multiplicador) => danoBase * multiplicador;
//console.log(impactoCriticoRef(3, 5));


function mensajeAlerta() { return "¡Alerta: Intrusos en la cubierta!"; }
console.log(mensajeAlerta());
//(Usa arrow function sin parámetros)
const mensajeAlertaRef = () => "¡Alerta: Intrusos en la cubierta!";
console.log(mensajeAlertaRef());