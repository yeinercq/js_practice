function main() {
  const array = [100, 150, 130, 180, 900, -250, 360];
  
  let max = encuentraMaximo(array)
  let min = encuentraMinimo(array)
  let promedio = encuentraPromedio(array)

  console.log("Máximo:", max)
  console.log("Mínimo:", min)
  console.log("Promedio:", promedio)
}

// Función que encuentra el valor máximo en un arreglo
function encuentraMaximo(arr) {
  let max = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }
  return max
}

// Función que encuentra el valor mínimo en un arreglo
function encuentraMinimo(arr) {
  let min = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i]
    }
  }
  return min
}

// Función que encuentra el valor promedio en un arreglo
function encuentraPromedio(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum / arr.length
}

main();