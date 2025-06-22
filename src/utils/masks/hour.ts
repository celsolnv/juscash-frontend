export function formatHour(hora: string = "0000") {
  hora = hora.replace(/[^0-9:]/g, "").replace(/:/g, "");

  if (hora.length === 2) {
    hora += ":";
  } else if (hora.length === 3) {
    hora = hora.substring(0, 2) + ":" + hora.substring(2);
  } else if (hora.length === 4) {
    let minutos = parseInt(hora.substring(2));
    if (minutos > 59) {
      minutos = 59;
    }

    hora = hora.substring(0, 2) + ":" + minutos.toString().padStart(2, "0");
  }

  if (hora.length > 5) {
    hora = hora.substring(0, 5);
  }

  return hora;
}

export function addHour(hora = "0000", minutos = 0) {
  const date = new Date();
  date.setHours(parseInt(hora.substring(0, 2)));
  date.setMinutes(parseInt(hora.substring(3)));
  date.setMinutes(date.getMinutes() + minutos);

  return formatHour(
    date.getHours().toString().padStart(2, "0") +
      date.getMinutes().toString().padStart(2, "0")
  );
}
export function subtractHour(hora = "0000", minutos = 0) {
  const date = new Date();
  date.setHours(parseInt(hora.substring(0, 2)));
  date.setMinutes(parseInt(hora.substring(3)));
  date.setMinutes(date.getMinutes() - minutos);

  return formatHour(
    date.getHours().toString().padStart(2, "0") +
      date.getMinutes().toString().padStart(2, "0")
  );
}

export const removeMask = (value: string) => value.replace(/\D/g, "");
