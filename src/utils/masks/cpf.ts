export function formatCpf(cpf: string = ""): string {
  if (!cpf) {
    return "";
  }
  const onlyNums = cpf.replace(/[^\d]/g, "");

  let formattedCpf = onlyNums.substring(0, 3);
  if (onlyNums.length > 3) {
    formattedCpf += "." + onlyNums.substring(3, 6);
  }
  if (onlyNums.length > 6) {
    formattedCpf += "." + onlyNums.substring(6, 9);
  }
  if (onlyNums.length > 9) {
    formattedCpf += "-" + onlyNums.substring(9, 11);
  }

  return formattedCpf;
}

export const removeMask = (value: string) => value.replace(/[^\d]/g, "");
