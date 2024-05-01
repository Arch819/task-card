import React, { useState } from "react";
import ImgCardBox from "src/components/ShadcnComponent/ImgCardBox";
import phoneData from "src/data/nokia.json";
import { useLocation } from "react-router-dom";
import { ColorProps } from "src/components/ShadcnComponent/ShadcnCard";
import ButtonBack from "src/components/ButtonBack";
import InfoOptionBox from "src/components/ShadcnComponent/InfoOptionBox";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "src/components/ShadcnComponent/ui/breadcrumb";

import DetailItem from "src/components/ShadcnComponent/DetailItem";
import ActionBox from "src/components/ShadcnComponent/ActionBox";
import { useToast } from "src/components/ShadcnComponent/ui/Toast/use-toast";

type Props = {};

function CardShadcnUiPage({}: Props) {
  const location = useLocation();
  const { toast } = useToast();

  const [color, setColor] = useState<ColorProps>(
    location.state.color || "pink"
  );
  const [showImg, setShowImg] = useState(0);
  const [memory, setMemory] = useState(phoneData.memory[0]);
  const [ram, setRam] = useState(phoneData.ram[0]);
  const [isFavorite, setIsFavorite] = useState(false);

  const changeImg = (i?: number, c?: "next" | "prev") => {
    if (i || i === 0) {
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

  const changeRam = (v: string) => {
    if (isNaN(Number(v))) {
      return;
    }
    setRam(Number(v));
  };

  const changeMemory = (v: string) => {
    if (isNaN(Number(v))) {
      return;
    }
    setMemory(Number(v));
  };

  const changeColor = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const chooseColor = e.currentTarget.dataset.color as ColorProps;
    setColor(chooseColor);
  };

  const addToCart = () => {
    toast({
      title: "Phone add to your bag",
      description: `${phoneData.title} ${ram}GB/${memory}GB/${color}`,
    });
  };

  return (
    <>
      <ButtonBack />
      <Breadcrumb className="mb-4 text-[#aeaeae33]">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <span>/</span>
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="/cardShadcnUi">cardShadcnUi</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="grid grid-cols-2 gap-6 ">
        <ImgCardBox
          changeImg={changeImg}
          currentImgIndex={showImg}
          color={color}
          imgs={phoneData.img}
          title={phoneData.title}
        />
        <InfoOptionBox
          changeColor={changeColor}
          changeMemory={changeMemory}
          changeRam={changeRam}
          color={color}
          data={phoneData}
          memory={memory}
          ram={ram}
          className="mb-8"
        />
      </div>
      <ActionBox
        addToCart={addToCart}
        isFavorite={isFavorite}
        toggleIsFavorite={() => setIsFavorite((prev) => !prev)}
      />
      <DetailItem data={phoneData} />
    </>
  );
}

export default CardShadcnUiPage;
