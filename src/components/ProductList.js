import React, { useState } from "react";
import ProductCard from "./ProductCard";

const ProductList = ({
  products,
  filters,
  sortOption,
  onFilterChange,
  onSortChange,
}) => {
  const filteredProducts = filterProducts(products, filters);
  const sortedProducts = sortProducts(filteredProducts, sortOption);

  return (
    <div className="flex ">
      <div className="w-1/4 p-4">
        <h2 className="text-xl font-bold mb-4">Filters</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            value={filters.category}
            onChange={(e) => onFilterChange("category", e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          >
            <option value="">All</option>
            <option value="clothing">Clothing</option>
            <option value="electronics">Electronics</option>
          </select>
        </div>

        <h2 className="text-xl font-bold mb-4">Sort</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Sort By
          </label>
          <select
            value={sortOption}
            onChange={(e) => onSortChange(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          >
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name-asc">Name: A to Z</option>
            <option value="name-desc">Name: Z to A</option>
          </select>
        </div>
      </div>
      <div className="w-3/4">
        <div className="grid grid-cols-3 gap-4">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

const filterProducts = (products, filters) => {
  return products.filter((product) => {
    if (filters.category && product.category !== filters.category) {
      return false;
    }

    return true;
  });
};

const sortProducts = (products, sortOption) => {
  return products.sort((a, b) => {
    switch (sortOption) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "name-asc":
        return a.name.localeCompare(b.name);
      case "name-desc":
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });
};

export default ProductList;
