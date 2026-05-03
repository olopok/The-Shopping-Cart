import { useState, useEffect } from "react";

export default function Prod() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  const prodList = products.map((product) => (
    <li key={product.id}>
      <p>
        Id: {product.id} <br /> Title: {product.title}
        <br />
        Price: £{product.price}
        <br />
        Description: {product.description}
        <br />
        Category: {product.description}
        <br />
        Image: {product.image}
      </p>
    </li>
  ));
  return <ul>{prodList}</ul>;
}
