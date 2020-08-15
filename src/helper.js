/**
 * Obtiene la diferencia de años
 * @param {Number} year
 */
export function obtenerDiferenciaYear(year) {
  return new Date().getFullYear() - year;
}

/**
 * Calcula el total a pagar segun la marca
 * @param {String} marca
 */
export function calcularMarca(marca) {
  let incremento;

  switch (marca) {
    case 'europeo':
      incremento = 1.30;
      break;
    case 'americano':
      incremento = 1.15;
      break;
    case 'asiatico':
      incremento = 1.05;
      break;
    default:
      break;
  }

  return incremento;
}

/**
 * Calcula el tipo de seguro
 * @param {String} plan
 */
export function obtenerPlan(plan) {
  return (plan === 'basico') ? 1.20 : 1.50;
}


/**
 * Muestra la primer letra mayuscula
 * @param {String} texto
 */
export function primerMayuscula(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}
