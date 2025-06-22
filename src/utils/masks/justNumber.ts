export function removeNonNumbers(value?: string): number {
  if (!value) {
    return 0;
  }
  // Remove all characters except for digits
  const filteredInput = value?.toString().replace(/[^0-9]/g, "");
  return parseInt(filteredInput, 10);
}
export function price(value?: string): number {
  if (!value) {
    return 0;
  }
  // Remove all characters except for digits, comma and minus sign
  const filteredInput = value
    ?.toString()
    .replace(".", ",")
    .replace(/[^0-9,-]/g, "");
  // Only allow one comma in the input
  const commaIndex = filteredInput?.indexOf(",");
  if (commaIndex !== -1) {
    const numericString =
      filteredInput?.slice(0, commaIndex + 1) +
      filteredInput?.slice(commaIndex + 1).replace(/,/g, "");
    return parseFloat(numericString.replace(",", "."));
  }
  return parseFloat(filteredInput.replace(",", "."));
}
