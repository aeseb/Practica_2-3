//creo e inicializo el array
let listaCompras = ["Sal fina", "Sal gruesa", "Pimienta", "Oregano", 
                    "Comino", "Canela", "Aceite de oliva", "Aceite"];

//LEER
/**
 * Muestra por consola.
 * @param {array} vector a mostrar.
 */
function mostrarVector(vector){
    console.log("------Mostrando------");
    console.log("Tamaño actual del vector: ", vector.length, "\n");
    for(let i = 0; i < (vector.length); i++){
        console.log(`Producto N°${i+1}`);
        console.log(`[Posicion ${i}] `, vector[i], "\n");
    }
    console.log("---------Fin---------");
    
}

//mostrarVector(listaCompras);

//Actualizo dos posiciones del vector
listaCompras[3] = "Mayonesa";
listaCompras[7] = "Aceitunas";
//mostrarVector(listaCompras);

//Inserto 2 nuevos elementos al vector
listaCompras.unshift("Dulce de leche");
listaCompras.push("Miel");
//mostrarVector(listaCompras);

//Borro varios elementos del vector
let posEliminarMulti = 2, cantEliminarMulti = 2;
let posEliminarSingle = 3, cantEliminarSingle = 1;

listaCompras.splice(posEliminarMulti, cantEliminarMulti);
listaCompras.splice(posEliminarSingle, cantEliminarSingle);
//mostrarVector(listaCompras);

//Extra 1
/*
*Inserto nuevos elementos, el elemento Pringles es reemplazado
*por el elemento Terma y el elemento Aceitunas es reemplazado por
*el elemento Agua mineral
*/
listaCompras[3] = "Pringles";
listaCompras[5] = "Agua mineral";
listaCompras[3] = "Terma";
mostrarVector(listaCompras);
