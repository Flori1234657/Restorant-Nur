import { Stack, Typography } from "@mui/joy";

const MapLocation = () => {
  return (
    <Stack>
      <Typography>Find us on map</Typography>
      <iframe
        title="Our location on map frame"
        width="600"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed/v1/place?key=
    &q=Space+Needle,Seattle+WA"
      ></iframe>
      {/* https://developers.google.com/maps/documentation/embed/get-started   <-- Refer here for functionality*/}
    </Stack>
  );
};

export default MapLocation;
