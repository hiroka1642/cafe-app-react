import { InfoWindow, Marker } from "@react-google-maps/api";

export const CafeMarker = (props) => {
  return (
    <>
      <Marker position={props.position} onClick={props.onClick} />
      {props.isOpen && (
        <InfoWindow position={props.position}>
          <div className="flex-row gap-2">
            <p>{props.name}</p>
            <a
              href={`http://www.google.com/search?q=${props.name}`}
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 border-none p-2"
            >
              検索
            </a>
            <a
              href={`http://www.google.com/search?q=${props.name}&tbm=isch`}
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 border-none p-2"
            >
              画像検索
            </a>
            <a
              href={`http://www.google.com/maps/search/?api=1&query=${props.name}`}
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 border-none p-2"
            >
              グーグルマップ
            </a>
          </div>
        </InfoWindow>
      )}
    </>
  );
};
