const votos = ['JS', 'Python', 'JS', 'JS', 'Rust', 'Python'];


const sumaJS = votos.reduce((total, voto) => {
    //console.log(voto));
    if(voto == 'JS') {
        total+=1}
        return total
        }, 0);

console.log(sumaJS);