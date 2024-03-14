import { ListItem, ListItemDecorator, Typography } from '@mui/joy';
import {
  FaUserFriends as PersonsIcon,
  FaCalendar as DateIcon,
  FaClock as ClockIcon,
} from 'react-icons/fa';
import { MdTableBar as TableIcon } from 'react-icons/md';
import theme from '@/customTheme';
import detialIconStyles from '../../../sxObj/detailStyles';

const bookDetails = [
  {
    icon: <PersonsIcon />,
    name: 'Persons',
    value: '4',
  },
  {
    icon: <DateIcon />,
    name: 'Date',
    value: '06-03-2023',
  },
  {
    icon: <ClockIcon />,
    name: 'Time',
    value: '21 : 30',
  },
  {
    icon: <TableIcon />,
    name: 'Table',
    value: 'T-20',
  },
];

function BookDetailsMap() {
  return (
    <>
      {bookDetails.map((detail) => (
        <ListItem
          key={detail.name}
          sx={{ gap: '0.5rem', p: 0, width: 'auto', minBlockSize: 'auto' }}
        >
          <ListItemDecorator sx={detialIconStyles}>
            {detail.icon}
          </ListItemDecorator>{' '}
          <Typography
            sx={{
              color: theme.palette.primary[100],
              fontWeight: '300',
              fontSize: { md: '0.875rem', lg: '0.8rem', xl: '0.731rem' },
            }}
          >
            {`${detail.name}: ${detail.value}`}
          </Typography>
        </ListItem>
      ))}
    </>
  );
}

export default BookDetailsMap;
