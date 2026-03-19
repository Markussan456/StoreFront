import styles from "./cartpage.module.css";

function CartPage({ products }) {
  const counts = {};

  products.forEach((element) => {
    if (counts[element.title]) {
      counts[element.title] += 1;
    } else {
      counts[element.title] = 1;
    }
  });
  return (
    <div className={`${styles.wrapper} page`}>
      <div className={styles.checkoutCont}>
        <p>Shopping Cart</p>
        <div className={styles.itemz}>
          {Object.entries(counts).map(([title, amount]) => {
            const currItem = products.filter((prod) => prod.title === title);
            return (
              <div className={styles.eachItemCont}>
                <img src={currItem[0].imgurl} alt="" />
                <p>{title + " x " + amount}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CartPage;
