import MenuIcon from "@mui/icons-material/Menu";
import { MenuItem, Select, SelectProps } from "@mui/material";
import { array, define, toLabeledValues } from "@react-form-builder/core";

type MenuItem = {
  label: string;
  value: string;
};

const SelectIcon = () => {
  return <MenuIcon sx={{ color: "tomato" }} />;
};

type MatSelectProps = SelectProps & {
  items?: MenuItem[];
};

const MatSelectGroup = (props: MatSelectProps) => {
  const { items, ...otherProps } = props;
  return (
    <Select {...otherProps} name="select-component">
      {items?.map((item) => (
        <MenuItem value={item.value}>{item.label}</MenuItem>
      ))}
    </Select>
  );
};

export const matSelect = define(MatSelectGroup, "MatSelect")
  .name("Select")
  .props({
    items: array.default(toLabeledValues(["Item1", "Item2", "Item3"])),
  })
  .icon(SelectIcon);
