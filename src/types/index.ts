export const SKU = {
  SUPER_IPAD: "ipd",
  APPLE_TV: "atv",
  MACBOOK_PRO: "mbp",
  VGA_ADAPTER: "vga",
} as const;

export interface Product {
  sku: (typeof SKU)[keyof typeof SKU];
  name: string;
  priceCents: number;
}

export interface PricingRule {
  calculate(products: Product[]): number;
}
