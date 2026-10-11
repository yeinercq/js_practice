// Modulo readline para recibir datos desde la consola
const readline = require("node:readline/promises");
const { stdin, stdout } = require("node:process");

// Función asincrónica para recibir datos del usuario desde la consola y
// calcular el sub-total de la compra y el descuento si aplica
async function recibir_datos() {
  // Instancia las variables locales de la funcion
  const consola = readline.createInterface({ input: stdin, output: stdout });
  
  // Solicita los valores por consola
  const unidadesCompradas = Number(await consola.question("¿Cuántas unidades compró el cliente? "));
  const precioPorUnidad = Number(await consola.question("¿Cuál es el precio por unidad? "));
  consola.close();

  // Valida que los valores sean positivos
  let validacionUnidadesCompradas = validaValoresPositivos(unidadesCompradas) 
  if (validacionUnidadesCompradas.positivo == false) {
    console.log(`Error valor unidades compradas: ${validacionUnidadesCompradas.mensaje}`)
    console.log('.........................')
    console.log('Saliendo de la aplicación.')
    return
  }

  let validacionPrecioPorUnidad = validaValoresPositivos(precioPorUnidad) 
  if (validacionPrecioPorUnidad.positivo == false) {
    console.log(`Error valor precio por unidad: ${validacionPrecioPorUnidad.mensaje}`)
    console.log('.........................')
    console.log('Saliendo de la aplicación.')
    return
  }

  // Realiza calculos de subtotal y descuento
  const subTotal = unidadesCompradas * precioPorUnidad;
  const descuento = calcular_descuento(unidadesCompradas)
  
  // Calcula el valor total de la compra menos el descuento
  const total = subTotal - (subTotal*descuento)

  console.log(`El sub-total de la compra es: $${subTotal}`);
  console.log(`El descuento de la compra es: $${descuento * 100}%`);
  console.log(`El total de la compra es: $${total}`);

}

// Fución para calcular el descuento basado la cantidad de unidades compradas
function calcular_descuento(unidadesCompradas) {
  let descuento = 0;
  if (unidadesCompradas > 100) {
    descuento = 0.4;
  } else if (unidadesCompradas >= 25 && unidadesCompradas <= 100) {
    descuento = 0.2;
  } else if (unidadesCompradas >= 10 && unidadesCompradas < 25) {
    descuento = 0.1;
  } else {
    descuento = 0.0;
  }

  return descuento;
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