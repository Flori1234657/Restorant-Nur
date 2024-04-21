import { Button } from '@mui/joy';
import useViewPortWidth from '@/hooks/useViewPortWidth';

type Props = {
  innerTxt: string;
  decorator: React.ReactNode;
  action: () => void;
};

function Btn({ action, decorator, innerTxt }: Props) {
  const { vw } = useViewPortWidth();

  return (
    <Button
      startDecorator={decorator}
      onClick={action}
      size={vw < 900 ? 'sm' : 'xs'}
    >
      {innerTxt}
    </Button>
  );
}

export default Btn;
