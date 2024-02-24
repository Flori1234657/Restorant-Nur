import { Stack, Typography } from '@mui/joy';
import { useState, lazy } from 'react';
import Inputs from './Inputs';

const TableMap = lazy(() => import('./tableMap/TableMap'));

function StepOne() {
  const [toggleTableMap, setToggleTableMap] = useState<boolean>(false);

  return (
    <Stack>
      {toggleTableMap ? (
        <TableMap />
      ) : (
        <>
          <Typography level="body-lg">STEP 1/2</Typography>
          <Inputs openTableModal={setToggleTableMap} />
        </>
      )}
    </Stack>
  );
}

export default StepOne;
