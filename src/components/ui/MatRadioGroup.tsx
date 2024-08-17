import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import {
  FormControlLabel,
  Radio,
  RadioGroup,
  RadioGroupProps,
} from '@mui/material';
import {array, define, toLabeledValues} from '@react-form-builder/core';

type RadioItem = {
  label: string;
  value: string;
};

const RadioGroupIcon = () => {
  return <RadioButtonCheckedIcon color="secondary" />;
};

type MatRadioGroupProps = RadioGroupProps & {
  items?: RadioItem[];
};

const MatRadioGroup = (props: MatRadioGroupProps) => {
  const {items, onChange, ...otherProps} = props;
  return (
    <RadioGroup {...otherProps} name="radio-buttons-group">
      {items?.map(item => (
        <FormControlLabel
          value={item.value}
          control={<Radio />}
          label={item.label}
        />
      ))}
    </RadioGroup>
  );
};

export const matRadioGroup = define(MatRadioGroup, 'MatRadioGroup')
  .name('Radio Group')
  .props({
    items: array.default(toLabeledValues(['Item1', 'Item2', 'Item3'])),
  })
  .icon(RadioGroupIcon);
