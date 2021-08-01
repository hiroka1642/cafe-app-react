import { InfoWindow, Marker } from "@react-google-maps/api";
import styles from "/styles/Home.module.css";

export const CafeMarker = (props) => {
  return (
    <>
      <Marker position={props.position} onClick={props.onClick} />
      {props.isOpen && (
        <InfoWindow position={props.position}>
          <div className={styles.infowindow}>
            <p>{props.name}</p>
            <a
              href={`http://www.google.com/search?q=${props.name}`}
              target="_blank"
              rel="noreferrer"
            >
              検索
            </a>
            <a
              href={`http://www.google.com/search?q=${props.name}&tbm=isch`}
              target="_blank"
              rel="noreferrer"
            >
              画像を検索
            </a>
            <a
              href={`http://www.google.com/maps/search/?api=1&query=${props.name}`}
              target="_blank"
              rel="noreferrer"
            >
              グーグルマップで表示
            </a>
          </div>
        </InfoWindow>
      )}
    </>
  );
};
