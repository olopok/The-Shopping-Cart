import { useEffect } from "react";
import styles from "../css/cards.module.css";

export function ChartList(items = []) {
  return items.filter((item) => item.added === true);
}

export default function Prod({ products, setProducts }) {
  function addProperty(product, quantity, added) {
    const newProduct = { ...product, quantity, added };
    return newProduct;
  }

  function handleOnChange(e, id) {
    const value = Number(e.target.value) || 1;

    setProducts((prevProducts) =>
      prevProducts.map((p) =>
        p.id === id ? { ...p, quantity: Math.max(1, value) } : p,
      ),
    );
  }

  function handleOnClick(e, id) {
    const action = e.target.name;

    setProducts((prevProducts) =>
      prevProducts.map((p) => {
        if (p.id !== id) return p;

        if (action === "increment") {
          return { ...p, quantity: p.quantity + 1 };
        }

        if (action === "decrement") {
          return { ...p, quantity: Math.max(1, p.quantity - 1) };
        }

        if (action === "addToChart") {
          return { ...p, added: true };
        }

        return p;
      }),
    );
  }

  useEffect(() => {
    if (products.length > 0) return;

    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.map((p) => addProperty(p, 1, false))));
  }, [products.length, setProducts]);

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
        <button
          id={styles.addToChart}
          name="addToChart"
          onClick={(e) => handleOnClick(e, product.id)}
        >
          Add to chart
        </button>
      </div>
    </section>
  ));

  return <div className={styles.cardsContainer}>{prodList}</div>;
}
