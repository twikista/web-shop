export const formatPrice = (price: number): string => {
  const currencyFormat = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "USD",
  });
  return currencyFormat.format(price);
};
