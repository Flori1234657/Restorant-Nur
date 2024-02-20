import { Stack, Typography } from "@mui/joy";
import { footerHeading } from "./sxObjs/textInfo.tsx";
import { Suspense, lazy, useRef } from "react";
import Fallback from "../../loading/Fallback.tsx";
import useIntersectionObserver from "../../../../hooks/useIntersectionObserver.tsx";

const Map = lazy(() => import("./map/Map"));

const MapLocation = () => {
  const elm = useRef<HTMLDivElement | null>(null);

  const { isIntersecting } = useIntersectionObserver({ element: elm });

  return (
    <Stack gap="0.5rem">
      <Typography level="h2" sx={(theme) => footerHeading(theme)}>
        Find us on map
      </Typography>
      <div ref={elm}>
        {" "}
        <Suspense fallback={<Fallback height="8rem" />}>
          {isIntersecting && <Map />}
        </Suspense>
      </div>
    </Stack>
  );
};

export default MapLocation;
