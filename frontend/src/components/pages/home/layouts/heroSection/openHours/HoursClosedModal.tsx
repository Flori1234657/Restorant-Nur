import { Card, CardContent, IconButton, Typography } from '@mui/joy';
import { IoIosArrowDown as ArrowIcon } from 'react-icons/io';
import closedModalTxtStyles from '../../sxObj/sxHoursModal';

type Props = {
  openModal: React.Dispatch<React.SetStateAction<boolean>>;
  isOpening: boolean;
};

function HoursClosedModal({ isOpening, openModal }: Props) {
  return (
    <Card
      sx={{
        position: 'absolute',
        zIndex: '10',
        flexDirection: 'row',
        alignItems: 'center',
        gap: { xs: '1rem', md: '0.5rem', lg: '0.4rem' },
        p: { xs: '0.5rem', lg: '0.4rem' },
        bgcolor: 'rgba(255, 159, 13, 0.37)',
        ml: { xs: '2rem', md: '8.44rem', lg: '9.35rem', xl: '9.773rem' },
        border: 'none',
        borderRadius: '0.5rem',
      }}
    >
      <CardContent>
        <Typography level="body-lg" sx={(theme) => closedModalTxtStyles(theme)}>
          Closes at
        </Typography>
        <Typography level="body-lg" sx={(theme) => closedModalTxtStyles(theme)}>
          23 : 30
        </Typography>
      </CardContent>
      <IconButton
        aria-label="Open operating hours modal"
        size="sm"
        sx={(theme) => ({
          bgcolor: 'rgba(255, 159, 13, 0.37)',
          color: theme.palette.primary[100],
        })}
        variant="solid"
        color="primary"
        onClick={() => openModal(true)}
        disabled={isOpening}
      >
        <ArrowIcon />
      </IconButton>
    </Card>
  );
}

export default HoursClosedModal;
