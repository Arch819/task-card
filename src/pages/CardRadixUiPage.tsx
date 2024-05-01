import React, { useState } from "react";
import phoneData from "../data/samsung.json";

import { useLocation } from "react-router-dom";
import { Grid } from "@radix-ui/themes";
import ButtonBack from "../components/ButtonBack";
import { ColorProps } from "../components/RedixComponent/RadixUICard";
import DetailItem from "../components/RedixComponent/DetailItem";
import ImgCardBox from "../components/RedixComponent/ImgCardBox";
import InfoOptionBox from "../components/RedixComponent/InfoOptionBox";

export interface ImgProps {
  [key: string]: string[];
}

export interface ICartData {
  title: string;
  prise: number;
  rating: number;
  img: ImgProps;
  description: string;
  colors: string[];
  memory: number[];
  ram: number[];
  features: { name: string; value: string }[];
  condition: string;
  "in-box": string[];
  delivery: {
    shipping: string;
    location: string;
    delivery: string;
    returns: string;
    payments: string[];
  };
  availability: boolean;
}

type CardRadixUiPageProps = {};

function CardRadixUiPage({}: CardRadixUiPageProps) {
  const location = useLocation();
  const [color, setColor] = useState<ColorProps>(location.state.color || "red");
  const [showImg, setShowImg] = useState(0);
  const [memory, setMemory] = useState(phoneData.memory[0]);
  const [ram, setRam] = useState(phoneData.ram[0]);

  const changeImg = (i?: number, c?: "next" | "prev") => {
    if (i) {
      setShowImg(i);
    }
    if (c) {
      if (c === "next" && showImg < phoneData.img[color].length - 1) {
        setShowImg((prev) => prev + 1);
      }
      if (c === "prev" && showImg > 0) {
        setShowImg((prev) => prev - 1);
      }
    }
  };

  const changeRam = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { value } = e.currentTarget;
    if (isNaN(Number(value))) {
      return;
    }
    const indexValue = Number(value) - 1;
    setRam(phoneData.ram[indexValue]);
  };

  const changeMemory = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { value } = e.currentTarget;
    if (isNaN(Number(value))) {
      return;
    }
    const indexValue = Number(value) - 1;
    setMemory(phoneData.memory[indexValue]);
  };

  const changeColor = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const chooseColor = e.currentTarget.dataset.color as ColorProps;
    setColor(chooseColor);
  };

  return (
    <div>
      <ButtonBack />
      <Grid columns="2" gap="8">
        <ImgCardBox
          changeImg={changeImg}
          imgs={phoneData.img}
          color={color}
          currentImgIndex={showImg}
          title={phoneData.title}
        />
        <Grid rows="300px 1fr" gap="8">
          <InfoOptionBox
            memory={memory}
            ram={ram}
            data={phoneData}
            color={color}
            changeMemory={changeMemory}
            changeRam={changeRam}
            changeColor={changeColor}
          />
          <DetailItem data={phoneData} params={{ memory, ram }} />
        </Grid>
      </Grid>
    </div>
  );
}

export default CardRadixUiPage;
