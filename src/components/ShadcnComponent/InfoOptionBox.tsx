import React, { useState } from "react";
import VariantColor from "./VariantColor";
import { ColorProps, IPhoneData } from "./ShadcnCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Progress } from "./ui/progress";
import { Checkbox } from "./ui/checkbox";
import RatingComponent from "../Rating";

interface PriceProps {
  ram: { [key: string]: number };
  memory: { [key: string]: number };
}

type Props = {
  ram: number;
  memory: number;
  data: IPhoneData;
  color: ColorProps;
  changeMemory: (v: string) => void;
  changeRam: (v: string) => void;
  changeColor: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
};

function InfoOptionBox({
  ram,
  memory,
  data,
  color,
  changeMemory,
  changeRam,
  changeColor,
  className,
}: Props) {
  const countPrice = () => {
    const price: PriceProps = {
      ram: {
        "3": 50,
        "8": 100,
        "16": 200,
      },
      memory: {
        "32": 50,
        "64": 100,
        "128": 200,
      },
    };
    const totalPrice = data.prise + price.ram[ram] + price.memory[memory];

    return totalPrice.toFixed(2);
  };

  return (
    <div className={className}>
      <h2 className="text-5xl font-extrabold mb-2">{data.title}</h2>
      <p className="font-medium mb-4">{data.description}</p>
      <RatingComponent rating={data.rating} />
      <div className="flex flex-col gap-4 mb-6">
        <div className="flex items-center gap-4">
          <p className="text-sm font-medium">COLOR: </p>
          <div>
            <p className={`text-xs text-[${color}] uppercase`}>{color}</p>
            <VariantColor
              color={color}
              changeColor={changeColor}
              colorsArray={data.colors}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 max-w-[140px]">
          <Select onValueChange={changeRam}>
            <SelectTrigger className="w-[100px]">
              <SelectValue placeholder="Ram" />
            </SelectTrigger>
            <SelectContent>
              {data.ram.map((o) => (
                <SelectItem key={o} value={`${o}`}>
                  {o}GB
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select onValueChange={changeMemory}>
            <SelectTrigger className="w-[100px]">
              <SelectValue placeholder="Memory" />
            </SelectTrigger>
            <SelectContent>
              {data.memory.map((o) => (
                <SelectItem key={o} value={`${o}`}>
                  {o}GB
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-2 w-full justify-between items-end mb-6">
          <div>
            <p className="mb-2  font-medium">Goods in stock</p>
            <Progress value={data.goodsInStock} className="w-[50%] h-[8px] " />
          </div>
          <p className="flex gap-2 items-center">
            <Checkbox /> <span>Compare</span>
          </p>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-5xl font-medium">${countPrice()}</span>
          <span>Model:{data.model}</span>
        </div>
      </div>
    </div>
  );
}

export default InfoOptionBox;
