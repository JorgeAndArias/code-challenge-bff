export interface Product {
  sku: string;
  name: string;
  price: number;
}

export interface PricingRule {
  calculate(products: Product[]): number;
}
