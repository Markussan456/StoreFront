import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
function NavBar({ totalCart }) {
  return (
    <>
      <nav className={styles.navbar}>
        <NavLink className={styles.link} to="/">
          <p>Home</p>
        </NavLink>
        <NavLink className={styles.link} to="/shop">
          <p>Shop</p>
        </NavLink>
        <NavLink className={styles.link} to="/cart">
          <p>Cart {totalCart}</p>
        </NavLink>
      </nav>
    </>
  );
}
export default NavBar;
