import { useState, useEffect } from "react";
import styles from "../css/cards.module.css";

export default function Prod() {
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);

  function itemsQuantity(product, quantity) {
    const newProduct = { ...product, quantity };
    return newProduct;
  }

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.map((p) => itemsQuantity(p, quantity))));
  }, [quantity]);

  const prodList = products.map((product) => (
    <section key={product.id} className={styles.mainSection}>
      <div className={styles.card}>
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
        <div className={styles.itemsNumber}>
          <b>Quantity:</b>
          <button id={styles.decrement}>-</button>
          <input type="text" defaultValue={product.quantity} />
          <button id={styles.increment}>+</button>
        </div>
        <button id={styles.addToChart}>Add to chart</button>
      </div>
    </section>
  ));
  console.log(products);

  return <div className={styles.cardsContainer}>{prodList}</div>;
}
