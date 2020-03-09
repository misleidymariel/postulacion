var anagrama = (text, substring) => {
    let resultado = 0;
    for(let i = 0, j = substring.length; j <= text.length; i++){
         let cad = text.substring(i, j);
         if(sonAnagrama(cad, substring)){
             resultado++;
         }
         j++;
    }

    return resultado;
}

var sonAnagrama = (cadena1, cadena2) => {

    return  ordenarCaracteres(cadena1) === ordenarCaracteres(cadena2);

}

var ordenarCaracteres = (cadena) => {
    return cadena.toLowerCase().split("").sort().join("");
}

module.exports = anagrama