import styles from "../styles/Home.module.css";
import { GeoLocation } from "./GoogleMap.jsx";
import { Cafe } from "./Cafe";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [lat, Setlat] = useState(0);
  const [lng, Setlng] = useState(0);
  const [CafeList, setCafeList] = useState([]);

  const center = {
    lat: lat,
    lng: lng,
  };

  useEffect(() => {
    componentDidMount();
  }, []);

  function componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          Setlat(pos.coords.latitude);
          Setlng(pos.coords.longitude);
          getCafeList(pos.coords.latitude, pos.coords.longitude);
          // cafeMarker(getCafeList(pos.coords.latitude, pos.coords.longitude));
        },
        function () {
          window.alert("位置情報の取得に失敗しました");
        }
      );
    } else {
      window.alert("本アプリでは位置情報が使えません");
    }
  }

  //カフェリストを取得
  async function getCafeList(lat, lng) {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=600&type=cafe&language=ja&key=AIzaSyDMg3Gy7mKMzLXpW4UfZoPX39nECF989yg`
    );
    const cafelist = await res.json();
    console.log(cafelist);
    for (let i = 0; i < cafelist.results.length; i++) {
      setCafeList((CafeList) => [
        ...CafeList,
        {
          name: cafelist.results[i].name,
          position: cafelist.results[i].geometry.location,
          icon: cafelist.results[i].icon,
        },
      ]);
    }
    return cafelist;
  }

  return (
    <>
      <div className={styles.map} id="map">
        <GeoLocation center={center} CafeList={CafeList} />
      </div>
      <div className={styles.title}>
        <h1>CAFE LIST</h1>
      </div>
      <ul>
        {CafeList.map((CafeList, i) => {
          return <Cafe CafeList={CafeList} key={i} />;
        })}
      </ul>
    </>
  );
}
