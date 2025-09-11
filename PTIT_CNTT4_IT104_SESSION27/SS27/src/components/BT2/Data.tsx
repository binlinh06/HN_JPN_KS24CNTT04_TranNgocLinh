export type Product = {
  id: number;
  name: string;
  price: string;
  des: string;
};

export const products: Product[] = [
  { id: 1, name: "Laptop", price: "35,000,000 VND", des: "Hay" },
  { id: 2, name: "Laptop Gaming", price: "40,000,000 VND", des: "Mạnh mẽ" },
  { id: 3, name: "Macbook Pro", price: "50,000,000 VND", des: "Sang trọng" },
  { id: 4, name: "PC", price: "60,000,000 VND", des: "Đẹp" },
  { id: 5, name: "IP", price: "80,000,000 VND", des: "Sang" },
];
