// Función que encuentra los valores repetidos en un arreglo
function main() {
  const array = [1, "a", 1, "text", 6, "a", 1, 3+3];
  let valoresRepetidos = []

  array.forEach((item, index) => {
    if (array.indexOf(item) !== index && !valoresRepetidos.includes(item)) {
      valoresRepetidos.push(item);
    }
  });
  console.log("Valores repetidos:", valoresRepetidos);
}

main();