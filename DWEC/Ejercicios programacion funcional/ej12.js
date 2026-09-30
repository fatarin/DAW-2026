//comprobar que ningún campo requerido esté vacio

const camposRequeridos = ['nombre', 'email', 'password'];

const formularioUsuario = {
nombre: 'Alejandro',
email: 'ale@correo.com',
password: '', // ¡Alerta! Está vacío
biografia: 'Hola a todos'
};



camposRequeridos.forEach((el) => {
    let campo = el;
    //console.log(campo);       //para debug
  if (formularioUsuario[campo] == '') console.log ('El campo ' + 
    campo +
    ' está vacío'); 
   
}); 

