import { define, node, number } from "@react-form-builder/core";
import type { ReactNode } from "react";
import ViewStreamIcon from "@mui/icons-material/ViewStream";
import { Grid } from "@mui/material";

const GridIcon = () => {
  return <ViewStreamIcon sx={{ color: "tomato" }} />;
};

interface MatGridProps {
  rightCol: ReactNode;
  leftCol: ReactNode;
  spacing?: number;
}

export const MatGrid = (props: MatGridProps) => {
  return (
    <Grid container spacing={props.spacing}>
      <Grid item xs={6}>
        {props.rightCol}
      </Grid>
      <Grid item xs={6}>
        {props.leftCol}
      </Grid>
    </Grid>
  );
};

export const matGrid = define(MatGrid, "MatGrid")
  .name("Two Cols")
  .icon(GridIcon)
  .props({
    rightCol: node,
    leftCol: node,
    spacing: number.default(5),
  });
