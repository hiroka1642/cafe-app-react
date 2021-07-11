import { InfoWindow, Marker } from "@react-google-maps/api";
import { useCallback, useEffect, useState } from "react";

export const InfowindowA = (props) => {
  const [infowindowopen, setinfowindowopen] = useState(false);

  return (
    <>
      <Marker
        key={props.center.lat}
        position={props.center}
        onClick={() => {
          setinfowindowopen(true);
        }}
      />
      {infowindowopen && (
        <InfoWindow position={props.center} key={props.center.lng}>
          <div>
            <p>カフェの名前</p>
            <a>ホームページへ</a>
            <a>画像を検索</a>
            <a>GoogleMapで開く</a>
          </div>
        </InfoWindow>
      )}
    </>
  );
};
