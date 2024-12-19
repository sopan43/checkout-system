import { PricingRule } from "../types";

export const bulkDiscountSuperIPad: PricingRule = (items, prices) => {
  const sku = "ipd";
  const quantity = items.get(sku) || 0;

  if (quantity > 4) {
    items.delete(sku); // Remove processed items
    return quantity * 499.99;
  }

  const total = quantity * prices[sku];
  items.delete(sku); // Remove processed items
  return total;
};
