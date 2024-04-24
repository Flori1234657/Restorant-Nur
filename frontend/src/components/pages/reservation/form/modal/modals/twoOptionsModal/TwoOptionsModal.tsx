import { Typography } from '@mui/joy';
import Buttons, { TwoButtonsProps } from './components/Buttons';

interface Props {
  heading: string;
  buttons: TwoButtonsProps;
}

function TwoOptionsModal({ heading, buttons }: Props) {
  return (
    <>
      <Typography
        sx={(theme) => ({
          fontSize: { xs: '1.125rem', md: '1rem' },
          fontWeight: '600',
          color: theme.palette.primary[500],
        })}
      >
        {heading}
      </Typography>
      <Buttons button1={buttons.button1} button2={buttons.button2} />
    </>
  );
}

export default TwoOptionsModal;
