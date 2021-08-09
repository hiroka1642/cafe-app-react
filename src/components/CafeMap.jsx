import { useMemo } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { CafeMarker } from "./CafeMarker";

export const CafeMap = (props) => {
  const containerStyle = useMemo(() => {
    return { width: "100%", height: "250px" };
  }, []);

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={props.center}
        zoom={15}
      >
        {props.cafeList.map((cafe) => {
          const onClick = () => props.setOpenPlaceId(cafe.placeId);
          return (
            <CafeMarker
              key={cafe.placeId}
              {...cafe}
              isOpen={cafe.placeId === props.openPlaceId}
              onClick={onClick}
            />
          );
        })}
      </GoogleMap>
    </LoadScript>
  );
};
