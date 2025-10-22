import styles from "@/components/features/Navigation/Navigation.module.scss";

type Props = {
  activeTab: "main" | "promotions";
  setActiveTab: React.Dispatch<React.SetStateAction<"main" | "promotions">>;
};

export default function Navigation({ activeTab, setActiveTab }: Props) {
  
  return (
    <nav className={styles.nav}>
      <button
        className={`${styles.tab} ${activeTab === "main" ? styles.active : ""}`}
        onClick={() => setActiveTab("main")}
      >
        главная
      </button>

      <button
        className={`${styles.tab} ${
          activeTab === "promotions" ? styles.active : ""
        }`}
        onClick={() => setActiveTab("promotions")}
      >
        акции и другое
      </button>
    </nav>
  );
}
