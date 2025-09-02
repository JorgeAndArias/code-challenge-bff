import { Product, SKU } from "./types";

export const products: Product[] = [
  {
    sku: SKU.SUPER_IPAD,
    name: "Super iPad",
    priceCents: 54999, // $549.99
  },
  {
    sku: SKU.MACBOOK_PRO,
    name: "MacBook Pro",
    priceCents: 139999, // $1399.99
  },
  {
    sku: SKU.APPLE_TV,
    name: "Apple TV",
    priceCents: 10950, // $109.50
  },
  {
    sku: SKU.VGA_ADAPTER,
    name: "VGA adapter",
    priceCents: 3000, // $30.00
  },
];
