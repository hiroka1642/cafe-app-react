import {
  GoogleMap,
  LoadScript,
} from "@react-google-maps/api";
import { Infomation } from "./Infomation";

export const GeoLocation = ({ center, CafeList }) => {
  const containerStyle = {
    width: "500px",
    height: "240px",
  };

  return (
    <>
      <LoadScript googleMapsApiKey="AIzaSyDMg3Gy7mKMzLXpW4UfZoPX39nECF989yg">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
          {CafeList.map((list, i) => {
            return (
              <Infomation key={i} center={list.position} cafelist={list} />
            );
          })}
        </GoogleMap>
      </LoadScript>
    </>
  );
};
