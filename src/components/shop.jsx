import { useOutletContext } from "react-router";
import Prod from "./products";
import styles from "../css/shop.module.css";

export default function Shop() {
  const { products, setProducts } = useOutletContext();

  return (
    <>
      <h1>This is shop page</h1>{" "}
      <div className={styles.mainContent}>
        <Prod products={products} setProducts={setProducts} />{" "}
      </div>
    </>
  );
}
