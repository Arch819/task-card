import React from "react";
import { ColorProps } from "./ShadcnCard";

interface ArrayColorProps {
  [key: string]: string[];
}

type Props = {
  color: ColorProps;
  colorsArray: string[];
  changeColor: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
};
export const arrayColor: ArrayColorProps = {
  Pink: ["pink", "#d19191"],
  Black: ["black", "#2b2a2a"],
};

function VariantColor({ color, changeColor, colorsArray, className }: Props) {
  return (
    <div className={`flex gap-1 ${className}`}>
      {colorsArray.map((c) => (
        <button
          key={c}
          data-color={arrayColor[c][0]}
          onClick={changeColor}
          className={
            color === arrayColor[c][0] ? "btn-color active" : "btn-color"
          }
          style={{
            width: "20px",

            backgroundColor: `${arrayColor[c][1]}`,
            height: "20px",
            cursor: "pointer",
            borderRadius: "4px",
          }}
        />
      ))}
    </div>
  );
}

export default VariantColor;
