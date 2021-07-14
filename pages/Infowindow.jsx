import { InfoWindow, Marker } from "@react-google-maps/api";

export const InfoWindow1 = (props) => {
  return (
    <>
      {props.infowindowopen && (
        <InfoWindow position={props.poi} onCLick={close}>
          <div>
            <p>カフェ</p>
            <a>ホームページへ</a>
            <a>画像を検索</a>
            <a>GoogleMapで開く</a>
          </div>
        </InfoWindow>
      )}
    </>
  );
};
