import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import useProduct from "../features/Product/useProduct";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { product, loading, error } = useProduct(id);

  if (loading)
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-gray-500 text-sm">Loading...</p>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-red-500 text-sm">{error}</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-4 py-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-900 bg-white border border-gray-200 px-3 py-1.5 rounded-lg shadow-sm hover:shadow transition-all mb-6"
        >
          ← Back
        </button>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/5 bg-gray-50 flex items-center justify-center p-10 border-r border-gray-100">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="max-w-full max-h-80 object-contain"
              />
            </div>

            <div className="md:w-3/5 p-8 flex flex-col gap-4">
              <div>
                <span className="text-xs text-blue-600 uppercase tracking-wider font-medium">
                  {product.category}
                </span>
                <h1 className="text-2xl font-bold text-gray-900 mt-1">{product.title}</h1>
              </div>

              <p className="text-3xl font-bold text-gray-900">${product.price}</p>

              <p className="text-sm text-gray-500">
                ⭐ {product.rating} · {product.reviews?.length || 0} reviews
              </p>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-50 rounded-lg p-3">
                  <span className="text-xs text-gray-400 uppercase tracking-wide block mb-0.5">
                    Brand
                  </span>
                  <span className="font-semibold text-sm text-gray-800">
                    {product.brand}
                  </span>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <span className="text-xs text-gray-400 uppercase tracking-wide block mb-0.5">
                    Stock
                  </span>
                  <span
                    className={`font-semibold text-sm ${product.stock > 0 ? "text-green-600" : "text-red-500"}`}
                  >
                    {product.stock > 0 ? `${product.stock} units` : "Out of stock"}
                  </span>
                </div>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed">
                {product.description}
              </p>

              <button className="mt-2 w-fit bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-6 rounded-xl transition-colors duration-150">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
