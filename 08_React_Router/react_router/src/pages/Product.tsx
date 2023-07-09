import React from "react";
import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Product } from "../models/Product";

const Product = () => {
  const { id } = useParams();
  const url = "http://localhost:3000/products/" + id;
  const { data: product, loading } = useFetch<Product>(url);
  console.log("product", product);

  return (
    <>
      {loading && <p>Carregando</p>}
      {!loading && (
        <div>
          <h1>Produt</h1>
          <h2>{product && product.name}</h2>
          <p>R${product?.price}</p>
          <Link to={`product/${product?.id}/info`}>Informações</Link>
        </div>
      )}
    </>
  );
};

export default Product;
