import LinearScaleIcon from "@mui/icons-material/LinearScale";
import { Slider, SliderProps } from "@mui/material";
import { define, number } from "@react-form-builder/core";

const MatSliderIcon = () => {
  return <LinearScaleIcon sx={{ color: "tomato" }} />;
};

type MatSliderProps = SliderProps & {
  onChange?: (value: any) => void;
};

const MatSlider = (props: MatSliderProps) => {
  const { onChange, ...otherProps } = props;
  return (
    <Slider
      {...otherProps}
      onChange={(_event, newValue) => {
        onChange?.(newValue);
      }}
    />
  );
};

export const matSlider = define(MatSlider, "MatSlider")
  .name("Slider")
  .props({
    value: number.valued.default(10),
  })
  .icon(MatSliderIcon);
