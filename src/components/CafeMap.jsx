import { useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { CafeMarker } from "./CafeMarker";

const containerStyle = {
  width: "500px",
  height: "240px",
};

export const CafeMap = ({ center, cafeList, openPlaceId, setOpenPlaceId }) => {
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        {cafeList.map((cafe) => {
          const onClick = () => setOpenPlaceId(cafe.placeId);
          return (
            <CafeMarker
              key={cafe.placeId}
              {...cafe}
              isOpen={cafe.placeId === openPlaceId}
              onClick={onClick}
            />
          );
        })}
      </GoogleMap>
    </LoadScript>
  );
};
