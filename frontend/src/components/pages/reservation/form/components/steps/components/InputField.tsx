import { FormControl, FormHelperText, FormLabel, Input } from '@mui/joy';
import useViewPortWidth from '@/hooks/useViewPortWidth';

type InputProps = {
  label: string;
  placeholder: string;
  type: React.HTMLInputTypeAttribute;
  errorText: string;
  actions?: () => void;
};

function InputField({
  errorText,
  label,
  placeholder,
  type,
  actions,
}: InputProps) {
  const { vw } = useViewPortWidth();

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
        placeholder={placeholder}
        onClick={actions && actions}
        size={vw < 900 ? 'sm' : 'xs'}
      />
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
        {errorText}
      </FormHelperText>
    </FormControl>
  );
}

InputField.defaultProps = {
  actions: () => {},
};

export default InputField;
