import StockSlide1 from "@/assets/Stocks/StocksSwiper/stockSlide1.svg";
import StockSlide2 from "@/assets/Stocks/StocksSwiper/stockSlide2.svg";
import StockSlide3 from "@/assets/Stocks/StocksSwiper/stockSlide3.svg";
import styles from "@/components/features/Stocks/Stocks.module.scss";
import { useState } from "react";
import Human from "@/assets/Main/human.svg";
import Bonus from "@/assets/Stocks/bonus.svg";

export default function Stocks() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const slides = [
    { src: StockSlide1, alt: "Stock Slide 1", title: "акции" },
    { src: StockSlide2, alt: "Stock Slide 2", title: "сторис" },
    { src: StockSlide3, alt: "Stock Slide 3", title: "акции" },
    { src: StockSlide3, alt: "Stock Slide 4", title: "акции" },
  ];
  return (
    <div className={styles.stocks}>
      <div className={styles.stocksTitle}>Акции и спец предложения</div>
      <div className={styles.stocksSwiper}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.swiperContainer} ${
              activeIndex === index ? styles.active : ""
            }`}
            onClick={() => setActiveIndex(index)}
          >
            <img
              className={styles.swiperPhoto}
              src={slide.src}
              alt={slide.alt}
            />
            <div className={styles.slideTitle}>{slide.title}</div>
          </div>
        ))}
      </div>
      <div className={styles.buttons}>
        <div className={styles.buttonBlock}>
          <div className={styles.buttonBlockTitle}>
            Бонусы <img src={Bonus} alt="Bonus" />
          </div>
          <div className={styles.buttonBlockText}>У вас 90 бонусов</div>
        </div>
        <div className={styles.buttonBlock}>
          <div className={styles.buttonBlockTitle}>
            Оценить <img src={Human} alt="Human" />
          </div>
          <div className={styles.buttonBlockText}>Оставить отзыв</div>
        </div>
        <div className={styles.buttonBlock}>
          <div className={styles.buttonBlockTitle}>
            История <img src={Human} alt="Human" />
          </div>
          <div className={styles.buttonBlockText}>Ваших заказов</div>
        </div>
        <div className={styles.buttonBlock}>
          <div className={styles.buttonBlockTitle}>
            Меню <img src={Human} alt="Human" />
          </div>
          <div className={styles.buttonBlockText}>Все акции </div>
        </div>
      </div>
    </div>
  );
}
