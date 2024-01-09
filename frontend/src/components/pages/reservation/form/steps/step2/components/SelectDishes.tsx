import { Grid, IconButton, Stack, Typography } from "@mui/joy";
import { FaPlus } from "react-icons/fa6";
import SelectedCard from "./SelectedCard";
import { MdRestaurantMenu as IconMenu } from "react-icons/md";
import { IoHeart as IconWish } from "react-icons/io5";
import { Suspense, lazy, useState } from "react";

const TwoOptionsModal = lazy(() => import("../../../modals/TwoOptionsModal"));

const SelectDishes = () => {
  const [toggleModal, setToggleModal] = useState<boolean>(false);

  return (
    <Stack>
      <Typography>
        Select dishes <Typography>&#10088;optional&#10089;</Typography>
      </Typography>
      <Grid container columns={4}>
        <Grid xs={1}>
          <IconButton>
            <FaPlus />
          </IconButton>
        </Grid>
        {[1, 2, 3].map((el) => (
          <Grid xs={1} key={el}>
            <SelectedCard />
          </Grid>
        ))}
      </Grid>
      {toggleModal && (
        <Suspense fallback={"Loading Component"}>
          <TwoOptionsModal
            text="Select dishes"
            btn1={{ txt: "From Wishlist", icn: <IconWish /> }}
            btn2={{ txt: "From Menu", icn: <IconMenu /> }}
            toggleState={toggleModal}
            setOpenModal={setToggleModal}
          />
        </Suspense>
      )}
    </Stack>
  );
};

export default SelectDishes;
