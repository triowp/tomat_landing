// allow overriding base URL via environment variable (set VITE_API_BASE)
const BASE_URL = import.meta.env.VITE_API_BASE || "http://localhost:8000";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  unit: string;
  stock: number;
  image_url?: string;
}

export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch(`${BASE_URL}/products`);
  return res.json();
}