// generar array con letras iniciales de nombres, en mayúsculas, sin repetir


const invitados = ['carlos', 'ana', 'Celia', 'beatriz', 'Antonio'];

const unicas = new Set;

const iniciales = Array.from(invitados, (el) =>{
    
    unicas.add(el.charAt(0).toUpperCase());
});


console.log(unicas);
