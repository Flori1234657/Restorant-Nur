import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import LocationIcn from "../../../../../assets/svg/icons/location.svg";
import useViewPortWidth from "../../../../../hooks/useViewPortWidth.tsx";

const Map = () => {
  const { vw } = useViewPortWidth();

  const customIcon = new Icon({
    iconUrl: LocationIcn,
    iconSize: [32, 64],
  });
  return (
    <MapContainer
      center={[39.768669, 19.993046]}
      zoom={13}
      style={{
        width: vw < 900 ? "80%" : "8.084rem",
        height: "8rem",
        borderRadius: "0.5rem",
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[39.768669, 19.993046]} icon={customIcon}>
        <Popup>
          Restorant Nur. <br /> Come and visit us!.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
