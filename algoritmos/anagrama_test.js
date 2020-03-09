var assert = require('assert');
let anagrama = require('./anagrama');

describe('Anagrama', function() {
    describe('anagrama', function() {
      it('contar todas las apariciones de una cadena dentro otra cadena', function() {
        let texto = "hola, que buena ola Laomir";
        let subcadena = "OAL";
  
        assert.equal(3, anagrama(texto, subcadena));
      });
    });
});