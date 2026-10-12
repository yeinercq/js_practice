// Función que combina y ordena los valores de dos arreglos con objetos numéricos
function main() {
  const array1 = [4, 6, 2, 7, 1, 3, 5, 8];
  const array2 = [11, 10, 9];

  const valoresOrdenados = array1.concat(array2).sort((a, b) => a - b);
  
  console.log("Arreglo 1:", array1);
  console.log("Arreglo 2:", array2);
  console.log("Los valores ordenados ascendentemente de los arreglos array1 y array2 son: ", valoresOrdenados);
}

main();