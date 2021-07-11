import styles from "../styles/Home.module.css";
import GeoLocation from "./Geolocation.jsx";

export default function Home() {


  //   let prevInfowindow = false;

  //   const InfoWindow1 = (place, marker) => {
  //     let infowindow = new google.maps.InfoWindow({
  //       position: place.geometry.location,
  //       content: "SYNCER",
  //     });
  //     marker.addListener("click", () => {
  //       InfoWindow2(place, infowindow);
  //     });
  //   };

  //   const InfoWindow2 = (place, infowindow) => {
  //     if (prevInfowindow !== false) {
  //       prevInfowindow.close(map);
  //     }
  //     infowindow.setContent(
  //       place.name +
  //         "<br><a href='http://www.google.com/search?q=" +
  //         place.name +
  //         "' target='_blank'>検索する</a><br>" +
  //         "<a href='http://www.google.com/maps/search/?api=1&query=" +
  //         place.name +
  //         "' target='_blank'>グーグルマップで表示</a>" +
  //         "<br><a href='http://www.google.com/search?q=" +
  //         place.name +
  //         "&tbm=isch' target='_blank'>画像検索 by google</a>"
  //     );
  //     infowindow.open(map);
  //     prevInfowindow = infowindow;
  //   };

  //   //近くのカフェのリストを取得
  //   async function getCafeList(lat, lng) {
  //     const res = await fetch(
  //       `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=600&type=cafe&language=ja&key=AIzaSyDMg3Gy7mKMzLXpW4UfZoPX39nECF989yg`
  //     );

  //     const cafelist = await res.json();
  //     return cafelist;
  //   }

  //   //マーカー表示の関数
  //   const createMarker = (place) => {
  //     if (!place.geometry || !place.geometry.location) {
  //       return;
  //     } else {
  //       const marker = new google.maps.Marker({
  //         map: map,
  //         position: place.geometry.location,
  //       });
  //       InfoWindow1(place, marker);
  //     }
  //   };

  //   //カフェの位置にマーカーをおく
  //   async function cafeMarker(getCafeList) {
  //     const cafelist = await getCafeList;
  //     console.log(cafelist);
  //     for (let i = 0; i < cafelist.results.length; i++) {
  //       createMarker(cafelist.results[i]);
  //     }
  //   }

  //   //カフェリストを表示
  //   async function showCafeList(getCafeList) {
  //     const cafelist = await getCafeList;
  //     for (let i = 0; i < cafelist.results.length; i++) {
  //       const ul = document.getElementById("cafe-lists");
  //       const li = document.createElement("li");
  //       const button = document.createElement("button");
  //       const img = document.createElement("img");
  //       const div = document.createElement("div");
  //       const cafename = document.createElement("p");
  //       const cafetext = document.createElement("p");
  //       const cafeopen = document.createElement("p");
  //       img.src = cafelist.results[i].icon;
  //       img.alt = "";
  //       img.classList.add("img");
  //       button.classList.add("cafe-list");
  //       ul.appendChild(li);
  //       ul.appendChild(button);
  //       button.appendChild(img);
  //       button.appendChild(div);
  //       div.appendChild(cafename);
  //       div.appendChild(cafetext);
  //       div.appendChild(cafeopen);
  //       cafename.textContent = cafelist.results[i].name;
  //       cafetext.textContent = cafelist.results[i].vicinity;
  //       if (cafelist.results[i].opening_hours === undefined) {
  //         cafeopen.textContent = "営業時間はお問い合わせください";
  //       } else if (cafelist.results[i].opening_hours.open_now === false) {
  //         cafeopen.textContent = "閉店中";
  //       } else {
  //         cafeopen.textContent = "開店中！";
  //       }
  //       div.classList.add("container");
  //       cafename.classList.add("cafename");
  //       cafetext.classList.add("cafetext");
  //       cafeopen.classList.add("cafetext");

  //       let infowindow = new google.maps.InfoWindow({
  //         position: cafelist.results[i].geometry.location,
  //         content: "SYNCER",
  //       });

  //       button.addEventListener("click", () => {
  //         InfoWindow2(cafelist.results[i], infowindow);
  //       });
  //     }
  //   }
  //   Navigator();

  //   // getCafeList(pos.coords.latitude, pos.coords.longitude);
  //   cafeMarker(getCafeList(pos.coords.latitude, pos.coords.longitude));
  //   showCafeList(getCafeList(pos.coords.latitude, pos.coords.longitude));
  // };

  return (
    <>
      <div className={styles.map} id="map">
      <GeoLocation />
      </div>
      <div className={styles.title}>
        <h1>CAFE LIST</h1>
      </div>
      <ul className={styles.cafelists}></ul>
    </>
  );
}
