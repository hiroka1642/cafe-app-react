import { List } from "../components/CafeList";
import { CafeMap } from "../components/CafeMap";
import { useCallback, useEffect, useState } from "react";
import useSWR from "swr";

export default function Home() {
  const [openPlaceId, setOpenPlaceId] = useState("");
  const [latLng, setLatLng] = useState({ lat: 0, lng: 0 });

  const GetCafeList = (lat, lng) => {
    const { data, error } = useSWR(
      lat
        ? `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=600&type=cafe&language=ja&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
        : null
    );

    return { data, error };
  };

  const { data, error } = GetCafeList(latLng.lat, latLng.lng);

  const GetCafe = useCallback(() => {
    const cafeList = data?.results.map((cafe) => {
      return {
        placeId: cafe.place_id,
        name: cafe.name,
        position: cafe.geometry.location,
        icon: cafe.icon,
        open: cafe.opening_hours,
        place: cafe.vicinity,
      };
    });
    return cafeList;
  }, [data]);

  const cafeList = GetCafe();

  useEffect(() => {
    componentDidMount();
  });

  const componentDidMount = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setLatLng({ lat: pos.coords.latitude, lng: pos.coords.longitude });
          GetCafe(pos.coords.latitude, pos.coords.longitude);
        },
        function () {
          window.alert("位置情報の取得に失敗しました");
        }
      );
    } else {
      window.alert("本アプリでは位置情報が使えません");
    }
  };

  // const [data, error] = GetCafeList(latLng.lat, latLng.lng);
  return (
    <div className="w-full">
      <div className="fixed top-0">
        <div className=" w-full">
          <CafeMap
            center={latLng}
            cafeList={cafeList}
            openPlaceId={openPlaceId}
            setOpenPlaceId={setOpenPlaceId}
          />
        </div>
        <h1 className="bg-yellow-400 text-center p-4 text-3xl text-white font-medium w-screen">
          CAFE LIST
        </h1>
      </div>
      <div className="pt-80 m-auto text-center">
        {!error && !data ? "ローディング中..." : null}
        {error ? "エラーが発生しました" : null}
        {data === null ? "カフェが見つかりませんでした" : null}
        <ul className="overflow-auto h-auto overscroll-none  grid grid-cols-1 md:grid-cols-3 ">
          {cafeList?.map((cafe) => {
            const handleClick = () => setOpenPlaceId(cafe.placeId);
            return (
              <List key={cafe.placeId} cafe={cafe} onClick={handleClick} />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
