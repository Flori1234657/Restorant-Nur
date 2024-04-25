import { Option, Select } from '@mui/joy';
import useViewPortWidth from '@/hooks/useViewPortWidth';
import { useFormUiStore } from '@/components/pages/reservation/form/state/uiState';

function SelectTable() {
  const { vw } = useViewPortWidth();

  const setSelectedTable = useFormUiStore(
    (state) => state.tableModal.setSelectedTable
  );

  const placeholderTablesArr = [
    {
      tableNr: 'T-1',
      available: true,
    },
    {
      tableNr: 'T-2',
      available: false,
    },
    {
      tableNr: 'T-3',
      available: true,
    },
  ];

  return (
    <Select
      size={vw < 900 ? 'sm' : 'xs'}
      color="primary"
      variant="solid"
      placeholder="Select a table"
      slotProps={{
        listbox: {
          placement: 'bottom-start',
        },
      }}
      onChange={(e, newValue: string | null) =>
        setSelectedTable(newValue || '')
      }
    >
      {placeholderTablesArr.map((table) => (
        <Option
          key={table.tableNr}
          value={table.tableNr}
          disabled={!table.available}
        >
          {table.tableNr}
        </Option>
      ))}
    </Select>
  );
}

export default SelectTable;
