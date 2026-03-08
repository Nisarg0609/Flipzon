import axios from "axios";
import { useEffect, useState } from "react";

function useProducts(selectedCategories) {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        setError(null);

        if (selectedCategories.length === 0) {
          const res = await axios.get(`https://dummyjson.com/products?limit=194`);
          setAllProducts(res.data.products);
        } else {
          const responses = await Promise.all(
            selectedCategories.map((slug) =>
              axios.get(`https://dummyjson.com/products/category/${slug}`),
            ),
          );
          setAllProducts(responses.flatMap((r) => r.data.products));
        }
      } catch (err) {
        setError("Failed to load products. Please try again.");
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, [JSON.stringify(selectedCategories)]);

  return { allProducts, loading, error };
}

export default useProducts;
