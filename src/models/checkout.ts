import { Product, PricingRule } from "../types";
import { products } from "./products";

export class Checkout {
  private cartProducts: Product[] = [];
  private pricingRules: PricingRule[];

  constructor(pricingRules: PricingRule[]) {
    this.pricingRules = pricingRules;
  }

  scan(sku: string): void {
    const product = products.find((product) => product.sku === sku);

    if (!product) {
      throw new Error(`Invalid sku: "${sku}"`);
    }

    this.cartProducts.push(product);
  }

  total(): number {
    const totalPrice = this.cartProducts.reduce(
      (total, product) => total + product.price,
      0
    );

    return totalPrice;
  }
}
