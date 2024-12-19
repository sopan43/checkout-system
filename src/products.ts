import { ProductCatalog } from "./types";

export const productCatalog: ProductCatalog = {
  ipd: { name: "Super iPad", price: 549.99 },
  mbp: { name: "MacBook Pro", price: 1399.99 },
  atv: { name: "Apple TV", price: 109.50 },
  vga: { name: "VGA adapter", price: 30.00 },
};

export const prices = Object.fromEntries(
  Object.entries(productCatalog).map(([sku, product]) => [sku, product.price])
);
