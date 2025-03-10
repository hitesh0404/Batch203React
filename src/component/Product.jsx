import React, { useState, useEffect } from "react";
import useGetData from "./useGetData";
import Filters from "./Filters";

function Product(props) {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filter, setFilter] = useState({ category: "", price: "" });

  // Fetch products and set it to state
  const { data, error } = useGetData({
    url: "https://dummyjson.com/products",
  });

  useEffect(() => {
    if (data && data.products) {
      // Fix: Extract products from response
      let filtered = [...data.products]; // Corrected products extraction

      // Apply category filter
      if (filter.category) {
        filtered = filtered.filter(
          (product) => product.category === filter.category
        );
      }

      // Apply price filter (assuming "low" means price < 50 and "high" means price >= 50)
      if (filter.price === "low") {
        filtered = filtered.filter((product) => product.price < 50);
      } else if (filter.price === "high") {
        filtered = filtered.filter((product) => product.price >= 50);
      }

      setFilteredProducts(filtered);
    }
  }, [filter, data]);

  return (
    <>
      <Filters setFilter={setFilter} />
      {error && <p>Error: {error}</p>}
      <div className="row justify-content-center align-items-center g-2">
        {filteredProducts &&
          filteredProducts.map((product, index) => {
            return (
              <div key={product.id} className="card col-4 bg-dark text-primary">
                <img
                  className="card-img-top"
                  src={product.thumbnail}
                  alt={product.title}
                  height={300}
                />
                <div className="card-body">
                  <h4 className="card-title">
                    {index + 1}. {product.title}
                  </h4>
                  <p className="card-text">
                    ${product.price}. {product.category}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Product;
