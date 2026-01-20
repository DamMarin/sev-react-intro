import type {Product} from "@/schemas/products.ts";

const API_URL = import.meta.env.VITE_API_URL;
const TENANT_ID = import.meta.env.VITE_TENANT_ID;

export async function getProducts(): Promise<Product[]> {
  const res = await fetch(`${API_URL}/tenants/${TENANT_ID}/products/`,
    {
      method: "GET",
      headers: {"Content-Type": "application/json"},
    }
    );
  if (!res.ok) throw new Error("Failed to fetch products");
  return await res.json();
}

export async function getProduct(id: number): Promise<Product> {
  const res = await fetch(`${API_URL}/tenants/${TENANT_ID}/products/${id}`);
  if (!res.ok) throw new Error("Failed to fetch products");
  return await res.json();
}

export async function createProduct(data: Omit<Product, "id">) {
  const res = await fetch(`${API_URL}/tenants/${TENANT_ID}/products/`,{
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to create product");
  return await res.json();
}

export async function updateProduct(data: Partial<Product>, id: number): Promise<Product>{
  const res = await fetch(`${API_URL}/tenants/${TENANT_ID}/products/${id}`, {
    method: "PUT",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to update product");
  return await res.json();
}

export async function deleteProduct(id: number): Promise<void> {
  const res = await fetch(`${API_URL}/tenants/${TENANT_ID}/products/${id}`, {
    method: "DELETE"
  });
  if (!res.ok) throw new Error("Failed to delete product");
}