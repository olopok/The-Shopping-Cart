import { useState, useEffect } from "react";
import styles from "../css/cards.module.css";

export default function Prod() {
  const [products, setProducts] = useState([]);

  function itemsQuantity(product, quantity) {
    const newProduct = { ...product, quantity };
    return newProduct;
  }

  function handleOnChange(e, id) {
    const updatedProducts = products.map((p) =>
      p.id === id ? { ...p, quantity: e.target.value } : p,
    );
    setProducts(updatedProducts);
  }

  function handleOnClick(e, id) {
    const string = e.target.name;

    products.map((p) => {
      if (p.id === id && string === "increment") {
        p.quantity++;
        const inputField = e.target.previousElementSibling;
        inputField.value = p.quantity;
      } else if (p.id === id && string === "decrement") {
        if (p.quantity <= 1) {
          p.quantity = 1;
        } else {
          p.quantity--;
          const inputField = e.target.nextElementSibling;
          inputField.value = p.quantity;
        }
      } else return p;
    });
    console.log(products);
  }

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.map((p) => itemsQuantity(p, 1))));
  }, []);

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
          <button
            id={styles.decrement}
            name="decrement"
            onClick={(e) => handleOnClick(e, product.id)}
          >
            -
          </button>
          <input
            type="text"
            name="numberItems"
            value={product.quantity}
            onChange={(e) => handleOnChange(e, product.id)}
          />
          <button
            id={styles.increment}
            name="increment"
            onClick={(e) => handleOnClick(e, product.id)}
          >
            +
          </button>
        </div>
        <button id={styles.addToChart}>Add to chart</button>
      </div>
    </section>
  ));

  return <div className={styles.cardsContainer}>{prodList}</div>;
}
