import { define, node, number } from "@react-form-builder/core";
import type { ReactNode } from "react";
import WindowIcon from "@mui/icons-material/Window";

const GridIcon = () => {
  return <WindowIcon sx={{ color: "tomato" }} />;
};

interface TailGridProps {
  items?: ReactNode[];
  gap: number;
  cols: number;
}

export const TailGrid = ({ items, gap, cols }: TailGridProps) => {

  return (
    <div>
      <div className={`grid grid-cols-${cols} gap-${gap}`}>
        {Array.from({ length: cols }).map((_, index) => (
          <div key={index}>{items}</div>
        ))}
      </div>
    </div>
  );
};

export const tailGrid = define(TailGrid, "TailGrid")
  .name("Grid")
  .icon(GridIcon)
  .props({
    gap: number.default(5),
    cols: number.default(1),
    items: node,
  });
