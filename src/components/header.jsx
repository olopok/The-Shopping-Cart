import { Link } from "react-router";
import styles from "../css/header.module.css";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.shopName}>THE SHOP</div>
          <nav className={styles.nav}>
            <Link className={styles.link} to={"/"}>HOME</Link>
            <Link className={styles.link} to={"./shop"}>SHOP</Link>
            <Link className={styles.link} to={"/contacts"}>CONTACTS</Link>
        </nav>
        <div className={styles.cartLink}><Link className={styles.link}>CART</Link></div>
      </header>
    </>
  );
}
