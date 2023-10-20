let msg = "A continuación le estoy entregando una cadena de texto que servirá como texto guía para realizar los siguientes ejercicios . "

// 1. ¿Qué método utiliza para saber la cantidad de caracteres?
// Imprima el resultado
console.log((msg.length)+1);

// 2. Convierta la cadena de texto entregada a minúsculas e imprima por consola la salida.
console.log(msg.toLowerCase());

// 3. Si la cadena contiene la palabra filtro en algú lado imprima un mensaje por consola con el valor true.
if (msg.includes("filtro")) {
    console.log(true);
}

// 4. Extrae la palabra "ejercicios" del mensaje entregado.
// imprime por consola
let inicio = msg.indexOf("ejercicios");
console.log(msg.slice(inicio));


// 5. Reemplaza los espacio por el caracter "-" e imprime el resultado final.
console.log(msg.replace(new RegExp(' ', 'g'), '-'))
// 6. Realiza en el DOM un software que compare si dos campos de password son iguales.

// 7. Crea una función que valide cuántas msg entregado.
function cantVocales(msg){
    msg = msg.toLowerCase()
    let cantVocales = 0
    for (let i = 0; i < msg.length; i++) {
        let vocal = msg[i]
        if (vocal == "a"||vocal=="e"||vocal=="i"|| vocal == "o"||vocal=="u") {
            cantVocales++
        }
    }
    return cantVocales;
}

console.log("La cantidad de vocales del mensaje entregado es: "+cantVocales(msg));

// 8. Realiza un programa basado en el mockup entregado, que guarde los comentarios agregados por el usuario, teniendo en cuenta lo siguiente:

// * No puede haber espacios ni al principio ni al final.
// * Debe poder convertirlos a mayúscula o a minúscula.
// * debe tener un contador que va disminuyendo conforme van terminándose el límite de caracteres que este será de 255.
// * Los comentarios deberán salir en color verde y negrilla.

// Fecha de entrega(por parejas) --> Jueves 19 de octubre de 2023 a las 11.30 pm -> Link del repositorio.
// Nombre completo de los integrantes