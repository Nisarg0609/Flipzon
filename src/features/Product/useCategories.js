import axios from "axios";
import { useEffect, useState } from "react";

function useCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/categories`)
      .then((res) => setCategories(res.data))
      .catch((err) => console.error("Failed to fetch categories:", err));
  }, []);

  return categories;
}

export default useCategories;
