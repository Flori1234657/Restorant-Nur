import {
  Badge,
  Dropdown,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
} from '@mui/joy';
import { useState } from 'react';
import { FaFilter } from 'react-icons/fa';

function Filter() {
  const [selectedFilter, setSelectedFilter] = useState<string | undefined>(
    undefined
  );

  return (
    <Dropdown>
      <Badge invisible={!selectedFilter}>
        <MenuButton
          slots={{ root: IconButton }}
          slotProps={{ root: { variant: 'solid', color: 'primary' } }}
        >
          <FaFilter />
        </MenuButton>
      </Badge>
      <Menu
        sx={(theme) => ({
          bgcolor: theme.palette.secondary.black2,
          border: `1px solid ${theme.palette.primary[500]}`,
          ml: '2rem !important',
          minWidth: '6.25rem',
          borderRadius: '0.5rem',
        })}
      >
        <MenuItem
          sx={(theme) => ({
            fontSize: '0.75rem',
            fontWeight: 'bold',
            color: theme.palette.secondary.gray4,
          })}
        >
          FILTER BY
        </MenuItem>
        {['Price', 'Prc', 'Prics'].map((option) => (
          <MenuItem
            key={option}
            sx={(theme) => ({
              color: theme.palette.primary[500],
              bgcolor:
                selectedFilter === option
                  ? theme.palette.secondary.black3
                  : 'transparent',
            })}
            onClick={() =>
              setSelectedFilter((prev) =>
                prev === option ? undefined : option
              )
            }
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </Dropdown>
  );
}

export default Filter;
