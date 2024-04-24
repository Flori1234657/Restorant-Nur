import { Link } from '@mui/joy';
import useMenuStore from '../../state/menuState';

function CategoryMenuLinksMap() {
  const menuLinks = useMenuStore();

  return menuLinks.menuFoodCategories.map((link) => (
    <Link
      sx={(theme) => ({
        fontSize: { xs: '0.875rem', md: '0.75rem' },
        fontWeight: '600',
        lineHeight: { xs: '142%', md: '155%' },
        color: theme.palette.primary[link.isActive ? 500 : 100],
      })}
      key={link.name}
      href="/"
    >
      {link.name}
    </Link>
  ));
}

export default CategoryMenuLinksMap;
