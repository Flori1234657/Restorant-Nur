import { FormControl, FormHelperText, FormLabel, Input } from '@mui/joy';

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
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Input
        type={type}
        placeholder={placeholder}
        onClick={actions && actions}
      />
      <FormHelperText>{errorText}</FormHelperText>
    </FormControl>
  );
}

export default InputField;
