import { useState, useEffect } from "react";
import styles from "../css/cards.module.css";

export default function Prod() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  const prodList = products.map((product) => (
    <section className={styles.mainSection}>
      <div key={product.id} className={styles.card}>
        <img
          src={product.image}
          alt="product image"
          className={styles.image}
        ></img>
        <span> <b>Price: £{product.price}</b></span>
        <p>Description: {product.description}</p>
        <p>Category: {product.category}</p>
      </div>
    </section>
  ));
  return <div>{prodList}</div>;
}
