var assert = require('assert');

var tablones = require('./tablones');
describe('Tablones y Clavos', function() {
  describe('minimoClavos', function() {
    it('Deberia de retornar 1', function() {
      let A = [1, 4, 5, 8];
      let B = [4, 5, 9, 10];
      let C = [4, 6, 7, 10, 2];

      assert.equal(3, tablones.minimoClavos(A, B, C));
    });
  });

  describe('mapearTablasPorClavo', function() {
    it('Deberia de retornar un mapa clavo/lista tablones, que pueden ser clavadas por un clavo', function() {
      let A = [1, 4, 5, 8];
      let B = [4, 5, 9, 10];
      let C = [4, 6, 7, 10, 2];

      let result = tablones.mapearTablasPorClavo(A, B, C);

      assert.equal(2, result[0].lista.length);
      assert.equal(0, result[0].lista[0]);
      assert.equal(1, result[0].lista[1]);
      assert.equal(1, result[1].lista.length);
      assert.equal(2, result[1].lista[0]);
      assert.equal(1, result[2].lista.length);
      assert.equal(2, result[2].lista[0]);
      assert.equal(1, result[3].lista.length);
      assert.equal(3, result[3].lista[0]);
      assert.equal(1, result[4].lista.length);
      assert.equal(0, result[4].lista[0]);
    });
  });

  describe('ordenamientoTopClavos', function() {
    it('Ordena los elementos por el tamaño de la lista.', function() {
      let tablaClavos = [
        {
          'clavo': 0,
          'lista': [1]
        },
        {
          'clavo': 2,
          'lista': [1, 2]
        },
        {
          'clavo': 3,
          'lista': [3, 5, 1, 6]
        },
        {
          'clavo': 0,
          'lista': [2, 3, 4]
        }
      ];

      tablones.ordenamientoTopClavos(tablaClavos);

      assert.equal(4, tablaClavos[0].lista.length);
      assert.equal(3, tablaClavos[1].lista.length);
      assert.equal(2, tablaClavos[2].lista.length);
      assert.equal(1, tablaClavos[3].lista.length);
    });
  });

  describe('eliminarElementosYaAfectados', function() {
    it('Elimina los tablones que ya fueron clavados', function() {
      let tablaClavos = [
        { clavo: 0, lista: [ 2, 3, 4 ] },
        { clavo: 2, lista: [ 1, 2 ] },
        { clavo: 0, lista: [ 1 ] } 
      ];

      let tablonesYaClavados = [ 3, 5, 1, 6 ];

      tablones.eliminarElementosYaAfectados(tablaClavos, tablonesYaClavados);

      assert.equal(2, tablaClavos[0].lista.length);
      assert.equal(1, tablaClavos[1].lista.length);
      assert.equal(0, tablaClavos[2].lista.length);
    });
  });

  describe('eliminarClavosSinTablones', function() {
    it('Eliminar los elemento de la tabla que no tienen tablones a clavar', function() {
      let tablaClavos = [
        { clavo: 0, lista: [ 2, 3, 4 ] },
        { clavo: 2, lista: [] },
        { clavo: 0, lista: [ 1 ] }
      ];

      let resultado = tablones.eliminarClavosSinTablones(tablaClavos);

      assert.equal(2, resultado.length);
    });
  });
});

