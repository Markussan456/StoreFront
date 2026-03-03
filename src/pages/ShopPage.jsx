import styles from "./shoppage.module.css";
import ProductCards from "../components/productCard/card";
import { useEffect, useState } from "react";

function ShopPage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.slice(0, 6));
      });
  }, []);

  return (
    <div className={`${styles.wrapper} page`}>
      <h1>Welcome To the Shop</h1>
      <div className={styles.product}>
        {products.map((product) => (
          <ProductCards
            key={product.id}
            title={product.title}
            imgurl={product.image}
            price={product.price}
            description={product.description}
          ></ProductCards>
        ))}
      </div>
    </div>
  );
}

export default ShopPage;
