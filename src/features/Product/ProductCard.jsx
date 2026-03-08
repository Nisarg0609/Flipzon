import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <li
      onClick={() => navigate(`/product/${product.id}`)}
      className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer overflow-hidden"
    >
      <div className="bg-gray-50 h-44 flex items-center justify-center p-4">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="max-h-full max-w-full object-contain"
          loading="lazy"
        />
      </div>
      <div className="p-3.5">
        <h3 className="font-semibold text-sm text-gray-800 truncate mb-1.5">
          {product.title}
        </h3>
        <div className="flex items-center gap-2 justify-between">
          <span className="text-blue-600 font-bold text-base">${product.price}</span>
          <div className="flex items-center gap-1">
            <span className="text-yellow-400 text-sm">★</span>
            <span className="text-gray-500 text-xs">({product.rating})</span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProductCard;
