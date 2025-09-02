import { Product, PricingRule } from "../types";
import { priceDollars } from "../utils/utils";
import { products } from "../products";

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
      (total, product) => total + product.priceCents,
      0
    );

    const totalDiscount = this.pricingRules.reduce(
      (total, priceRule) => total + priceRule.calculate(this.cartProducts),
      0
    );

    return priceDollars(Math.max(0, totalPrice - totalDiscount));
  }
}
