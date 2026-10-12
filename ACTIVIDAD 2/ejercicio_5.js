// Función que obtiene los menores valores entre dos arreglos y los ordena descendentemente
function main() {
  const array1 = [12, 5, 18, 7, 10];
  const array2 = [9, 14, 3, 11, 6];

  const array3 = array1
    .map((valor, indice) => Math.min(valor, array2[indice]))
    .sort((a, b) => b - a);

  console.log("Arreglo 1:", array1);
  console.log("Arreglo 2:", array2);
  console.log("Menores ordenados descendentemente:", array3);
}

main();