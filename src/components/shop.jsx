import Prod from "./products";
import styles from "../css/shop.module.css";

export default function Shop() {
  return (
    <>
      <h1>This is shop page</h1>{" "}
      <div className={styles.mainContent}>
        <Prod />{" "}
      </div>
    </>
  );
}
