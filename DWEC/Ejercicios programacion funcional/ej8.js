const dominiosBloqueados = ['trashmail.com', 'tempmail.org', 'dispostable.com'];
const emailUsuario = 'usuario123@tempmail.org';

//comprobar si el correo de un usuario está en lista de bloqueados

//obtener posicion arroba
let arroba = emailUsuario.search('@');
console.log(arroba);

//obtener substring con dominio
let dominioUsuario = emailUsuario.slice(arroba + 1);
console.log(dominioUsuario);


//find del dominio - unificando las comprobaciones de arroba y substring
console.log('Esta el dominio del usuario bloqueado: ');
console.log(dominiosBloqueados.includes(emailUsuario.slice((emailUsuario.search('@')) + 1)));
