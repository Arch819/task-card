import { Text, Card, Badge, Heading } from "@radix-ui/themes";
import phoneData from "../../data/samsung.json";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import VariantColor from "./VariantColor";

export type ColorProps = "red" | "skyblue" | "grey";

type RadixUiCardProps = {};

function RadixUiCard({}: RadixUiCardProps) {
  const location = useLocation();
  const [color, setColor] = useState<ColorProps>("red");

  const changeColor = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const chooseColor = e.currentTarget.dataset.color as ColorProps;
    setColor(chooseColor);
  };

  return (
    <Card size="3">
      <Link
        to="/cardRadixUi"
        state={{ from: location, color: color }}
        className="text-[#1f1f1f]"
      >
        <Badge
          variant="surface"
          color="green"
          size="2"
          radius="full"
          className="absolute top-[12px] right-[12px]"
        >
          Top
        </Badge>
        <img
          src={phoneData.img[color][0]}
          alt={phoneData.title}
          className="object-contain w-full h-[180px] mb-[12px]"
        />
        <Text color="amber" weight="bold">
          {phoneData.prise}$
        </Text>
        <Heading as="h3" size="4">
          {phoneData.title}
        </Heading>
        <Text
          as="p"
          size="2"
          wrap="nowrap"
          className="text-ellipsis overflow-hidden"
          title={phoneData.description}
          mb="1"
        >
          {phoneData.description}
        </Text>
      </Link>
      <VariantColor
        color={color}
        changeColor={changeColor}
        colorsArray={phoneData.colors}
      />
    </Card>
  );
}

export default RadixUiCard;
