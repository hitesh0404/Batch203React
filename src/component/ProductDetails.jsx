import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import useGetData from './useGetData';
export default function ProductDetails() {
  let { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    let fillData = async () => {
      await fetch("https://dummyjson.com/products/" + id)
        .then((res) => res.json())
        .then((data) => {
          setProduct(data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fillData();
  }, [id]);
  return (
    <>
      <div className="container">
        <div className="card text-start">
          <img
            className="card-img-top"
            src={product.thumbnail}
            height={300 + "px"}
            alt=""
          />
          <div className="card-body">
            <h4 className="card-title">
              {product.title} <h3>₹ {product.price * 87}</h3>{" "}
            </h4>

            <p className="card-text">{product.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
