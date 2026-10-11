// Modulo readline para recibir datos desde la consola
const readline = require("node:readline/promises");
const { stdin, stdout } = require("node:process");

// Función asincrónica para recibir datos del usuario desde la consola y
// calcular la cantidad de dias que tiene un mes
async function recibir_datos() {
  // Instancia las variables locales de la funcion
  const consola = readline.createInterface({ input: stdin, output: stdout });
  
  // Solicita los valores por consola
  const mes = Number(await consola.question("Escriba el número del mes: "));
  const anio = Number(await consola.question("Escriba el año: "));
  consola.close();

  // Valida que los valores sean positivos y numéricos
  let validacionMes = validaValoresPositivos(mes) 
  if (validacionMes.positivo == false) {
    console.log(`Error en el mes: ${validacionMes.mensaje}`)
    console.log('.........................')
    console.log('Saliendo de la aplicación.')
    return
  }

  let validacionAnio = validaValoresPositivos(anio) 
  if (validacionAnio.positivo == false) {
    console.log(`Error en el año: ${validacionAnio.mensaje}`)
    console.log('.........................')
    console.log('Saliendo de la aplicación.')
    return
  }

  // Calcula y muestra en pantalla la cantidad de días del mes
  const dias = calcularDiasDelMes(mes, anio)
  if (dias === 0) {
    console.log("Error: mes inválido")
    console.log('.........................')
    console.log('Saliendo de la aplicación.')
    return
  }
  console.log(`El mes ${obtenerNombreDelMes(mes)} del año ${anio} tiene ${dias} días.`)

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

// Función que calcula la cantidad de días de un mes
function calcularDiasDelMes(mes, anio) {
  const meses31Dias = [1, 3, 5, 7, 8, 10, 12]
  const meses30Dias = [4, 6, 9, 11]
  if (meses31Dias.includes(mes)) {
    return 31
  } else if (meses30Dias.includes(mes)) {
    return 30
  } else if (mes === 2) {
    // Verifica si es año bisiesto
    if ((anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0)) {
      return 29
    } else {
      return 28
    }
  } else {
    return 0 // Mes inválido
  }
}

// Fución que devuelve el nombre del mes
function obtenerNombreDelMes(mes) {
  const nombresMeses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];
  return nombresMeses[mes - 1] || "Mes inválido";
}

recibir_datos();