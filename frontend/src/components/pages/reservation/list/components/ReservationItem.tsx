import { Card, CardContent } from '@mui/joy';
import { Suspense, lazy, useState } from 'react';
import ReservationItClosed from './ReservationItClosed';

const ReservationItOpen = lazy(() => import('./ReservationItOpen'));

function ReservationItem() {
  const [toggleOpen, setToggleOpen] = useState<boolean>(false);

  return (
    <Card
      sx={(theme) => ({
        py: '0.5rem',
        px: '0.5rem',
        bgcolor: theme.palette.secondary.black3,
        border: 'none',
        boxShadow:
          '0 2px 8px 2px rgba(0, 0, 0, 1), 0 0 8px -45px rgba(0, 0, 0, 1)',
        alignItems: 'center',
      })}
      onClick={() => setToggleOpen(true)}
    >
      <CardContent
        sx={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        {toggleOpen ? (
          <Suspense fallback="loading">
            <ReservationItOpen setCardOpen={setToggleOpen} />
          </Suspense>
        ) : (
          <ReservationItClosed />
        )}
      </CardContent>
    </Card>
  );
}

export default ReservationItem;
