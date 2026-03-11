import { useEffect, useState } from "react";
import styles from "./HomePage.module.css";
const imglinks = [
  "https://wallpapercave.com/wp/wp12401812.jpg",
  "https://wallpapers.com/images/hd/ufc-4k-3zyb715f0qsxoe79.jpg",
  "https://wallpapercave.com/wp/wp12401932.jpg",
  "https://wallpapercave.com/wp/wp12401812.jpg",
];
function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev === imglinks.length - 1) {
          // at the duplicate, schedule a silent reset
          setTimeout(() => {
            setIsTransitioning(false);
            setCurrentIndex(0);
            setTimeout(() => setIsTransitioning(true), 50);
          }, 500); // wait for transition to finish (matches your 0.5s)
        }
        console.log(currentIndex);
        return prev + 1;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className={`${styles.wrapper} page`}>
      <h1>Welcome To the Store</h1>
      <div className={styles.caraselwrapper}>
        <div
          style={{
            transform: `translateX(-${Math.min(currentIndex, imglinks.length - 1) * 100}%)`,
            transition: isTransitioning ? "transform 0.5s ease" : "none",
          }}
          className={styles.imgcarousel}
        >
          {imglinks.map((link, index) => (
            <img key={index} src={link} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
