import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
function NavBar() {
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
          <p>Cart</p>
        </NavLink>
      </nav>
    </>
  );
}
export default NavBar;
