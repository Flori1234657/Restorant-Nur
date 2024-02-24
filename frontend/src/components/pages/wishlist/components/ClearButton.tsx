import { Button, IconButton } from '@mui/joy';
import { MdDelete } from 'react-icons/md';
import useViewPortWidth from '@/hooks/useViewPortWidth';

function ClearButton() {
  const { vw } = useViewPortWidth();

  return vw > 899 ? (
    <Button startDecorator={<MdDelete />}>Clear All</Button>
  ) : (
    <IconButton aria-label="Clear all">
      <MdDelete />
    </IconButton>
  );
}

export default ClearButton;
