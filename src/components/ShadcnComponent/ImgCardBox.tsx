import { useState } from "react";
import { ImgProps } from "../../pages/CardRadixUiPage";
import { ColorProps } from "./ShadcnCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import useEmblaCarousel from "embla-carousel-react/components/useEmblaCarousel";

type Props = {
  changeImg: (i?: number) => void;
  imgs: ImgProps;
  color: ColorProps;
  currentImgIndex: number;
  title?: string;
};

function ImgCardBox({ changeImg, imgs, color, currentImgIndex, title }: Props) {
  const [isFavirite, setIsFavirite] = useState(false);

  const toggleIsFavorite = () => {
    setIsFavirite((prev) => !prev);
  };

  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-2 justify-center">
        {imgs[color].map((img, i) => (
          <div
            key={i}
            onClick={() => changeImg(i)}
            className="flex items-center gap-2  cursor-pointer"
          >
            {currentImgIndex === i && (
              <span className="w-[12px] h-[12px] rounded-full bg-[red]" />
            )}
            <div className="w-[60px] h-[60px] ml-auto overflow-hidden">
              <img
                src={img}
                alt={`small size ${title}`}
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        ))}
      </div>

      <Carousel
        className="w-full overflow-hidden"
        opts={{ startIndex: currentImgIndex }}
      >
        <CarouselContent>
          {imgs[color].map((_, index) => (
            <CarouselItem key={index}>
              <Card className="border-none">
                <CardContent className="">
                  <img
                    src={imgs[color][index]}
                    alt={`${color}${title}`}
                    className="object-contain w-full h-[380px]"
                    style={{
                      display: "block",
                    }}
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default ImgCardBox;
