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
  return <div>ProductDetails {product && product.title}</div>;
}
