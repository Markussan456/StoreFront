import styles from "./shoppage.module.css";
import ProductCards from "../components/productCard/card";
import { useEffect, useState } from "react";

function ShopPage({ AddItem }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.slice(0, 6));
        setLoading(false);
      });
  }, []);

  return (
    <div className={`${styles.wrapper} page`}>
      <h1>Welcome To the Shop</h1>
      <div className={styles.product}>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          products.map((product) => (
            <ProductCards
              key={product.id}
              title={product.title}
              imgurl={product.image}
              price={product.price}
              description={product.description}
              OnAddToCart={AddItem}
              DecrementItem={AddItem}
              id={product.id}
            ></ProductCards>
          ))
        )}
      </div>
    </div>
  );
}

export default ShopPage;
