import { Button, Modal, Stack, Typography } from '@mui/joy';
import { GoArrowRight as ArrIcon } from 'react-icons/go';
import { IoClose as CloseIcon } from 'react-icons/io5';
import FromWishCards from './tapToSelectFrom/FromWishCards';
import MenuCard from '../../../../same/menu/MenuCard';
import Wave from '../../../../../assets/svg/waves/tap-to-select-modal-wave.svg';

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function TapToSelect({ open, setOpen }: Props) {
  // Use a zustand state to toggle
  const zustandSampleModalType: 'wishlist' | 'menu' = 'wishlist';

  return (
    <Modal open={open}>
      <Stack>
        <Stack>
          <Typography>Tab to select</Typography>
          {/**
           *  Use Zustand to select cards and manage them
           * for menu cards also. Refer to food card of menuCard component
           */}
          <Typography>1 selected</Typography>
        </Stack>
        {zustandSampleModalType === 'wishlist' ? (
          <FromWishCards />
        ) : (
          <MenuCard />
        )}
        <Stack>
          <Wave />
          <Button startDecorator={<ArrIcon />}>Continue</Button>
          <Button startDecorator={<CloseIcon />}>Cancel</Button>
        </Stack>
      </Stack>
    </Modal>
  );
}

export default TapToSelect;
