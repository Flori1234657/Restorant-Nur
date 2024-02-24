import { useState } from 'react';

export type NavActiveItems = {
  Promos: boolean;
  Wishlist: boolean;
  Home: boolean;
  Menu: boolean;
  Book: boolean;
};

const useToggleActiveNav = () => {
  const defaultObj = {
    Promos: false,
    Wishlist: false,
    Home: false,
    Menu: false,
    Book: false,
  };

  const [activeMap, setActiveMap] = useState<NavActiveItems>({
    ...defaultObj,
    Home: true,
  });

  const changeActive = (
    name: 'Promos' | 'Wishlist' | 'Home' | 'Menu' | 'Book'
  ) => {
    const newObj = structuredClone(defaultObj);
    setActiveMap({ ...newObj, [name]: true });
  };

  return { activeMap, changeActive };
};

export default useToggleActiveNav;
