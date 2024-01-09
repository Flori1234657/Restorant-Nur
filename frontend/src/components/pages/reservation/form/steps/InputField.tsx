import { FormControl, FormHelperText, FormLabel, Input } from "@mui/joy";

type InputProps = {
  label: string;
  placeholder: string;
  type: React.HTMLInputTypeAttribute;
  errorText: string;
  actions?: () => void;
};

const InputField = (props: InputProps) => {
  return (
    <FormControl>
      <FormLabel>{props.label}</FormLabel>
      <Input
        type={props.type}
        placeholder={props.placeholder}
        onClick={props.actions && props.actions}
      />
      <FormHelperText>{props.errorText}</FormHelperText>
    </FormControl>
  );
};

export default InputField;
