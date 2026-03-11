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
  id = "fakeid",
}) {
  const item = {
    id: id,
    title: title,
    imgurl: imgurl,
    imgalt: imgalt,
    price: price,
    description: description,
  };
  function addtoCart() {
    OnAddToCart((prev) => [...prev, item]);
  }
  function deleteItem() {
    DecrementItem((prev) => {
      const index = prev.findIndex((arr) => arr.id === item.id);
      if (index === -1) return prev;
      const newCart = [...prev];
      newCart.splice(index, 1);
      return newCart;
    });
    console.log("-1 " + item.title);
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
        <input type="number" placeholder="Number of items you want" />
        <button onClick={IncrementItem}>+</button>
        <button onClick={deleteItem}>-</button>
      </div>

      <button onClick={addtoCart}>Add to Cart</button>
    </div>
  );
}
