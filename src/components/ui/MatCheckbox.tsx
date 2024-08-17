import CheckBoxIcon from "@mui/icons-material/CheckBox";
import {
    Checkbox,
    CheckboxProps
} from "@mui/material";
import { boolean, define } from "@react-form-builder/core";

const MatCheckboxIcon = () => {
  return <CheckBoxIcon sx={{ color: "tomato" }} />;
};

type MatCheckboxProps = CheckboxProps & {
  onChange?: (value: any) => void;
};

const MatCheckbox = (props: MatCheckboxProps) => {
  const { onChange, ...otherProps } = props;
  return (
    <Checkbox
      {...otherProps}
      onChange={(event) => {
        onChange?.(event.target.value);
      }}
    />
  );
};

export const matCheckbox = define(MatCheckbox, "MatCheckbox")
  .name("Checkbox")
  .props({
    checked: boolean.valued.default(true),
  })
  .icon(MatCheckboxIcon);
