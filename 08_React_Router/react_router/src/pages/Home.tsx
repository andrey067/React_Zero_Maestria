import React from "react";
import { useFetch } from "../hooks/useFetch";
import "./Home.css";
import { Product } from "../models/Product";
import { Link } from "react-router-dom";

export const Home = () => {
  const url = "http://localhost:3000/products";
  const { data: items, loading } = useFetch<Product[]>(url);

  return (
    <div>
      Produtos
      <ul className="products">
        {items?.map((item) => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>R$ {item.price}</p>
            {/* rota dinamica */}
            <Link to={`/product/${item.id}`}>Detalhes</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
