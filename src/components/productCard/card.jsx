import styles from "../productCard/card.module.css";
export default function CardElem({
  title = "Test Product",
  imgurl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBi04ssZpjzBAq4L59FL7dtrs9qyzsS3IruA&s",
  imgalt = "test image",
  price = "$9.99",
  description = "This is a test description",
  OnAddToCart = () => console.log("added to cart"),
  DecrementItem = () => console.log("-1 " + title),
  IncrementItem = () => console.log("+1 " + title),
}) {
  return (
    <div className={styles.card}>
      <p>{title}</p>
      <img src={imgurl} alt={imgalt} />
      <p>{price}</p>
      <p>{description}</p>
      <div className={styles.inputs}>
        <input type="number" placeholder="Number of items you want" />
        <button onClick={IncrementItem}>+</button>
        <button onClick={DecrementItem}>-</button>
      </div>

      <button onClick={OnAddToCart}>Add to Cart</button>
    </div>
  );
}
