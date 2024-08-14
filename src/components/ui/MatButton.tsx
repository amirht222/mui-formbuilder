import { Button } from "@mui/material";
import {
  boolean,
  define,
  oneOf,
  string,
  event,
  size,
  number,
  color,
} from "@react-form-builder/core";
import GamepadIcon from "@mui/icons-material/Gamepad";

const ButtonIcon = () => {
  return <GamepadIcon sx={{ color: "tomato" }} />;
};
// Let's call our component matButton, using the prefix 'mat' to make it easy to understand
// from the name that the component belongs to the MUI library.
//
// Here we call the define function and pass it two parameters - the Button component
// and the unique name of the component type.
export const matButton = define(Button, "MatButton")
  // component name displayed in the component panel in the designer
  .name("Button")
  // define the component properties that we want to edit in the designer
  .props({
    // button text
    children: string.named("Caption").default("Button"),
    // button color
    color: oneOf(
      "inherit",
      "primary",
      "secondary",
      "success",
      "error",
      "info",
      "warning"
    ),
    // button disable flag
    disabled: boolean,
    // сallback fired when the button is clicked.
    onClick: event,
    variant: oneOf("outlined", "text", "contained"),
  })
  .icon(ButtonIcon)
  // .css({
  //   borderStyle: oneOf(
  //     "solid",
  //     "dashed",
  //     "dotted",
  //     "double",
  //     "center",
  //     "groove"
  //   ).default("solid"),
  //   borderWidth: size.default("1px"),
  //   borderRadius: number.default(0),
  //   borderColor: color.default("black"),
  //   textAlign: oneOf("start", "end", "left", "right", "center", "justify"),
  // });
