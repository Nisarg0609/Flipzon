import { createContext, useContext, useState } from "react";

const FilterContext = createContext(null);

export default function FilterProvider({ children }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: null, max: null });
  const [appliedPriceRange, setAppliedPriceRange] = useState({ min: null, max: null });
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <FilterContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        selectedBrands,
        setSelectedBrands,
        selectedCategories,
        setSelectedCategories,
        priceRange,
        setPriceRange,
        appliedPriceRange,
        setAppliedPriceRange,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export function useFilterContext() {
  return useContext(FilterContext);
}
