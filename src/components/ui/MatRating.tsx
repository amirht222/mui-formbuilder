import StarHalfIcon from "@mui/icons-material/StarHalf";
import { Rating, RatingProps } from "@mui/material";
import { define, number } from "@react-form-builder/core";

const MatRatingIcon = () => {
  return <StarHalfIcon sx={{ color: "tomato" }} />;
};

type MatRatingProps = RatingProps & {
  onChange?: (value: any) => void;
};

const MatRating = (props: MatRatingProps) => {
  const { onChange, ...otherProps } = props;
  return (
    <Rating
      {...otherProps}
      onChange={(_event, newValue) => {
        onChange?.(newValue);
      }}
    />
  );
};

export const matRating = define(MatRating, "MatRating")
  .name("Rating")
  .props({
    value: number.valued.default(1),
  })
  .icon(MatRatingIcon);
