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
          sx={{
            minHeight: { md: '1.625rem' },
            minWidth: { md: '1.625rem' },
            '--Icon-fontSize': { md: '1rem' },
            fontSize: { md: '0.75rem' },
          }}
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
            fontSize: { xs: '0.75rem', md: '0.625rem' },
            fontWeight: 'bold',
            color: theme.palette.secondary.gray4,
            ':hover': {
              cursor: 'not-allowed',
              bgcolor: 'transparent !important',
              color: `${theme.palette.secondary.gray4} !important`,
            },
            minHeight: { md: '0 !important' },
          })}
        >
          FILTER BY
        </MenuItem>
        {['Price', 'Prc', 'Prics'].map((option) => (
          <MenuItem
            key={option}
            sx={(theme) => ({
              fontSize: { md: '0.75rem' },
              color: theme.palette.primary[500],
              bgcolor:
                selectedFilter === option
                  ? theme.palette.secondary.black3
                  : 'transparent',
              minHeight: { md: '0 !important' },
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
