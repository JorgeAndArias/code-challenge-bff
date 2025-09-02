import { PricingRule, SKU } from "../types";
import { Checkout } from "../models/checkout";
import { AppleTV3For2, IPadBulk } from "../models/specialOffers";
import { priceDollars } from "../utils/utils";

const priceRules: PricingRule[] = [AppleTV3For2, IPadBulk];

describe("Checkout system", () => {
  it("Should handle Apple TV 3 for 2 deal", () => {
    const co = new Checkout(priceRules);
    co.scan(SKU.APPLE_TV);
    co.scan(SKU.APPLE_TV);
    co.scan(SKU.APPLE_TV);
    co.scan(SKU.VGA_ADAPTER);
    expect(co.total()).toBe(priceDollars(10950 * 2 + 3000));
  });

  it("Should handle Super iPad bulk deal", () => {
    const co = new Checkout(priceRules);
    co.scan(SKU.APPLE_TV);
    co.scan(SKU.SUPER_IPAD);
    co.scan(SKU.SUPER_IPAD);
    co.scan(SKU.APPLE_TV);
    co.scan(SKU.SUPER_IPAD);
    co.scan(SKU.SUPER_IPAD);
    co.scan(SKU.SUPER_IPAD);
    expect(co.total()).toBe(priceDollars(10950 * 2 + 49999 * 5));
  });

  it("Should return 0 if no products scanned", () => {
    const co = new Checkout(priceRules);
    expect(co.total()).toBe(0);
  });

  it("Should apply multiple 3-for-2 discounts for Apple TVs", () => {
    const co = new Checkout(priceRules);
    co.scan(SKU.APPLE_TV);
    co.scan(SKU.APPLE_TV);
    co.scan(SKU.APPLE_TV);
    co.scan(SKU.APPLE_TV);
    co.scan(SKU.APPLE_TV);
    co.scan(SKU.APPLE_TV);
    expect(co.total()).toBe(priceDollars(10950 * 4));
  });

  it("Should apply multiple discounts together", () => {
    const co = new Checkout(priceRules);
    co.scan(SKU.SUPER_IPAD);
    co.scan(SKU.SUPER_IPAD);
    co.scan(SKU.SUPER_IPAD);
    co.scan(SKU.SUPER_IPAD);
    co.scan(SKU.SUPER_IPAD);
    co.scan(SKU.APPLE_TV);
    co.scan(SKU.APPLE_TV);
    co.scan(SKU.APPLE_TV);
    co.scan(SKU.VGA_ADAPTER);
    expect(co.total()).toBeCloseTo(priceDollars(10950 * 2 + 49999 * 5 + 3000)); // One 3 for 2 Apple TV deal + five bulk priced Super iPad + one VGA adapter
  });
});
