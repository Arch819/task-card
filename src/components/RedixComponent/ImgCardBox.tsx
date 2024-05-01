import React, { useState } from "react";
import { Flex, Box, ScrollArea, IconButton } from "@radix-ui/themes";
import PaginationImg from "./PaginationImg";
import { ColorProps } from "./RadixUICard";
import { ImgProps } from "../../pages/CardRadixUiPage";
import { HeartIcon } from "lucide-react";
import { HeartFilledIcon } from "@radix-ui/react-icons";

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
    <Flex direction="column" gap="1">
      <Box
        position="relative"
        mb="1"
        className="border border-[#aeaeae70] rounded-[4px]"
      >
        <PaginationImg
          onChange={changeImg}
          totalImg={imgs[color].length - 1}
          currentIndex={currentImgIndex}
        />
        <IconButton
          variant="ghost"
          onClick={toggleIsFavorite}
          className="absolute top-[12px] right-[12px]"
        >
          {isFavirite ? (
            <HeartFilledIcon width={32} height={32} />
          ) : (
            <HeartIcon color="#aeaeae" width={32} height={32} />
          )}
        </IconButton>
        <img
          src={imgs[color][currentImgIndex]}
          alt={`${color}${title}`}
          className="object-contain w-full h-[480px]"
        />
      </Box>
      <ScrollArea type="hover" scrollbars="horizontal" style={{ height: 100 }}>
        <Flex gap="1" p="2" justify="center">
          {imgs[color].map((img, i) => (
            <Box
              key={i}
              onClick={() => changeImg(i)}
              className="border border-[#aeaeae70] rounded overflow-hidden cursor-pointer"
            >
              <img
                src={img}
                alt={`small size ${title}`}
                className=" object-cover w-full h-[80px]"
              />
            </Box>
          ))}
        </Flex>
      </ScrollArea>
    </Flex>
  );
}

export default ImgCardBox;
