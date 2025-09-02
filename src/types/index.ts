export interface Product {
  sku: string;
  name: string;
  priceCents: number;
}

export interface PricingRule {
  calculate(products: Product[]): number;
}
