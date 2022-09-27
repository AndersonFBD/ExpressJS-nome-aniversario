function identificaGenero(sexo){
    if(sexo==='M') return 'Sr.';
    if(sexo==='F') return 'Sra.';
    return 'erro';
}

module.exports = identificaGenero;