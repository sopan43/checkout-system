import { Checkout } from "../src/checkout";
import { pricingRules } from "../src/pricingRules";
import { prices } from "../src/products";

describe("Checkout System", () => {
  let co: Checkout;

  beforeEach(() => {
    co = new Checkout(pricingRules, prices);
  });

  it("applies 3-for-2 deal on Apple TVs", () => {
    co.scan("atv");
    co.scan("atv");
    co.scan("atv");
    co.scan("vga");
    expect(co.total()).toBe(249.00); // 3 Apple TVs (3-for-2) + 1 VGA adapter
  });

  it("applies bulk discount on Super iPads", () => {
    co.scan("ipd");
    co.scan("ipd");
    co.scan("ipd");
    co.scan("ipd");
    co.scan("ipd");
    expect(co.total()).toBe(2499.95); // Bulk discount on iPads
  });

  it("handles mixed discounts correctly", () => {
    co.scan("atv");
    co.scan("ipd");
    co.scan("ipd");
    co.scan("atv");
    co.scan("ipd");
    co.scan("ipd");
    co.scan("ipd");
    expect(co.total()).toBe(2718.95); // Mixed discounts for Apple TVs and iPads
  });

  it("does not apply any discounts for standard items", () => {
    co.scan("mbp");
    co.scan("vga");
    expect(co.total()).toBe(1429.99); // Standard pricing with no discounts
  });

  it("handles edge case of no bulk discount on iPads and 3-for-2 deal on Apple TVs", () => {
    co.scan("atv");
    co.scan("atv");
    co.scan("atv");
    co.scan("ipd");
    co.scan("ipd");
    co.scan("ipd");
    co.scan("ipd");
    expect(co.total()).toBe(2418.96); // Apple TVs 3-for-2 but no bulk discount on iPads
  });

  it("handles a random assortment of items", () => {
    co.scan("vga");
    co.scan("atv");
    co.scan("ipd");
    co.scan("vga");
    co.scan("mbp");
    co.scan("atv");
    co.scan("vga");
    expect(co.total()).toBe(2258.98); // Random assortment with mixed discounts
  });

  it("does not apply any discounts for fewer than 3 Apple TVs", () => {
    co.scan("atv");
    co.scan("atv");
    expect(co.total()).toBe(219.00); // No discounts for fewer than 3 Apple TVs
  });

  it("returns 0 for an empty cart", () => {
    expect(co.total()).toBe(0.00); // Empty cart
  });

  it("applies only bulk discount when no other promotions are valid", () => {
    co.scan("ipd");
    co.scan("ipd");
    co.scan("ipd");
    co.scan("ipd");
    co.scan("ipd");
    co.scan("ipd");
    expect(co.total()).toBe(2999.94); // Bulk discount applied
  });

  it("applies only 3-for-2 when no other promotions are valid", () => {
    co.scan("atv");
    co.scan("atv");
    co.scan("atv");
    co.scan("atv");
    expect(co.total()).toBe(328.50); // 3-for-2 for Apple TVs, 1 extra Apple TV at full price
  });

  it("does not apply any discounts when pricing rules are empty", () => {
    const noRules = new Checkout([], prices);
    noRules.scan("atv");
    noRules.scan("atv");
    noRules.scan("vga");
    expect(noRules.total()).toBe(249.00); // No discounts applied
  });
});
