// Función que obtiene la diagonal principal de una matriz cuadrada
function main() {
  const matriz = [
    [4, 8, 2, 6],
    [7, 1, 9, 3],
    [5, 0, 11, 10],
    [12, 14, 13, 15],
  ];
  const diagonalPrincipal = [];

  for (let i = 0; i < matriz.length; i++) {
    diagonalPrincipal.push(matriz[i][i]);
  }

  console.log("Matriz:");
  matriz.forEach(fila => console.log(fila));
  console.log("Diagonal principal:", diagonalPrincipal);
}

main();