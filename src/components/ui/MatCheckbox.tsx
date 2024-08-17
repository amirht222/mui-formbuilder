import CheckBoxIcon from '@mui/icons-material/CheckBox';
import {Checkbox, CheckboxProps} from '@mui/material';
import {boolean, define, oneOf} from '@react-form-builder/core';

const MatCheckboxIcon = () => {
  return <CheckBoxIcon color="secondary" />;
};

type MatCheckboxProps = CheckboxProps & {
  onChange?: (value: any) => void;
};

const MatCheckbox = (props: MatCheckboxProps) => {
  const {onChange, ...otherProps} = props;
  return (
    <Checkbox
      {...otherProps}
      onChange={event => {
        onChange?.(event.target.checked);
      }}
    />
  );
};

export const matCheckbox = define(MatCheckbox, 'MatCheckbox')
  .name('Checkbox')
  .props({
    checked: boolean.valued.default(true),
    color: oneOf('primary', 'secondary', 'success', 'error', 'info', 'warning'),
    disabled: boolean.default(false),
  })
  .icon(MatCheckboxIcon);
