import styles from "./cartpage.module.css";

function CartPage({ products }) {
  return (
    <div className={`${styles.wrapper} page`}>
      {products.map((product) => {
        return <p>{product.title}</p>;
      })}
    </div>
  );
}

export default CartPage;
