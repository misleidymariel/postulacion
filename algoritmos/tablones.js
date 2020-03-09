var minClavos = (tablonesInicio, tablonesFin, clavos) => {
    let tablaClavos = mapearTablasPorClavo(tablonesInicio, tablonesFin, clavos);
    let result = 0;
    while(tablaClavos.length > 0) {
        ordenamientoTopClavos(tablaClavos)
        top = tablaClavos[0];
        result++;
        eliminarElementosYaAfectados(tablaClavos, top.lista);
        tablaClavos = eliminarClavosSinTablones(tablaClavos);
    }
    
    return result;
}

var mapearTablasPorClavo = (tablonesInicio, tablonesFin, clavos) => {
    let result = [];
    clavos.forEach(clavo => {
        let tablones = [];
        tablonesInicio.forEach((inicio, index) =>{
            
            let fin = tablonesFin[index];
            if(inicio <= clavo && clavo <= fin) {
                tablones.push(index);
            }
        });
        //tablones contiene la lista de tablones que pueden ser afectados por un clavo
        let item = {'clavo': clavo, 'lista': tablones};

        result.push(item);
    });
    return result;
}

var eliminarClavosSinTablones = (tablaClavos) =>{
    tablaClavos = tablaClavos.filter(item => item.lista.length > 0);
    return tablaClavos;
}


var eliminarElementosYaAfectados = (tablaClavos, tablonesClavados) => {
    tablaClavos.forEach(tabla => {
        tabla.lista = tabla.lista.filter(item => tablonesClavados.includes(item) == false);
    })
}

var ordenamientoTopClavos = (tablaClavos) => {
    tablaClavos.sort((a, b) => {
        return b.lista.length - a.lista.length}
    );
}

module.exports.minimoClavos = minClavos;
module.exports.mapearTablasPorClavo = mapearTablasPorClavo;
module.exports.ordenamientoTopClavos = ordenamientoTopClavos;
module.exports.eliminarElementosYaAfectados = eliminarElementosYaAfectados;
module.exports.eliminarClavosSinTablones = eliminarClavosSinTablones;

