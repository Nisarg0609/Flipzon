import { useEffect, useMemo } from "react";
import Header from "../components/Header";
import Pagination from "../components/Pagination";
import Sidebar from "../components/Sidebar";
import ProductGrid from "../features/Product/ProductGrid";
import ProductFilter from "../features/Product/ProductFilter";
import useProducts from "../features/Product/useProducts";
import useCategories from "../features/Product/useCategories";
import { useFilterContext } from "../context/FilterContext";

const ITEM_PER_PAGE = 8;

const ProductList = () => {
  const {
    currentPage,
    setCurrentPage,
    selectedBrands,
    selectedCategories,
    appliedPriceRange,
    searchQuery,
    setSearchQuery,
  } = useFilterContext();

  const categories = useCategories();
  const { allProducts, loading, error } = useProducts(selectedCategories);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedBrands, appliedPriceRange, selectedCategories, searchQuery]);

  const brands = useMemo(
    () => [...new Set(allProducts.map((p) => p.brand).filter(Boolean))].sort(),
    [allProducts],
  );

  const filteredProducts = useMemo(() => {
    let result = [...allProducts];
    if (searchQuery.trim())
      result = result.filter((p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    if (selectedBrands.length > 0)
      result = result.filter((p) => selectedBrands.includes(p.brand));
    if (appliedPriceRange.min)
      result = result.filter((p) => p.price >= Number(appliedPriceRange.min));
    if (appliedPriceRange.max)
      result = result.filter((p) => p.price <= Number(appliedPriceRange.max));
    return result;
  }, [allProducts, selectedBrands, appliedPriceRange, searchQuery]);

  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEM_PER_PAGE;
    return filteredProducts.slice(start, start + ITEM_PER_PAGE);
  }, [filteredProducts, currentPage]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="flex gap-6 max-w-screen-xl mx-auto px-4 py-6">
        <Sidebar>
          <ProductFilter categories={categories} brands={brands} />
        </Sidebar>
        <main className="flex-1 min-w-0">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl p-4 mb-4">
              ⚠️ {error}
            </div>
          )}
          {loading && (
            <div className="flex items-center justify-center py-20">
              <p className="text-gray-500 text-sm">Loading...</p>
            </div>
          )}
          {!loading && !error && (
            <>
              {paginatedProducts.length === 0 ? (
                <div className="bg-white rounded-xl p-12 text-center shadow-sm border border-gray-100">
                  <p className="text-gray-500 font-medium">No products found</p>
                  <p className="text-gray-400 text-sm mt-1">Try adjusting your filters</p>
                </div>
              ) : (
                <ProductGrid
                  products={paginatedProducts}
                  totalProducts={filteredProducts.length}
                />
              )}
              <Pagination
                totalPages={Math.ceil(filteredProducts.length / ITEM_PER_PAGE)}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default ProductList;
