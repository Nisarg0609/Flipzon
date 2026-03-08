import ProductCard from "./ProductCard";

const ProductGrid = ({ products, totalProducts }) => {
  return (
    <div>
      <h4 className="mb-4 font-medium">{totalProducts} Products</h4>
      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 list-none">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default ProductGrid;
