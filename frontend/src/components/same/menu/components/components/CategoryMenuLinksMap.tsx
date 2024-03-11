import { Link } from '@mui/joy';

const linksArray = [
  {
    name: 'Fish',
    active: true,
  },
  {
    name: 'Pasta',
    active: false,
  },
  {
    name: 'Risotto',
    active: false,
  },
  {
    name: 'Soups',
    active: false,
  },
  {
    name: 'Salads',
    active: false,
  },
  {
    name: 'Drinks',
    active: false,
  },
  {
    name: 'Others',
    active: false,
  },
];

function CategoryMenuLinksMap() {
  return linksArray.map((link) => (
    <Link
      sx={(theme) => ({
        fontSize: { xs: '0.875rem' },
        fontWeight: '600',
        lineHeight: '142%',
        color: theme.palette.primary[link.active ? 500 : 100],
      })}
      key={link.name}
      href="/"
    >
      {link.name}
    </Link>
  ));
}

export default CategoryMenuLinksMap;
