import {TextField, TextFieldProps} from '@mui/material';
import {boolean, define, oneOf, string} from '@react-form-builder/core';
import CreateIcon from '@mui/icons-material/Create';

const TextFieldIcon = () => {
  return <CreateIcon color="secondary" />;
};

type MatTextFieldProps = TextFieldProps & {
  onChange?: (value: any) => void;
};

const MatTextField = (props: MatTextFieldProps) => {
  const {onChange, ...otherProps} = props;
  return (
    <TextField
      {...otherProps}
      onChange={event => {
        onChange?.(event.target.value);
      }}
    />
  );
};

export const matTextField = define(MatTextField, 'MatTextField')
  .name('Text Field')
  .props({
    value: string.valued.default(''),
    placeholder: string,
    color: oneOf('primary', 'secondary'),
    disabled: boolean.default(false),
    multiline: boolean.default(false),
    variant: oneOf('outlined', 'filled', 'standard').default('standard'),
    helperText: string,
  })
  .icon(TextFieldIcon);
