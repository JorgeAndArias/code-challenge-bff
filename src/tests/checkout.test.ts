import { PricingRule } from "../types";
import { Checkout } from "../models/checkout";
import { AppleTV3For2, IPadBulk } from "../models/specialOffers";
import { priceDollars } from "../utils/utils";

const priceRules: PricingRule[] = [AppleTV3For2, IPadBulk];

describe("Checkout system", () => {
  it("Should handle Apple TV 3 for 2 deal", () => {
    const co = new Checkout(priceRules);
    co.scan("atv");
    co.scan("atv");
    co.scan("atv");
    co.scan("vga");
    expect(co.total()).toBe(priceDollars(10950 * 2 + 3000));
  });

  it("Should handle Super iPad bulk deal", () => {
    const co = new Checkout(priceRules);
    co.scan("atv");
    co.scan("ipd");
    co.scan("ipd");
    co.scan("atv");
    co.scan("ipd");
    co.scan("ipd");
    co.scan("ipd");
    expect(co.total()).toBe(priceDollars(10950 * 2 + 49999 * 5));
  });

  it("Should return 0 if no products scanned", () => {
    const co = new Checkout(priceRules);
    expect(co.total()).toBe(0);
  });

  it("Should apply multiple 3-for-2 discounts for Apple TVs", () => {
    const co = new Checkout(priceRules);
    co.scan("atv");
    co.scan("atv");
    co.scan("atv");
    co.scan("atv");
    co.scan("atv");
    co.scan("atv");
    expect(co.total()).toBe(priceDollars(10950 * 4));
  });

  it("Should apply multiple discounts together", () => {
    const co = new Checkout(priceRules);
    co.scan("ipd");
    co.scan("ipd");
    co.scan("ipd");
    co.scan("ipd");
    co.scan("ipd");
    co.scan("atv");
    co.scan("atv");
    co.scan("atv");
    co.scan("vga");
    expect(co.total()).toBeCloseTo(priceDollars(10950 * 2 + 49999 * 5 + 3000)); // One 3 for 2 Apple TV deal + five bulk priced Super iPad + one VGA adapter
  });
});
