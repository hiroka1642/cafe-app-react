import styles from "../styles/Home.module.css";
import { List } from "../src/components/CafeList";
import { CafeMap } from "../src/components/CafeMap";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [openPlaceId, setOpenPlaceId] = useState("");
  const [latLng, setLatLng] = useState({ lat: 0, lng: 0 });
  const [cafeList, setCafeList] = useState([]);

  const getCafeList = useCallback(
    async (lat, lng) => {
      const res = await fetch(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=600&type=cafe&language=ja&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
      );
      const data = await res.json();
      console.log(data);
      const cafeList = data.results.map((cafe) => {
        return {
          placeId: cafe.place_id,
          name: cafe.name,
          position: cafe.geometry.location,
          icon: cafe.icon,
          open: cafe.opening_hours,
          place: cafe.vicinity,
        };
      });
      setCafeList(cafeList);
    },
    [latLng]
  );

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setLatLng({ lat: pos.coords.latitude, lng: pos.coords.longitude });
          getCafeList(pos.coords.latitude, pos.coords.longitude);
        },
        function () {
          window.alert("位置情報の取得に失敗しました");
        }
      );
    } else {
      window.alert("本アプリでは位置情報が使えません");
    }
  }, []);

  return (
    <>
      <div className={styles.map} id="map">
        <p className="mt-10">aaaaa</p>
        <CafeMap
          center={latLng}
          cafeList={cafeList}
          openPlaceId={openPlaceId}
          setOpenPlaceId={setOpenPlaceId}
        />
      </div>
      <div className={styles.title}>
        <h1>CAFE LIST</h1>
      </div>
      <ul className={styles.list}>
        {cafeList.map((cafe) => {
          const onClick = () => setOpenPlaceId(cafe.placeId);
          return <List key={cafe.placeId} cafe={cafe} onClick={onClick} />;
        })}
      </ul>
    </>
  );
}
