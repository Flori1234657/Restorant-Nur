import { Stack } from '@mui/joy';
// import { Suspense, lazy, useState } from 'react';
// import { MdRestaurantMenu as IconMenu } from 'react-icons/md';
// import { IoHeart as IconWish } from 'react-icons/io5';
// import SelectedCard from './components/components/components/SelectedCard';
import Dishes from './components/Dishes';
import Label from './components/Label';

// const TwoOptionsModal = lazy(
//   () => import('../../../../modals/TwoOptionsModal')
// );

function SelectDishes() {
  // const [toggleModal, setToggleModal] = useState<boolean>(false);

  return (
    <Stack sx={{ gap: { xs: '0.75rem' } }}>
      <Label />
      <Dishes />
      {/* {toggleModal && (
        <Suspense fallback="Loading Component">
          <TwoOptionsModal
            text="Select dishes"
            btn1={{ txt: 'From Wishlist', icn: <IconWish /> }}
            btn2={{ txt: 'From Menu', icn: <IconMenu /> }}
            toggleState={toggleModal}
            setOpenModal={setToggleModal}
          />
        </Suspense>
      )} */}
    </Stack>
  );
}

export default SelectDishes;
