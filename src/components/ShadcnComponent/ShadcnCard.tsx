import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import phoneData from "src/data/nokia.json";
import { ImgProps } from "src/pages/CardRadixUiPage";
import VariantColor from "./VariantColor";

export type ColorProps = "pink" | "black";

export interface ICharacteristics {
  name: string;
  value: string;
}

export interface IPhoneData {
  title: string;
  model: string;
  rating: number;
  prise: number;
  goodsInStock: number;
  img: ImgProps;
  video: string;
  description: string;
  colors: string[];
  memory: number[];
  ram: number[];
  characteristics: ICharacteristics[];
  condition: string;
  "in-box": string[];
  delivery: {
    shipping: string;
    location: string;
    delivery: string;
    returns: string;
    payments: string[];
  };
  accessories: {}[];
  reviews: {}[];
}

type ShadcnCardProps = {};

function ShadcnCard({}: ShadcnCardProps) {
  const location = useLocation();
  const [color, setColor] = useState<ColorProps>("pink");

  const changeColor = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const chooseColor = e.currentTarget.dataset.color as ColorProps;
    setColor(chooseColor);
  };

  return (
    <Card className="p-[24px] border border-[#0009321f] rounded-[12px]">
      <Link to="/cardShadcnUi" state={{ from: location, color: color }}>
        <CardContent className="flex justify-center p-0 mb-[12px]">
          <img
            src={phoneData.img[color][0]}
            alt={phoneData.title}
            className="object-contain h-[180px] "
          />
        </CardContent>
        <CardHeader className="p-0">
          <CardDescription
            color="amber"
            className="text-base text-[#ab6400] font-bold"
          >
            {phoneData.prise}$
          </CardDescription>
          <CardTitle className="text-lg">{phoneData.title}</CardTitle>
          <CardDescription className="text-[#1f1f1f]">
            {phoneData.description}
          </CardDescription>
        </CardHeader>
      </Link>
      <VariantColor
        changeColor={changeColor}
        color={color}
        colorsArray={phoneData.colors}
        className="mt-2"
      />
    </Card>
  );
}

export default ShadcnCard;
