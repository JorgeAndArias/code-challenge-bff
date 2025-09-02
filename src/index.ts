import { Checkout } from "./models/checkout";
import { AppleTV3For2, IPadBulk } from "./models/specialOffers";
import { formatPrice } from "./utils/utils";

const priceRules = [AppleTV3For2, IPadBulk];

const co1 = new Checkout(priceRules);

co1.scan("atv");
co1.scan("atv");
co1.scan("atv");
co1.scan("vga");
const total1 = co1.total();
console.log("Total:", formatPrice(total1));

const co2 = new Checkout(priceRules);
co2.scan("atv");
co2.scan("ipd");
co2.scan("ipd");
co2.scan("atv");
co2.scan("ipd");
co2.scan("ipd");
co2.scan("ipd");
const total2 = co2.total();
console.log("Total:", formatPrice(total2));
