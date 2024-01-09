import { Button, IconButton, Modal, Stack, Typography } from "@mui/joy";
import React from "react";
import { IoClose } from "react-icons/io5";

type Props = {
  text: string;
  btn1: {
    txt: string;
    icn: React.ReactNode;
  };
  btn2: {
    txt: string;
    icn: React.ReactNode;
  };
  toggleState: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  helperTxt?: {
    txt: string;
    icon: React.ReactNode;
  };
};

const TwoOptionsModal = (props: Props) => {
  return (
    <>
      {" "}
      <Modal open={props.toggleState}>
        <Stack>
          <Typography>{props.text}</Typography>
          <IconButton onClick={() => props.setOpenModal(false)}>
            <IoClose />
          </IconButton>
          <Stack>
            <Button startDecorator={props.btn1.icn}>{props.btn1.txt}</Button>
            <Button startDecorator={props.btn2.icn}>{props.btn2.txt}</Button>
          </Stack>
          {props.helperTxt && (
            <Typography startDecorator={props.helperTxt.icon}>
              {props.helperTxt.txt}
            </Typography>
          )}
        </Stack>
      </Modal>
    </>
  );
};

export default TwoOptionsModal;
