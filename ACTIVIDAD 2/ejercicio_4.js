// Función que combina y ordena los valores de dos arreglos con objetos numéricos
function main() {
  const array = [4, 2, 7, 7, 3, 7, 5, 2];
  let valosMasRepetido = null;
  const contador = {};
  
  // Recorre cada uno de los elementos del arreglo y cuenta sus repeticiones
  // almacenado la cantidad de repeticiones de cada valor en un hash
  array.forEach(item => {
    contador[item] = (contador[item] || 0) + 1;
  });

  // Determina cuál es el valor más repetido en el arreglo utilizando el hash de conteo
  let maxRepeticiones = 0;
  for (const key in contador) {
    if (contador[key] > maxRepeticiones) {
      maxRepeticiones = contador[key];
      valosMasRepetido = key;
    }
  }

  console.log("Arreglo: ", array);
  console.log("El valor más repetido es: ", valosMasRepetido);
}

main();