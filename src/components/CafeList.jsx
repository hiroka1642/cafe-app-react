import styles from "/styles/Home.module.css";

export const List = ({ cafe, onClick }) => {
  return (
    <li>
      <button className={styles.button} onClick={onClick}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={cafe.icon} alt="" className={styles.image} />
        <div className={styles.container}>
          <p className={styles.cafename}>{cafe.name}</p>
          <p className={styles.cafetext}>{cafe.place}</p>
          {cafe.open ? (
            !cafe.open ? (
              <p className={styles.cafetext}>閉店中</p>
            ) : (
              <p className={styles.cafetext}>開店中</p>
            )
          ) : (
            <p className={styles.cafetext}>営業時間はお問い合わせ下さい</p>
          )}
        </div>
      </button>
    </li>
  );
};
