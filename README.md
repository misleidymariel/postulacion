# Ejercicios resueltos - Evaluación técnica para Ingresantes

La evaluacion tecnica consiste en tres partes

1.  Resolver problemas de algoritmos

  * Encontrar el numero minimo de clavos que son necesarios, de tal forma todos los tablones esten clavados.
  * Contar todos los anagramas de una cadena en otra cadena principal.

2. Implementar la vista en html y css de una imagen de un resumen de cuenta.

3. Diseño de problemas usando diagramas de clases y diagrama de secuencia.

  * Diseñar el diagrama de secuencia de una operacion de extraccion de dinero de un cajero ATM.
  * Diseñar el diagrama de clases de la administracion de usuarios y permisos.

## 1. Resolver problemas de algoritmos

Los problemas de algoritmos fueron resueltos usando las siguientes tecnologias.
   * Nodejs, npm -> plataforma de desarrollo
   * Mocha -> implementacion de unit test
   * Babel -> soportar javascript ES6
   
Para hacer correr los unit test,  es necesario ejecutar las siguientes instrucciones

1. Instalar Nodejs, verificar que funcion los comandos de 
```javascript
 node --version
 npm --version
```
2. Desde la consola, ir al directorio /algoritmos
3. ejecutar los siguientes comandos
```javascript
  npm install
  npm test
```
### Consideraciones al resolver el problema

Para el ejercicio de los clavos y tablones, se toma la siguiente decision:

En el ejemplo del problema se tienen los siguientes tablones [1, 4], [4, 5], [5, 9] y [8, 10].
y los clavos
C[0] = 4
C[1] = 6
C[2] = 7
C[3] = 10
C[4] = 2


0, entonces los tablones [1, 4] y [4, 5] serán clavados.
0, 1, entonces los tablones [1, 4], [4, 5] y [5, 9] serán clavados.
0, 1, 2, entonces los tablones [1, 4], [4, 5] y [5, 9] serán clavados.
0, **1 o 2**, 3, entonces todos los tablones serán clavados.

El clavo 1, como el clavo 2 pueden ser usados para clavar en el tablon [5, 9]

**Entonces solo serian necesarios usar 3 clavos para que todos los tablones sean clavados.**



## 2. Implementar la vista en html y css de una imagen de un resumen de cuenta.

Para este ejercicio se utilizo html y css, flexbox para alinear los elementos. Se habilito en gh-pages de github para que pueda ser deployado en la web.

https://misleidymariel.github.io/postulacion/frontend/index.html

**Me enfoque mas en la estructura html de la pagina y no tanto en la apariencia**


## 3. Diseño de problemas usando diagramas de clases y diagrama de secuencia.

#### Extraccion de efecto - Diagrama de secuencia


![alt text](https://misleidymariel.github.io/postulacion/dise%C3%B1o%20modelado/diagrama-secuencia-transaccion.png "Extraccion de efectivos")

#### Administraccion de usuarios - Diagrama de clases

![alt text](https://github.com/misleidymariel/postulacion/blob/master/dise%C3%B1o%20modelado/diagrama-clases-admin-usuarios.png "Admin usuarios")
