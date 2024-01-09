import { Stack, Typography } from "@mui/joy";
import Inputs from "./Inputs";
import { useState, lazy } from "react";

const TableMap = lazy(() => import("./tableMap/TableMap"));

const StepOne = () => {
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
};

export default StepOne;
