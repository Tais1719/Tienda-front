export const FormatPrice = (value) => {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    currencyDisplay: 'narrowSymbol',
    minimumFractionDigits: 3,
  }).format(value / 1);
};