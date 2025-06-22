export function formatCnpj(cnpj: string = "") {
  // Remove caracteres não numéricos
  const onlyNums = cnpj.replace(/[^\d]/g, "");

  // Formatação do CNPJ: xx.xxx.xxx/xxxx-xx
  let formattedCnpj = onlyNums.substring(0, 2);
  if (onlyNums.length > 2) {
    formattedCnpj += "." + onlyNums.substring(2, 5);
  }
  if (onlyNums.length > 5) {
    formattedCnpj += "." + onlyNums.substring(5, 8);
  }
  if (onlyNums.length > 8) {
    formattedCnpj += "/" + onlyNums.substring(8, 12);
  }
  if (onlyNums.length > 12) {
    formattedCnpj += "-" + onlyNums.substring(12, 14);
  }

  return formattedCnpj;
}
