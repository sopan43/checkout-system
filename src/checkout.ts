import { PricingRule } from "./types";

export class Checkout {
  private items: Map<string, number>;
  private pricingRules: PricingRule[];
  private prices: Record<string, number>;

  constructor(pricingRules: PricingRule[], prices: Record<string, number>) {
    this.items = new Map<string, number>();
    this.pricingRules = pricingRules;
    this.prices = prices;
  }

  scan(item: string): void {
    this.items.set(item, (this.items.get(item) || 0) + 1);
  }

  total(): number {
    let total = 0;

    // Apply pricing rules
    for (const rule of this.pricingRules) {
      total += rule(this.items, this.prices);
    }

    // Calculate the remaining items at standard price
    for (const [sku, quantity] of this.items.entries()) {
      total += (this.prices[sku] || 0) * quantity;
    }

    return parseFloat(total.toFixed(2));
  }
}
