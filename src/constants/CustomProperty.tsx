import type { AnnotationEditorProps } from "@react-form-builder/designer";
import { FormBuilder } from "@react-form-builder/designer";
import { useCallback } from "react";
import { RgbaColorPicker } from "react-colorful";

export const MyKeyInput = (props: AnnotationEditorProps) => {
  const { value, onChange } = props;
  return (
    <input value={value} onChange={(event) => onChange(event.target.value)} />
  );
};

/**
 * Converts the string containing a rgba color value into an object.
 * @param value the string containing a rgba color.
 * @returns the object with properties '{r, g, b, a}'.
 */
export function rgbFromString(value: string) {
  const matchColors =
    /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/;
  const [, r, g, b, a] = matchColors.exec(value) || [];
  return { r: Number(r), g: Number(g), b: Number(b), a: Number(a) };
}

export const MyColorInput = (props: AnnotationEditorProps) => {
  const { value, onChange, onClean, showError, annotation } = props;

  const onColorChange = useCallback(
    (newColor?: { r: number; g: number; b: number; a: number }) => {
      if (newColor) {
        const { r, g, b, a } = newColor;
        onChange(`rgba(${r}, ${g}, ${b}, ${a})`);
        return;
      }
      onChange(newColor);
    },
    [onChange]
  );

  const color = rgbFromString(value ?? "rgb(0,255,255)");

  return (
    <div>
      <label>{annotation.name}</label>
      <RgbaColorPicker color={color} onChange={onColorChange} />
      <label>Error!</label>
      <button onClick={onClean}>Clean</button>
    </div>
  );
};
