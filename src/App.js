import React, { useState } from "react";
import ProductList from "./components/ProductList";

const dummyData = [
  {
    id: 1,
    name: "Jerkin",
    category: "clothing",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4d194k1DC_y9fL5AeuqS_6gDPcMDgYz1nBg&usqp=CAU",
    price: 499.0,
  },
  {
    id: 2,
    name: "Shirt",
    category: "clothing",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc32xRMn9yVx1i_TAEKqoYdsAJI9XqjO9l1w&usqp=CAU",
    price: 299.0,
  },
  {
    id: 3,
    name: "Checks Shirt",
    category: "clothing",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBEhPlsewoWM2zNPSjfn5nsfgV7sb1Uo_-Qw&usqp=CAU",
    price: 350.0,
  },
  {
    id: 4,
    name: "Coat",
    category: "clothing",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSATOV1oqOOMLstaIaBOmqUhfnfiysA1Hv4ZQ&usqp=CAU",
    price: 990.0,
  },
  {
    id: 5,
    name: "Kurta",
    category: "clothing",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUgIVl1XRFfgZYYCVQj25j6ujQZs453NkIoQ&usqp=CAU",
    price: 770.0,
  },
  {
    id: 6,
    name: "Formals",
    category: "clothing",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnVl3huxLeDmVglGqoyRKLg2dyyVuVO58D0HNCu2DhyUX-_1o7K_6qVk4PbrbLnmZ7Vc&usqp=CAU",
    price: 500.0,
  },
  {
    id: 7,
    name: "Speaker",
    category: "electronics",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmclYoLoxt8ODZhgbuy_ocSga6A9LuBFGUBg&usqp=CAU",
    price: 2999.0,
  },
  {
    id: 8,
    name: "Iron",
    category: "electronics",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmM-WtOesn7necnARyB2KG4-0Fxkp30t-4ew&usqp=CAU",
    price: 800.0,
  },
  {
    id: 9,
    name: "TV",
    category: "electronics",
    image:
      "https://d3juy0zp6vqec8.cloudfront.net/images/product/thumb/lg-32LED111.webp",
    price: 35000.0,
  },
  {
    id: 10,
    name: "Oven",
    category: "electronics",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzNUn_LZ323sCaSYC6tgN1IEADfWjxp_zLIw&usqp=CAU",
    price: 17000.0,
  },
  {
    id: 11,
    name: "Fridge",
    category: "electronics",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZfk5xyovxCyj_01jxpbP8wbbEP66_D43txA&usqp=CAU",
    price: 20000.0,
  },
  {
    id: 12,
    name: "Mobile",
    category: "electronics",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQthwPdx58wWt1XXIXA8NyCVGGlFec6IRmqXA&usqp=CAU",
    price: 14599.0,
  },
];

const App = () => {
  const [filters, setFilters] = useState({
    category: "",
  });

  const [sortOption, setSortOption] = useState("price-asc");

  const handleFilterChange = (key, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [key]: value }));
  };

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  return (
    <div className="mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center text-emerald-400">
        E-Commerce Page
      </h1>
      <div className="">
        <ProductList
          products={dummyData}
          filters={filters}
          sortOption={sortOption}
          onFilterChange={handleFilterChange}
          onSortChange={handleSortChange}
        />
      </div>
    </div>
  );
};

export default App;
