import { Button } from '@mui/joy';
import { IoClose } from 'react-icons/io5';
import useViewPortWidth from '@/hooks/useViewPortWidth';
import { useFormUiStore } from '@/components/pages/reservation/form/state/uiState';

function CloseBtn() {
  const { vw } = useViewPortWidth();

  const closeTableModal = useFormUiStore(
    (state) => state.tableModal.toggleOpen
  );

  return (
    <Button
      size={vw < 900 ? 'sm' : 'xs'}
      startDecorator={<IoClose />}
      onClick={closeTableModal}
    >
      Close
    </Button>
  );
}

export default CloseBtn;
