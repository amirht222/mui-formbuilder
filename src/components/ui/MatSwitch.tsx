import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import {Switch, SwitchProps} from '@mui/material';
import {boolean, define, oneOf} from '@react-form-builder/core';

const MatSwitchIcon = () => {
  return <ToggleOffIcon color="secondary" />;
};

type MatSwitchProps = SwitchProps & {
  onChange?: (value: any) => void;
};

const MatSwitch = (props: MatSwitchProps) => {
  const {onChange, ...otherProps} = props;
  return (
    <Switch
      {...otherProps}
      onChange={event => {
        onChange?.(event.target.checked);
      }}
    />
  );
};

export const matSwitch = define(MatSwitch, 'MatSwitch')
  .name('Switch')
  .props({
    checked: boolean.valued.default(true),
    color: oneOf('primary', 'secondary', 'success', 'error', 'info', 'warning'),
    disabled: boolean.default(false),
  })
  .icon(MatSwitchIcon);
