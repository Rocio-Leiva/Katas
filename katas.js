// 1 Muestre un “¡Hola Mundo!” por consola.

console.log("¡Hola Mundo!");

// 10 Lea tu nombre por consola y devuelva un “¡Hola tuNombre!”.
function hiMySelf(){
let name = prompt("Escriba su nombre.");
return "Hola " + name + "!";
}

// 11 Lea un número por consola y devuelva el doble.
function multiplica2(){
  let num1 = prompt("ingrese un numero");
  let resultMulti = parseInt(num1) * 2;
  return "El resultado de la multiplicación es " + resultMulti; 
}

// 100 Lea dos números por consola y devuelva su suma.
function sumar(){
  let num1 = prompt("ingrese un numero");
  let num2 = prompt("ingrese un numero");
  let resultSumar = parseInt(num1) + parseInt(num2);
  return "El resultado de la suma es " + resultSumar;
}

// 101 Lea un número por consola y devuelva la mitad.
function dividir(){
  let num1 = prompt("ingrese un numero");
  let resultDiv =  parseInt(num1) / 2;
  return "El resultado de la division es " + resultDiv;
}

// 110 Lea dos números por consola y devuelva el mayor
function max(){
  let num1 = prompt("ingrese un numero");
  let num2 = prompt("ingrese un numero");
  let resultMax = Math.max(num1, num2);
  return "el numero mayor es " + resultMax;
}

// 111 Lea tres números por consola y devuelva el mayor
function max3(){
  let num1 = prompt("ingrese un numero");
  let num2 = prompt("ingrese un numero");
  let num3 = prompt("ingrese un numero");
  let resultMax3 = Math.max(num1, num2, num3);
  return "el numero mayor es " + resultMax3;
}

// 1000 Lea dos números por consola e indique si son iguales.
function igualesNum(){
  let num1 = prompt("ingrese un numero");
  let num2 = prompt("ingrese un numero");
  let resultIguales = num1 == num2;
  return "¿son iguales? " + resultIguales;
}

// 1001 Lea dos nombres por consola e indique si son iguales
function igualesName(){
  let name1 = prompt("ingrese un nombre");
  let name2 = prompt("ingrese un nombre");
  let resultIgualesName = name1 == name2;
  return "¿son iguales? " + resultIgualesName;
}

//1010 Lea dos números por consola y devuelva “Verdadero” si los dos son positivos o los dos son negativos. En caso contrario, que devuelva “Falso
function comparaNum(){
  let num1 = prompt("ingrese un numero");
  let num2 = prompt("ingrese un numero");
  
  if((num1 > 0 && num2 > 0) || (num1 < 0 && num2 < 0)){
        return true;
      }    
    else{
        return false;
       }     
}

//1011) Lea dos números por consola y devuelva “Verdadero” si uno es negativo y el otro positivo. En caso contrario, que devuelva “Falso”.
function comparaNum2(){
  let num1 = prompt("ingrese un numero");
  let num2 = prompt("ingrese un numero");
  
  if((num1 > 0 && num2 < 0) || (num1 < 0 && num2 > 0)){
        return true;
      }    
    else{
        return false;
       }     
}

//1100  Lea 10 números por consola y devuelva el mayor
 function max10(){
  let num10 = [prompt("ingrese un numero"), prompt("ingrese un numero"), prompt("ingrese un numero"), prompt("ingrese un numero"), prompt("ingrese un numero"), prompt("ingrese un numero"), prompt("ingrese un numero"), prompt("ingrese un numero"), prompt("ingrese un numero"), prompt("ingrese un numero")];
  let resultmax10 = Math.max(...num10);
  return "el numero mayor es " + resultmax10;
 }

//1101 Lea tu nombre y devuelva “¡Hola tuNombre! Tu nombre tiene n caracteres.” Donde n sea la cantidad de caracteres de tuNombre.
// console.log(listaDeCompra.length);
function nameN(){
  let name = prompt("Escriba su nombre.");
  let numN = name.length;
  return "¡Hola " + name + "!" + " Tu nombre tiene " + numN + " caracteres";
}

//1110 Lea 10 nombres y los devuelva ordenados alfabéticamente
function paises(){
 let listaPaises = [prompt("ingrese un nombre"), prompt("ingrese un nombre"), prompt("ingrese un nombre"), prompt("ingrese un nombre"), prompt("ingrese un nombre"), prompt("ingrese un nombre"), prompt("ingrese un nombre"), prompt("ingrese un nombre"), prompt("ingrese un nombre"), prompt("ingrese un nombre")];
 let resultPaises = (listaPaises.sort());
return "el orden alfabético es " + resultPaises;
}

//11111 Lea 10 números por consola y devuelva los negativos
function numNegativos(){
  let listaNumeros = [prompt("ingrese un numero"), prompt("ingrese un numero"), prompt("ingrese un numero"), prompt("ingrese un numero"), prompt("ingrese un numero"), prompt("ingrese un numero"), prompt("ingrese un numero"), prompt("ingrese un numero"), prompt("ingrese un numero"), prompt("ingrese un numero")];
  let resultNegativos = listaNumeros.filter(number => number < 0)
  return "los numeros negativos son " + resultNegativos;
}

