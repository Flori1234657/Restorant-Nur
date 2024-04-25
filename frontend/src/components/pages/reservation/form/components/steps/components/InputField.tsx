import { FormControl, FormHelperText, FormLabel, Input } from '@mui/joy';
import { useFormContext } from 'react-hook-form';
import useViewPortWidth from '@/hooks/useViewPortWidth';
import { ReservationForm } from '../interface/form';
import { useFormUiStore } from '../../../state/uiState';

type InputProps = {
  label: string;
  placeholder: string;
  name: keyof ReservationForm;
  type: React.HTMLInputTypeAttribute;
  errorText: string;
  actions?: () => void;
};

function InputField({
  errorText,
  label,
  name,
  placeholder,
  type,
  actions,
}: InputProps) {
  const { vw } = useViewPortWidth();
  const selectedTable = useFormUiStore(
    (state) => state.tableModal.selectedTable
  );

  const { register, formState } = useFormContext<ReservationForm>();
  const { errors } = formState;

  return (
    <FormControl>
      <FormLabel
        sx={(theme) => ({
          fontSize: {
            xs: '0.875rem',
            md: '0.75rem',
            lg: '0.7rem',
            xl: '0.65rem',
          },
          fontWeight: '300',
          lineHeight: '142%',
          color: theme.palette.primary[50],
        })}
      >
        {label}
      </FormLabel>
      <Input
        type={type}
        value={label === 'Table' ? selectedTable : undefined}
        placeholder={placeholder}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...register(name, { required: errorText })}
        onClick={actions && actions}
        size={vw < 900 ? 'sm' : 'xs'}
      />
      {errors[name] ? (
        <FormHelperText
          sx={(theme) => ({
            fontSize: {
              xs: '0.75rem',
              md: '0.625rem',
              lg: '0.6rem',
              xl: '0.569rem',
            },
            fontWeight: '300',
            color: theme.palette.danger[500],
          })}
        >
          {errors[name]?.message}
        </FormHelperText>
      ) : (
        ''
      )}
    </FormControl>
  );
}

InputField.defaultProps = {
  actions: () => {},
};

export default InputField;
