import dayjs from "dayjs";

export function Timer(timestamp) {
  const end = dayjs(timestamp);
  const now = dayjs();

  if (end.isBefore(now)) {
    return {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };
  }

  return {
    days: getDays(now, end),
    hours: getHours(now, end),
    minutes: getMinutes(now, end),
    seconds: getSeconds(now, end),
  };
}

function getDays(now, end) {
  const days = end.diff(now, "days");
  return days;
}

function getHours(now, end) {
  const hours = end.diff(now, "hours") % 24;
  return zeros(hours, 2);
}

function getMinutes(now, end) {
  const minutes = end.diff(now, "minutes") % 60;
  return zeros(minutes, 2);
}

function getSeconds(now, end) {
  const seconds = end.diff(now, "seconds") % 60;
  return zeros(seconds, 2);
}

function zeros(number, minLength) {
  const numberString = number.toString();
  if (numberString.length >= minLength) {
    return numberString;
  } else {
    return "0".repeat(minLength - numberString.length) + numberString;
  }
}