//10000 Lea una cantidad arbitraria de nombres y devuelva cuántos son.
function nameRandom(){
  let randomNames = [prompt("ingrese un nombre"), prompt("ingrese un nombre"), prompt("ingrese un nombre"), prompt("ingrese un nombre"), prompt("ingrese un nombre"), prompt("ingrese un nombre"), prompt("ingrese un nombre"), prompt("ingrese un nombre")];
  let resultRandomNames = randomNames.length;
  return "Hay " + resultRandomNames + " nombres";
}

//10001 Lea una cantidad arbitraria de nombres y devuelva la suma de todos sus caracteres.
function nameCara(){
  let caracteres = [prompt("ingrese un nombre"), prompt("ingrese un nombre"), prompt("ingrese un nombre"), prompt("ingrese un nombre")];
  let cara = caracteres.join('');
  let contador = cara.length;
  return "la suma de todos los caracteres es igual a " + contador;
}

//10010 Lea 10 números por consola y devuelva el tercero mayor
function mayor3(){
  let numMayor3 = [prompt("ingrese un numero"), prompt("ingrese un numero"), prompt("ingrese un numero"), prompt("ingrese un numero"), prompt("ingrese un numero"), prompt("ingrese un numero"), prompt("ingrese un numero"), prompt("ingrese un numero"), prompt("ingrese un numero"), prompt("ingrese un numero")];
  let ordenar = numMayor3.sort(function(a, b) {return a - b});
  let mayor3 = ordenar[2];
  return "el tercer numero mayor es " + mayor3;

}

//10011 Bonus track: ¡Invente su propio “Elige tu propia aventura” por consola! En la consola se irá narrando una historia, en función de lo que el usuario vaya escogiendo, el desenlace será uno u otro. Deberá evitarse errores por mal uso de la consola. Debe capturarse la mayor cantidad posible de errores, indicando al usuario cómo proceder para evitarlos.
let seleccionar = document.querySelector('select');
let parrafo = document.querySelector('p');

seleccionar.addEventListener('change', establecerClima);

function establecerClima() {
  let eleccion = seleccionar.value;

  if (eleccion === 'soleado') {
    parrafo.textContent = 'El día esta agradable y soleado hoy. ¡Use pantalones cortos! Ve a la playa o al parque y come un helado.';
  } else if (eleccion === 'lluvioso') {
    parrafo.textContent = 'Está lloviendo, tome un abrigo para lluvia y un paraguas, y no se quede por fuera mucho tiempo.';
  } else if (eleccion === 'nevando') {
    parrafo.textContent = 'Está nevando ─ ¡está congelando! Lo mejor es quedarse en casa con una taza caliente de chocolate, o hacer un muñeco de nieve.';
  } else if (eleccion === 'nublado') {
    parrafo.textContent = 'No está lloviendo, pero el cielo está gris y nublado; podría llover en cualquier momento, así que lleve un saco solo por si acaso.';
  } else {
    parrafo.textContent = '';
  }
}

//10100 Archi bonus track: diseñe una función que, al ingresar un número, indique si es primo o no lo es
function numPrimo(){
  let esPrimo = numero => {
    if (numero == 0 || numero == 1 || numero == 4) return false;
    for (let x = 2; x < numero / 2; x++) {
      if (numero % x == 0) 
      return false;
    }
    return true;
  }

  let num1 = prompt("ingrese un numero");

num1.forEach(numero => {
	console.log("¿%d es primo? %s", numero, esPrimo(numero));
});
}

//10101 Ultra archi bonus track: diseñe una función que, al ingresar un número, lo divida por 17 y muestre el resultado con 4 decimales siempre.
function decimales4(){
  let num1 = prompt("ingrese un numero");
  let resultDiv =  parseInt(num1) / 17;
  let resultDec = resultDiv.toFixed(3);
  return "El resultado con 3 decimales es " + resultDec;

}

//10110) Ultra archi bonus track infinito: diseñe una función tal que se ingrese un número natural y devuelva el mismo número en código binario.
function aBinario(){
  let num1 = prompt("ingrese un numero");
  let binario = parseInt(num1).toString(2);
  return num1 + " en binario es " + binario;
}


// 10
console.log(hiMySelf());
// 11
console.log(multiplica2());
// 100 
console.log(sumar());
//101
console.log(dividir());
//110
console.log(max());
//111
console.log(max3());
//1000
console.log(igualesNum());
// 1001
console.log(igualesName());
//1010
console.log(comparaNum());
//1011
console.log(comparaNum2());
//1100
console.log(max10());
//1101
console.log(nameN())
//1110
console.log(paises());
//11111
console.log(numNegativos());
// 10000
console.log(nameRandom());
//10001
console.log(nameCara());
//10010
console.log(mayor3());

//10101
console.log(decimales4());

//10110
console.log(aBinario());
