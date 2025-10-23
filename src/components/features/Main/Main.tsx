import BankCard from "@/assets/bank_Card.svg";
import BurgerMenu from "@/assets/burger_Menu.svg";
import Heart from "@/assets/heart.svg";
import Human from "@/assets/human.svg";
import Pencil from "@/assets/pencil.svg";
import ShoppingBasket from "@/assets/Shopping_Basket.svg";
import Table from "@/assets/table.svg";
import WaiterAvatar from "@/assets/Waiter-Anna.webp";
import styles from "@/components/features/Main/Main.module.scss";

export default function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.tableInfo}>
        <div className={styles.tableEdit}>
          Ваш стол <img src={Pencil} alt="pencil" />{" "}
        </div>
        <div className={styles.tableNumber}>
          24 <img src={Table} alt="table" />
        </div>
        <div className={styles.urWaiter}>
          <img
            className={styles.waiterAvatar}
            src={WaiterAvatar}
            alt="Waiter Avatar"
          />
          <div>
            <div className={styles.waiterTitle}>Ваш официант</div>
            <div className={styles.waiterName}>Анна</div>
          </div>
        </div>
      </div>
      <div className={styles.buttons}>
        <div className={styles.buttonBlock}>
          <div className={styles.buttonBlockTitle}>
            Меню <img src={BurgerMenu} alt="Burger menu" />
          </div>
          <div className={styles.buttonBlockText}>Посмотреть меню</div>
        </div>
        <div className={styles.buttonBlock}>
          <div className={styles.buttonBlockTitle}>
            Официант <img src={Human} alt="human" />
          </div>
          <div className={styles.buttonBlockText}>Позвать официанта</div>
        </div>
      </div>
      <div className={styles.invoiceBlock}>
        <div>
          <div className={styles.buttonBlockTitle}>Оплатить счет</div>
          <div className={styles.buttonBlockText}>Вы еще не заказывали</div>
        </div>
        <img src={BankCard} alt="Bank card" />
      </div>
      <div className={styles.tipsBlock}>
        <div>
          <div className={styles.buttonBlockTitle}>Оставить чаевые</div>
          <div className={styles.buttonBlockText}>
            Поддержать официанта или кухню
          </div>
        </div>
        <img src={Heart} alt="Heart" />
      </div>
      <div className={styles.shoppingBasket}>
        <img
          src={ShoppingBasket}
          alt="Shopping Basket"
        />
      </div>
    </div>
  );
}
