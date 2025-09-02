export const priceDollars = (cents: number): number => {
  return cents / 100;
};

export function formatPrice(dollars: number): string {
  return `$${dollars.toFixed(2)}`;
}
