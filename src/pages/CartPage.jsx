import styles from "./cartpage.module.css";

function CartPage({ products, set }) {
  const counts = {};

  products.forEach((element) => {
    if (counts[element.title]) {
      counts[element.title].count += 1;
    } else {
      counts[element.title] = {
        count: 1,
        price: element.price,
      };

      console.log(counts);
    }
  });

  function decrementItem(itemTitle) {
    const index = products.findIndex((prod) => prod.title === itemTitle);
    if (index !== -1) {
      set((prev) => prev.filter((_, i) => i !== index));
    }
  }

  function addItem(itemTitle) {
    const itemToAdd = products.find((prod) => prod.title === itemTitle);
    if (itemToAdd) {
      set((prev) => [...prev, itemToAdd]);
    }
  }
  function deleteItem(itemTitle) {
    set((prev) => prev.filter((prod) => prod.title !== itemTitle));
  }
  return (
    <div className={`${styles.wrapper} page`}>
      <div className={styles.checkoutCont}>
        <p>Shopping Cart</p>
        {products.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div className={styles.itemz}>
            {Object.entries(counts).map(([title, { count, price }]) => {
              const currItem = products.filter((prod) => prod.title === title);
              return (
                <div key={title} className={styles.eachItemCont}>
                  <img src={currItem[0].imgurl} alt="" />
                  <p>{title + " x " + count}</p>
                  <div className={styles.btncont}>
                    <button
                      className={styles.addRemoveBtns}
                      onClick={() => addItem(title)}
                    >
                      +
                    </button>
                    <button
                      className={styles.addRemoveBtns}
                      onClick={() => decrementItem(title)}
                    >
                      -
                    </button>
                    <button
                      className={styles.addRemoveBtns}
                      onClick={() => deleteItem(title)}
                    >
                      Del
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        <button className={styles.btn}>Checkout</button>
        <p className={styles.total}>
          Total price:{" "}
          {Object.entries(counts)
            .reduce((total, [title, { count, price }]) => {
              return total + count * price;
            }, 0)
            .toFixed(2)}
        </p>
      </div>
    </div>
  );
}

export default CartPage;
