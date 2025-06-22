export function getCmvStatus(cmv: number): string {
  if (cmv <= 30) {
    return "Dentro do limite";
  } else if (cmv > 30 && cmv <= 40) {
    return "Próximo ao limite";
  } else {
    return "Acima do limite";
  }
}
