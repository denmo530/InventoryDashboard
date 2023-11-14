import { useCallback, useEffect, useState } from "react";

interface IProduct {
  name: string;
  price: number;
  productId: string;
}

export default function useProducts() {
  const [products, setProducts] = useState([]);

  const getProducts = useCallback(async () => {
    const res = await fetch("http://localhost:8000/products");
    const fetchedProducts = await res.json();
    setProducts(fetchedProducts);
  }, [setProducts]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return products;
}
