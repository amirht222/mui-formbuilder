import { TextField, TextFieldProps } from "@mui/material";
import { define, string } from "@react-form-builder/core";
import CreateIcon from "@mui/icons-material/Create";

const TextFieldIcon = () => {
  return <CreateIcon sx={{ color: "tomato" }} />;
};

type MatTextFieldProps = TextFieldProps & {
  onChange?: (value: any) => void;
};

const MatTextField = (props: MatTextFieldProps) => {
  const { onChange, ...otherProps } = props;
  return (
    <TextField
      {...otherProps}
      onChange={(event) => {
        onChange?.(event.target.value);
      }}
    />
  );
};

export const matTextField = define(MatTextField, "MatTextField")
  .name("Text Field")
  .props({
    value: string.valued.default(""),
  })
  .icon(TextFieldIcon);
