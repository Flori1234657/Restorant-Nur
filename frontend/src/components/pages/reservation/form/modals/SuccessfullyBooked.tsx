import React from "react";
import { Button, IconButton, Modal, Stack, Typography } from "@mui/joy";
import { IoClose } from "react-icons/io5";
import TickImg from "../../../../../assets/svg/others/successfully-reserved-icon.svg";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SuccessfullyBooked = (props: Props) => {
  return (
    <Modal open={props.open}>
      <Stack>
        <Stack>
          <Typography>Your table is reserved successfully!</Typography>
          <Typography>
            You need to be in the restaurant 1 hour before the reservation time
            has arrived! Otherwise we wont hold your table!
          </Typography>
        </Stack>
        <IconButton onClick={() => props.setOpen(false)}>
          <IoClose />
        </IconButton>
        <img src={TickImg} alt="" />
        <Button
          startDecorator={<IoClose />}
          onClick={() => props.setOpen(false)}
        >
          Close
        </Button>
      </Stack>
    </Modal>
  );
};

export default SuccessfullyBooked;
