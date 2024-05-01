import { Grid, Button } from "@radix-ui/themes";
import React from "react";
import { ColorProps } from "./RadixUICard";

interface ArrayColorProps {
  [key: string]: string[];
}

type Props = {
  color: ColorProps;
  colorsArray: string[];
  changeColor: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};
export const arrayColor: ArrayColorProps = {
  Red: ["red", "#ff0000"],
  Grey: ["grey", "#616161"],
  "Sky Blue": ["skyblue", "#87CEEB"],
};

function VariantColor({ color, changeColor, colorsArray }: Props) {
  return (
    // <Grid columns="3" gap="1" width="70px">
    //   <Button
    //     size="1"
    //     variant="solid"
    //     radius="small"
    //     data-color="pastel-green"
    //     onClick={changeColor}
    //     className={
    //       color === "grey" ? "btn-color btn-color active" : "btn-color"
    //     }
    //     style={{
    //       backgroundColor: "#616161",
    //       height: "20px",
    //       cursor: "pointer",
    //     }}
    //   />
    //   <Button
    //     size="1"
    //     variant="solid"
    //     radius="small"
    //     data-color="red"
    //     onClick={changeColor}
    //     className={color === "red" ? "btn-color active" : "btn-color"}
    //     style={{
    //       backgroundColor: "#ff0000",
    //       height: "20px",
    //       cursor: "pointer",
    //     }}
    //   />
    //   <Button
    //     size="1"
    //     variant="solid"
    //     radius="small"
    //     data-color="sky-blue"
    //     onClick={changeColor}
    //     className={color === "skyblue" ? "btn-color active" : "btn-color"}
    //     style={{
    //       backgroundColor: "#87CEEB",
    //       height: "20px",
    //       cursor: "pointer",
    //     }}
    //   />
    // </Grid>
    <Grid columns="3" gap="1" width="70px">
      {colorsArray.map((c) => {
        return (
          <Button
            size="1"
            variant="solid"
            radius="small"
            data-color={arrayColor[c][0]}
            onClick={changeColor}
            className={
              color === arrayColor[c][0] ? "btn-color active" : "btn-color"
            }
            style={{
              backgroundColor: `${arrayColor[c][1]}`,
              height: "20px",
              cursor: "pointer",
            }}
          />
        );
      })}
    </Grid>
  );
}

export default VariantColor;
