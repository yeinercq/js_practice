// Modulo readline para recibir datos desde la consola
const readline = require("node:readline/promises");
const { stdin, stdout } = require("node:process");

// Función asincrónica para recibir datos del usuario desde la consola y
// retorna el número mayor de tres ingresados
async function recibir_datos() {
  // Instancia las variables locales de la funcion
  const consola = readline.createInterface({ input: stdin, output: stdout });
  
  // Solicita los tres valores en consola
  const numero1 = Number(await consola.question("Escriba el primer número: "));
  const numero2 = Number(await consola.question("Escriba el segundo número: "));
  const numero3 = Number(await consola.question("Escriba el tercer número: "));
  consola.close();

  // Valida que los valores sean positivos y numéricos
  [numero1, numero2, numero3].forEach((numero, index) => {
    let validacion = validaValoresPositivos(numero)
    if (validacion.positivo == false) {
      console.log(`Error en el número ${index + 1}: ${validacion.mensaje}`)
      console.log('.........................')
      console.log('Saliendo de la aplicación.')
      return
    }
  })
  
  // Calcula y muestra el número mayor
  const mayor = Math.max(numero1, numero2, numero3)
  console.log(`El número mayor es: ${mayor}`)
}

// Función que valida valores positivos
function validaValoresPositivos (valor) {
  let respuesta = {
    positivo: true,
    mensaje: ""
  }

  // Validación numérica
  if (typeof valor !== "number" || !Number.isFinite(valor)) {
    respuesta.positivo = false
    respuesta.mensaje = "el valor debe ser numérico"
    return respuesta
  }
  // Validación valor positivo
  if (valor < 0) {
    respuesta.positivo = false
    respuesta.mensaje = "el valor no es positivo"
  }

  return respuesta
}

recibir_datos();