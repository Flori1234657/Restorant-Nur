import { Button, Stack } from '@mui/joy';
import { GoArrowRight as ArrIcon } from 'react-icons/go';
import { MdDiscount as IconPromo } from 'react-icons/md';
import { GiNotebook as BookIcon } from 'react-icons/gi';
import useViewPortWidth from '@/hooks/useViewPortWidth';
import { useFormUiStore } from '../../state/uiState';

function FormButtons() {
  const { vw } = useViewPortWidth();

  const toggleFormStep = useFormUiStore((state) => state.toggleStep);
  const formStep = useFormUiStore((state) => state.step);

  return (
    <Stack direction="row" sx={{ gap: '1.5rem' }}>
      {formStep === 'step1' ? (
        <Button
          size={vw < 900 ? 'sm' : 'xs'}
          endDecorator={<ArrIcon />}
          onClick={() => toggleFormStep('step2')}
        >
          Next
        </Button>
      ) : (
        <Button size={vw < 900 ? 'sm' : 'xs'} startDecorator={<BookIcon />}>
          Book My Table
        </Button>
      )}
      <Button startDecorator={<IconPromo />} size={vw < 900 ? 'sm' : 'xs'}>
        Use A Promo
      </Button>
    </Stack>
  );
}

export default FormButtons;
