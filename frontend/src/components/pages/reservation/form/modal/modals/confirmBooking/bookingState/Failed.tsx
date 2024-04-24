import { IoMdThumbsUp, IoMdThumbsDown } from 'react-icons/io';
import ModalsWrapper from '../../../ModalsWrapper';
import TwoOptionsModal from '../../twoOptionsModal/TwoOptionsModal';

function Failed() {
  return (
    <ModalsWrapper>
      <TwoOptionsModal
        heading="Ops! Someone else has booked before you this table!"
        buttons={{
          button1: {
            action: () => {},
            innerTxt: 'Chose Another Table?',
            decorator: <IoMdThumbsUp />,
          },
          button2: {
            action: () => {},
            innerTxt: "No Thanks I'm Going!",
            decorator: <IoMdThumbsDown />,
          },
        }}
      />
    </ModalsWrapper>
  );
}

export default Failed;
