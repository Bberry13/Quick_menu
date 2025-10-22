import Pencil from "@/assets/pencil.svg";
import Table from "@/assets/table.svg";
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
      </div>
    </div>
  );
}
