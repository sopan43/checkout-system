import { PricingRule } from "../types";

export const threeForTwoAppleTV: PricingRule = (items, prices) => {
  const sku = "atv";
  const quantity = items.get(sku) || 0;

  const discountSets = Math.floor(quantity / 3);
  const remainingItems = quantity % 3;

  items.delete(sku); // Remove processed items

  return (discountSets * 2 * prices[sku]) + (remainingItems * prices[sku]);
};
