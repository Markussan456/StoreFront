import { useState } from "react";
import styles from "../productCard/card.module.css";
export default function CardElem({
  title = "Test Product",
  imgurl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBi04ssZpjzBAq4L59FL7dtrs9qyzsS3IruA&s",
  imgalt = "test image",
  price = "$9.99",
  description = "This is a test description",
  OnAddToCart = () => console.log("added to cart"),
  id = "fakeid",
}) {
  const [inpVal, setVal] = useState("");
  const item = {
    id: id,
    title: title,
    imgurl: imgurl,
    imgalt: imgalt,
    price: price,
    description: description,
  };

  function incrementItem() {
    setVal((prev) => {
      if (prev === "") {
        return "1";
      } else {
        return String(parseInt(prev) + 1);
      }
    });
  }
  function addtoCart() {
    console.log(inpVal);
    for (let i = 1; i <= parseInt(inpVal); i++) {
      OnAddToCart((prev) => [...prev, item]);
    }
    setVal("");
  }
  function deleteItem() {
    setVal((prev) => {
      if (prev !== "0" && prev !== "") {
        return String(parseInt(prev) - 1);
      } else {
        return prev;
      }
    });
  }
  return (
    <div className={styles.card}>
      <p>{title}</p>
      <div className={styles.imgcont}>
        <img src={imgurl} alt={imgalt} />
      </div>

      <p>{price} $</p>
      <p className={styles.desc}>{description}</p>
      <div className={styles.inputs}>
        <input
          value={inpVal}
          type="number"
          min={0}
          onChange={(e) => setVal(e.target.value)}
          placeholder="Number of items you want"
        />
        <button onClick={incrementItem}>+</button>
        <button onClick={deleteItem}>-</button>
      </div>

      <button onClick={addtoCart}>Add to Cart</button>
    </div>
  );
}
