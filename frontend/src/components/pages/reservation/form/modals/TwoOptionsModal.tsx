import { Button, IconButton, Modal, Stack, Typography } from '@mui/joy';
import React from 'react';
import { IoClose } from 'react-icons/io5';

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

function TwoOptionsModal({
  btn1,
  btn2,
  setOpenModal,
  text,
  toggleState,
  helperTxt,
}: Props) {
  return (
    <>
      {' '}
      <Modal open={toggleState}>
        <Stack>
          <Typography>{text}</Typography>
          <IconButton onClick={() => setOpenModal(false)}>
            <IoClose />
          </IconButton>
          <Stack>
            <Button startDecorator={btn1.icn}>{btn1.txt}</Button>
            <Button startDecorator={btn2.icn}>{btn2.txt}</Button>
          </Stack>
          {helperTxt && (
            <Typography startDecorator={helperTxt.icon}>
              {helperTxt.txt}
            </Typography>
          )}
        </Stack>
      </Modal>
    </>
  );
}

export default TwoOptionsModal;
