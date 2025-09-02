import { Product, PricingRule, SKU } from "../types";

const IPAD_BULK_PRICE_CENTS = 49999; // $499.99

export const AppleTV3For2: PricingRule = {
  calculate(products: Product[]): number {
    let totalDiscountCents = 0;

    const atvs = products.filter((product) => product.sku === SKU.APPLE_TV);

    if (atvs.length >= 3) {
      const atvPrice = atvs[0].priceCents;
      const specialOfferCount = Math.floor(atvs.length / 3);
      totalDiscountCents += specialOfferCount * atvPrice;
    }

    return totalDiscountCents;
  },
};

export const IPadBulk: PricingRule = {
  calculate(products: Product[]): number {
    let totalDiscountCents = 0;

    const iPads = products.filter((product) => product.sku === SKU.SUPER_IPAD);

    if (iPads.length > 4) {
      const iPadPrice = iPads[0].priceCents;
      totalDiscountCents += (iPadPrice - IPAD_BULK_PRICE_CENTS) * iPads.length;
    }

    return totalDiscountCents;
  },
};
