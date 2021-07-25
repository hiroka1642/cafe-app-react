import styles from "/styles/Home.module.css";

export const List = ({ cafe, onClick }) => {
  return (
    <li>
      <button className={styles.button} onClick={onClick}>
        <img src={cafe.icon} alt="" className={styles.image} />
        <div className={styles.container}>
          <p className={styles.cafename}>{cafe.name}</p>
      </button>
    </li>
  );
};
