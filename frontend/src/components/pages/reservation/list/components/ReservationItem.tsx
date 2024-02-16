import {
  Button,
  Card,
  CardContent,
  IconButton,
  Stack,
  Typography,
} from "@mui/joy";
import ReservationItClosed from "./ReservationItClosed";
import ReservationItOpen from "./ReservationItOpen";
import { useState } from "react";
import { IoIosArrowDown as ArrIcon } from "react-icons/io";

const ReservationItem = () => {
  const [toggleOpen, setToggleOpen] = useState<boolean>(false);

  return (
    <Card>
      <CardContent>
        <Typography>1</Typography>
        {toggleOpen ? (
          <Stack>
            <ReservationItOpen />
            <IconButton>
              <ArrIcon />
            </IconButton>
          </Stack>
        ) : (
          <ReservationItClosed />
        )}
        <Button
          onClick={() => {
            // the button component is a PLaceholder only for build
            setToggleOpen(true);
          }}
        />
      </CardContent>
    </Card>
  );
};

export default ReservationItem;
