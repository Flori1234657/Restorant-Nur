import { Typography } from '@mui/joy';
import {
  IoMdThumbsUp,
  IoMdThumbsDown,
  IoIosWarning as WarningIcon,
} from 'react-icons/io';
import ModalsWrapper from '../../../ModalsWrapper';
import TwoOptionsModal from '../../twoOptionsModal/TwoOptionsModal';
import { useFormUiStore } from '../../../../state/uiState';
import useReservationSotre from '../../../../state/reservationState';

function AskToConfirm() {
  const reservationModals = useFormUiStore((state) => state.reservationModals);
  const reservationStore = useReservationSotre();

  return (
    <ModalsWrapper>
      <>
        <TwoOptionsModal
          heading="You are booking now! Are you sure?"
          buttons={{
            button1: {
              action: () => {
                // fetch here
              },
              innerTxt: 'Yes, Im Sure',
              decorator: <IoMdThumbsUp />,
            },
            button2: {
              action: () => {
                reservationStore.setReservationInProcess(null);
                reservationModals.modalsWrapper.toggleOpen();
              },
              innerTxt: 'No I Need To Think',
              decorator: <IoMdThumbsDown />,
            },
          }}
        />

        <Typography
          startDecorator={<WarningIcon />}
          sx={(theme) => ({
            color: theme.palette.warning[500],
            fontSize: '0.75rem',
          })}
        >
          Note this action cannot be undone!
        </Typography>
      </>
    </ModalsWrapper>
  );
}

export default AskToConfirm;
