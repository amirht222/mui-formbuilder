import DialpadIcon from "@mui/icons-material/Dialpad";
import { Button, ButtonGroup, ButtonGroupProps } from "@mui/material";
import {
  array,
  define,
  oneOf,
  toLabeledValues,
} from "@react-form-builder/core";

type ButtonItem = {
  label: string;
  value: string;
};

const ButtonGroupIcon = () => {
  return <DialpadIcon sx={{ color: "tomato" }} />;
};

type MatButtonGroupProps = ButtonGroupProps & {
  items?: ButtonItem[];
};

const MatButtonGroup = (props: MatButtonGroupProps) => {
  const { items, ...otherProps } = props;
  return (
    <ButtonGroup {...otherProps}>
      {items?.map((item) => (
        <Button>{item.label}</Button>
      ))}
    </ButtonGroup>
  );
};

export const matButtonGroup = define(MatButtonGroup, "MatButtonGroup")
  .name("Button Group")
  .props({
    items: array.default(toLabeledValues(["Button1", "Button2", "Button3"])),
    variant: oneOf("outlined", "text", "contained"),
  })
  .icon(ButtonGroupIcon);
