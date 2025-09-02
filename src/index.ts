import { Checkout } from "./models/checkout";
import { AppleTV3For2, IPadBulk } from "./models/specialOffers";
import { SKU } from "./types";
import { formatPrice } from "./utils/utils";

const priceRules = [AppleTV3For2, IPadBulk];

const co1 = new Checkout(priceRules);

co1.scan(SKU.APPLE_TV);
co1.scan(SKU.APPLE_TV);
co1.scan(SKU.APPLE_TV);
co1.scan(SKU.VGA_ADAPTER);
const total1 = co1.total();
console.log("Total:", formatPrice(total1));

const co2 = new Checkout(priceRules);
co2.scan(SKU.APPLE_TV);
co2.scan(SKU.SUPER_IPAD);
co2.scan(SKU.SUPER_IPAD);
co2.scan(SKU.APPLE_TV);
co2.scan(SKU.SUPER_IPAD);
co2.scan(SKU.SUPER_IPAD);
co2.scan(SKU.SUPER_IPAD);
const total2 = co2.total();
console.log("Total:", formatPrice(total2));
