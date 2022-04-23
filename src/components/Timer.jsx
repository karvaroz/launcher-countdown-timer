import dayjs from "dayjs";

export function Timer(timestamp) {
  // TIEMPO FINAL
  const end = dayjs(timestamp);
  // TIEMPO ACTUAL
  const now = dayjs();
  // DIFERENCIA ENTRE TIEMPO ACTUAL Y TIEMPO FINAL NO DE NEGATIVO
  if (end.isBefore(now)) {
    return {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };
  }
  // TRAER DIFERENCIA ENTRE TIEMPO ACTUAL Y TIEMPO FINAL
  return {
    days: getDays(now, end),
    hours: getHours(now, end),
    minutes: getMinutes(now, end),
    seconds: getSeconds(now, end),
  };
}
// FUNCION PARA TRAER DIFERENCIA ENTRE TIEMPO ACTUAL Y TIEMPO FINAL EN DIAS
function getDays(now, end) {
  const days = end.diff(now, "days");
  return days;
}
// FUNCION PARA TRAER DIFERENCIA ENTRE TIEMPO ACTUAL Y TIEMPO FINAL EN HORAS
function getHours(now, end) {
  const hours = end.diff(now, "hours") % 24;
  return zeros(hours, 2);
}
// FUNCION PARA TRAER DIFERENCIA ENTRE TIEMPO ACTUAL Y TIEMPO FINAL EN MINUTOS
function getMinutes(now, end) {
  const minutes = end.diff(now, "minutes") % 60;
  return zeros(minutes, 2);
}
// FUNCION PARA TRAER DIFERENCIA ENTRE TIEMPO ACTUAL Y TIEMPO FINAL EN SEGUNDOS
function getSeconds(now, end) {
  const seconds = end.diff(now, "seconds") % 60;
  return zeros(seconds, 2);
}
// FUNCION PARA AGREGAR CEROS A LOS NUMEROS CUANDO SOLO QUEDA UN NUMERO
function zeros(number, minLength) {
  const numberString = number.toString();
  if (numberString.length >= minLength) {
    return numberString;
  } else {
    return "0".repeat(minLength - numberString.length) + numberString;
  }
}
