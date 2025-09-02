import { Product, PricingRule } from "../types";

const IPAD_BULK_PRICE = 499.99;

export const AppleTV3For2: PricingRule = {
  calculate(products: Product[]): number {
    let totalDiscount = 0;

    const atvs = products.filter((product) => product.sku === "atv");
    const atvPrice = atvs[0].price;

    if (atvs.length >= 3) {
      const specialOfferCount = Math.floor(atvs.length / 3);
      totalDiscount += specialOfferCount * atvPrice;
    }

    return totalDiscount;
  },
};

export const IPadBulk: PricingRule = {
  calculate(products: Product[]): number {
    let totalDiscount = 0;

    const iPads = products.filter((product) => product.sku === "ipd");
    const iPadPrice = iPads[0].price;

    if (iPads.length > 4) {
      totalDiscount += (iPadPrice - IPAD_BULK_PRICE) * iPads.length;
    }

    return totalDiscount;
  },
};
