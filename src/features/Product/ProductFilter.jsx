import { CiSearch } from "react-icons/ci";
import FilterSection from "../../components/FilterSection";
import CheckboxList from "../../components/CheckboxList";
import { useFilterContext } from "../../context/FilterContext";

const ProductFilter = ({ categories, brands }) => {
  const {
    selectedCategories,
    setSelectedCategories,
    selectedBrands,
    setSelectedBrands,
    priceRange,
    setPriceRange,
    setAppliedPriceRange,
    searchQuery,
    setSearchQuery,
  } = useFilterContext();

  const hasFilters =
    selectedCategories.length > 0 ||
    selectedBrands.length > 0 ||
    priceRange.min ||
    priceRange.max ||
    searchQuery.trim();

  const resetFilters = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
    setPriceRange({ min: null, max: null });
    setAppliedPriceRange({ min: null, max: null });
    setSearchQuery("");
  };

  const toggleCategory = (category) =>
    setSelectedCategories((prev) =>
      prev.includes(category.slug)
        ? prev.filter((c) => c !== category.slug)
        : [...prev, category.slug],
    );

  const toggleBrand = (brand) =>
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand],
    );

  return (
    <form>
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-gray-800">Filters</h2>
        {hasFilters && (
          <button
            type="button"
            onClick={resetFilters}
            className="text-xs text-blue-600 hover:underline"
          >
            Reset all
          </button>
        )}
      </div>

      <div className="relative mb-5">
        <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
        <input
          type="search"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full border border-gray-200 rounded-lg pl-9 pr-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <FilterSection title="Categories">
        <CheckboxList
          items={categories}
          selected={selectedCategories}
          onToggle={toggleCategory}
          getKey={(c) => c.slug}
          getLabel={(c) => c.name}
          getValue={(c) => c.slug}
        />
      </FilterSection>

      <FilterSection title="Price Range">
        <div className="flex gap-2 mb-2">
          <input
            type="number"
            placeholder="Min"
            value={priceRange.min || ""}
            className="w-full border border-gray-200 rounded-lg px-2.5 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setPriceRange((prev) => ({ ...prev, min: e.target.value }))}
          />
          <input
            type="number"
            placeholder="Max"
            value={priceRange.max || ""}
            className="w-full border border-gray-200 rounded-lg px-2.5 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setPriceRange((prev) => ({ ...prev, max: e.target.value }))}
          />
        </div>
        <button
          type="button"
          onClick={() => setAppliedPriceRange({ ...priceRange })}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-1.5 px-4 rounded-lg cursor-pointer transition-colors"
        >
          Apply
        </button>
      </FilterSection>

      <FilterSection title="Brands">
        <CheckboxList
          items={brands}
          selected={selectedBrands}
          onToggle={toggleBrand}
          getKey={(b) => b}
          getLabel={(b) => b}
          getValue={(b) => b}
        />
      </FilterSection>
    </form>
  );
};

export default ProductFilter;
