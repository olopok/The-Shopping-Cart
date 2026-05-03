import { Link } from "react-router";
import styles from "../css/header.module.css";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <div>THE SHOP</div>
          <nav className={styles.nav}>
            <Link className={styles.link} to={"/"}>HOME</Link>
            <Link className={styles.link} to={"./shop"}>SHOP</Link>
            <Link className={styles.link}>CONTACTS</Link>
          </nav>
      </header>
    </>
  );
}
