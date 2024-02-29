import { TiHome as IconHome } from 'react-icons/ti';
import {
  MdDiscount as IconPromo,
  MdRestaurantMenu as IconMenu,
} from 'react-icons/md';
import { IoHeart as IconWish } from 'react-icons/io5';
import { GiNotebook as IconBook } from 'react-icons/gi';
import Item, { NavItemProps } from './Item';

import useToggleActiveNav from './hooks/useToggleActiveNav';

const ItemMap = () => {
  const { activeMap, changeActive } = useToggleActiveNav();

  const mapObj: NavItemProps[] = [
    {
      icon: <IconPromo />,
      txt: 'Promos',
      path: '/promos',
      activeMap,
      changeActive,
    },
    {
      icon: <IconWish />,
      txt: 'Wishlist',
      path: '/wishlist',
      activeMap,
      changeActive,
    },
    {
      icon: <IconHome />,
      txt: 'Home',
      path: '/',
      activeMap,
      changeActive,
    },
    {
      icon: <IconMenu />,
      txt: 'Menu',
      path: '/menu',
      activeMap,
      changeActive,
    },
    {
      icon: <IconBook />,
      txt: 'Book',
      path: '/reservation',
      activeMap,
      changeActive,
    },
  ];

  return mapObj.map((el) => (
    <Item
      key={el.txt}
      icon={el.icon}
      txt={el.txt}
      path={el.path}
      activeMap={el.activeMap}
      changeActive={el.changeActive}
    />
  ));
};

export default ItemMap;
