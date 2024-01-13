import { AspectRatio, Stack, Typography } from "@mui/joy";
import { footerHeading } from "./sxObjs/textInfo";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import LocationIcn from "../../../../assets/svg/icons/location.svg";

const MapLocation = () => {
  const cutomIcon = new Icon({
    iconUrl: LocationIcn,
    iconSize: [32, 64],
  });

  return (
    <Stack gap="0.5rem">
      <Typography level="h2" sx={(theme) => footerHeading(theme)}>
        Find us on map
      </Typography>

      <MapContainer
        center={[39.768669, 19.993046]}
        zoom={13}
        style={{
          width: "80%",
          height: "8rem",
          borderRadius: "0.5rem",
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[39.768669, 19.993046]} icon={cutomIcon}>
          <Popup>
            Restorant Nur. <br /> Come and visit us!.
          </Popup>
        </Marker>
      </MapContainer>
    </Stack>
  );
};

export default MapLocation;
