import { useCallback, useEffect, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { InfowindowA } from "./Infowindow";

const GeoLocation = () => {
  const [lat, Setlat] = useState(0);
  const [lng, Setlng] = useState(0);
  const [CafeList, setCafeList] = useState([]);

  const center = {
    lat: lat,
    lng: lng,
  };

  const containerStyle = {
    width: "500px",
    height: "240px",
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
  // const [infowindowopen, setinfowindowopen] = useState(false);

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
        cafelist.results[i].geometry.location,
      ]);
    }
    return cafelist;
  }


  return (
    <>
      <LoadScript googleMapsApiKey="AIzaSyDMg3Gy7mKMzLXpW4UfZoPX39nECF989yg">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
          {CafeList.map((list) => {
            return <InfowindowA key={list.lng} center={list} />;
          })}
        </GoogleMap>
      </LoadScript>
    </>
  );
};

export default GeoLocation;
