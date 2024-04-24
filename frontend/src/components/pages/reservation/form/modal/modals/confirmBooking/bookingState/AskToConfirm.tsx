import { Typography } from '@mui/joy';
import { IoMdThumbsUp, IoMdThumbsDown } from 'react-icons/io';
import ModalsWrapper from '../../../ModalsWrapper';
import TwoOptionsModal from '../../twoOptionsModal/TwoOptionsModal';

function AskToConfirm() {
  return (
    <ModalsWrapper>
      <>
        <TwoOptionsModal
          heading={`You are booking now! ${(<br />)} Are you sure?`}
          buttons={{
            button1: {
              action: () => {},
              innerTxt: 'Yes, Im Sure',
              decorator: <IoMdThumbsUp />,
            },
            button2: {
              action: () => {},
              innerTxt: 'No I Need To Think',
              decorator: <IoMdThumbsDown />,
            },
          }}
        />

        <Typography>Note this action cannot be undone!</Typography>
      </>
    </ModalsWrapper>
  );
}

export default AskToConfirm;
