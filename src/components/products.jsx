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
        <div className={styles.imageWrapper}>
          <img
            src={product.image}
            alt="product image"
            className={styles.image}
          ></img>
        </div>
        <span>
          {" "}
          <b>Price: £{product.price}</b>
        </span>
        <p className={styles.textDescription}>
          <b>Description:</b> <br />
          {product.description}
        </p>
        <p>
          <b>Category:</b> {product.category}
        </p>
      </div>
    </section>
  ));
  return <div className={styles.cardsContainer}>{prodList}</div>;
}
