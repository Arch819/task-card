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

export type ColorProps = "pink" | "black";

export interface IPhoneData {
  title: string;
  model: string;
  prise: number;
  goodsInStock: number;
  img: ImgProps;
  video: string;
  description: string;
  colors: string[];
  memory: number[];
  ram: number[];
  characteristics: { name: string; value: string }[];
  condition: string;
  "in-box": string[];
  delivery: {
    shipping: string;
    location: string;
    delivery: string;
    returns: string;
    payments: string[];
  };
  accessories: [];
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
    <Card
      className="px-10"
      style={{
        padding: "24px",
        border: "1px solid #0009321f",
        borderRadius: "12px",
      }}
    >
      <Link
        to="/"
        state={{ from: location, color: color }}
        style={{ color: "#1f1f1f" }}
      >
        <CardContent>
          <img
            src={phoneData.img[color][0]}
            alt={phoneData.title}
            style={{
              display: "block",
              objectFit: "contain",
              width: "100%",
              height: 180,
              marginBottom: "12px",
            }}
          />
          {/* <iframe
            width="576"
            height="324"
            src="https://www.youtube.com/embed/vzoLiA9R0eo"
            title="Обзор Nokia 4.2 - когда слышишь отзвуки прошлого"
            // frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe> */}
        </CardContent>
        <CardHeader>
          <CardDescription color="amber" className="w-700">
            {phoneData.prise}$
          </CardDescription>
          <CardTitle>{phoneData.title}</CardTitle>
          <CardDescription>{phoneData.description}</CardDescription>
        </CardHeader>
      </Link>
    </Card>
  );
}

export default ShadcnCard;
