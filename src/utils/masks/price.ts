// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const price = (value?: any) => {
  if (isNaN(+value)) value = 0;
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(value);
};
