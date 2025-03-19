import React, { useState, useEffect } from "react";
import useGetData from "./useGetData";
import SearchProduct from "./SearchProduct";

function Filters({ setFilter }) {
  const [categories, setCategories] = useState(null);
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const { data, error } = useGetData({
    url: "https://dummyjson.com/products/categories",
  });

  useEffect(() => {
    if (data && Array.isArray(data)) {
      setCategories(data); // Ensure data is an array before setting categories
    }
  }, [data]);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setFilter({ category: e.target.value, price });
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
    setFilter({ category, price: e.target.value });
  };

  return (
    <div className="filter-container">
      <h3>Filter Products</h3>
      <div>
        <label>Category: </label>
        <select value={category} onChange={handleCategoryChange}>
          <option value="">All</option>
          { categories &&
            categories.map((category, index) => (
              <option key={index} value={category.slug}>
                {category.name}
              </option>
            ))}
        </select>
      </div>
      <div>
        <label>Price: </label>
        <select value={price} onChange={handlePriceChange}>
          <option value="">All</option>
          <option value="low">Low</option>
          <option value="high">High</option>
        </select>
      </div>
      <div>
        <SearchProduct/>
      </div>
    </div>
  );
}

export default Filters;
