import { IoHeart } from 'react-icons/io5';
import { GiNotebook } from 'react-icons/gi';
import { Suspense, lazy, useState } from 'react';
import TwoOptionsModal from '../twoOptionsModal/TwoOptionsModal';
import ModalsWrapper from '../../ModalsWrapper';
import { useFormUiStore } from '../../../state/uiState';

const SelectModal = lazy(() => import('./from/SelectModal'));
const FromMenu = lazy(() => import('./from/menu/FromMenu'));
const FromWishlist = lazy(() => import('./from/wishlist/FromWishlist'));

function SelectDishes() {
  const openSelectModal = useFormUiStore(
    (state) => state.reservationModals.selectDishes.toggleOpen
  );

  const [toggleSelectDishesFrom, setToggleSelectDishesFrom] = useState<
    'From Wishlist' | 'From Menu' | null
  >(null);

  return (
    <ModalsWrapper>
      <>
        <TwoOptionsModal
          heading="Select dishes"
          buttons={{
            button1: {
              action: () => {
                setToggleSelectDishesFrom('From Wishlist');
                openSelectModal();
              },
              decorator: <IoHeart />,
              innerTxt: 'From Wishlist',
            },
            button2: {
              action: () => {
                setToggleSelectDishesFrom('From Menu');
                openSelectModal();
              },
              decorator: <GiNotebook />,
              innerTxt: 'From Menu',
            },
          }}
        />
        <Suspense fallback="Loading...">
          {toggleSelectDishesFrom !== null && (
            <SelectModal
              selectDishFrom={
                toggleSelectDishesFrom === 'From Menu' ? (
                  <FromMenu />
                ) : (
                  <FromWishlist />
                )
              }
            />
          )}
        </Suspense>
      </>
    </ModalsWrapper>
  );
}

export default SelectDishes;
