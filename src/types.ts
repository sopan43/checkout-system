export type PricingRule = (items: Map<string, number>, prices: Record<string, number>) => number;
export type ProductCatalog = Record<string, { name: string; price: number }>;
