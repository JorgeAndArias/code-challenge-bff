import { Product, PricingRule } from "../types";

export class Checkout {
  private cartProducts: Product[] = [];
  private pricingRules: PricingRule[];

  constructor(pricingRules: PricingRule[]) {
    this.pricingRules = pricingRules;
  }
}
