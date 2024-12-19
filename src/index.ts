import { Checkout } from "./checkout";
import { pricingRules } from "./pricingRules";
import { prices } from "./products";

// Helper function to display the scanned items and total price
function testCheckout(items: string[], description: string) {
  const co = new Checkout(pricingRules, prices);
  items.forEach((item) => co.scan(item));
  const total = co.total();

  console.log("======================================");
  console.log(description);
  console.log("Items scanned:", items.join(", "));
  console.log("Total Price: $", total.toFixed(2));
  console.log("======================================");
}

// Case 1: 3-for-2 deal on Apple TVs
testCheckout(
  ["atv", "atv", "atv", "vga"],
  "Case 1: Testing 3-for-2 deal on Apple TVs with an additional VGA adapter"
);

// Case 2: Bulk discount on Super iPads
testCheckout(
  ["ipd", "ipd", "ipd", "ipd", "ipd"],
  "Case 2: Testing bulk discount on Super iPads when buying more than 4"
);

// Case 3: Mixed discounts (Apple TV 3-for-2 and iPad bulk discount)
testCheckout(
  ["atv", "ipd", "ipd", "atv", "ipd", "ipd", "ipd"],
  "Case 3: Testing mixed discounts with Apple TVs and Super iPads"
);

// Case 4: No discounts applied
testCheckout(
  ["mbp", "vga"],
  "Case 4: Testing no discounts (just a MacBook Pro and VGA adapter)"
);

// Case 5: Edge case - Exactly 3 Apple TVs (3-for-2 deal) and 4 iPads (no bulk discount)
testCheckout(
  ["atv", "atv", "atv", "ipd", "ipd", "ipd", "ipd"],
  "Case 5: Edge case where Apple TVs qualify for 3-for-2, but iPads do not qualify for bulk discount"
);

// Case 6: Random assortment of items
testCheckout(
  ["vga", "atv", "ipd", "vga", "mbp", "atv", "vga"],
  "Case 6: Testing random assortment of items to ensure total calculation is correct"
);

// Case 7: Testing with only one type of item (Apple TVs with no discounts)
testCheckout(
  ["atv", "atv"],
  "Case 7: Testing purchase of 2 Apple TVs (no discounts applied)"
);

// Case 8: Testing no items scanned
testCheckout([], "Case 8: Testing an empty cart (no items scanned)");
