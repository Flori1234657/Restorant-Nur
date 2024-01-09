import { lazy, Suspense, useState } from "react";
import { Button, Stack, Typography } from "@mui/joy";
import StepOne from "./steps/step1/StepOne";
import { GoArrowRight as ArrIcon } from "react-icons/go";
import { MdDiscount as IconPromo } from "react-icons/md";
import { GiNotebook as BookIcon } from "react-icons/gi";
import BookingModalsWrapper from "./modals/BookingModalsWrapper";

const StepTwo = lazy(() => import("./steps/step2/StepTwo"));

const ReservationForm = () => {
  const [toggleStep, setToggleStep] = useState<"step1" | "step2">("step1");
  const [bookTable, setBookTable] = useState<boolean>(false); // Only for first time download <BookingModalsWrapper />

  return (
    <Stack>
      <Typography>Book a table</Typography>
      <form>
        <Suspense fallback="">
          {toggleStep === "step1" ? <StepOne /> : <StepTwo />}
        </Suspense>
        <Stack>
          {toggleStep === "step1" ? (
            <Button startDecorator={<ArrIcon />}>Next</Button>
          ) : (
            <Button
              startDecorator={<BookIcon />}
              onClick={() => {
                if (!bookTable) setBookTable(true);
              }}
            >
              Book My Table
            </Button>
          )}
          <Button startDecorator={<IconPromo />}>Use A Promo</Button>
        </Stack>
      </form>
      <Suspense fallback="Loading Component">
        {bookTable && <BookingModalsWrapper />}
      </Suspense>
    </Stack>
  );
};

export default ReservationForm;
