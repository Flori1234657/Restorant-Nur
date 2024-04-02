import { Button } from '@mui/joy';

type Props = {
  innerTxt: string;
  decorator: React.ReactNode;
  action: () => void;
};

function Btn({ action, decorator, innerTxt }: Props) {
  return (
    <Button startDecorator={decorator} onClick={action}>
      {innerTxt}
    </Button>
  );
}

export default Btn;
