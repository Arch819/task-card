import React from "react";
import { Flex, IconButton } from "@radix-ui/themes";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { _ } from "../..";

type Props = {
  onChange: (_: undefined, c: "next" | "prev") => void;
  totalImg: number;
  currentIndex: number;
};

function PaginationImg({ onChange, currentIndex, totalImg }: Props) {
  return (
    <Flex
      align="center"
      justify="between"
      ml="2"
      mr="2"
      className="absolute top-2/4  inset-x-0"
    >
      <IconButton
        variant="ghost"
        color="sky"
        onClick={() => onChange(_, "prev")}
        disabled={currentIndex === 0}
        className="cursor-pointer disabled:cursor-no-drop"
      >
        <ArrowLeftIcon width={32} height={32} />
      </IconButton>
      <IconButton
        variant="ghost"
        color="sky"
        onClick={() => onChange(_, "next")}
        disabled={currentIndex === totalImg}
        className="cursor-pointer disabled:cursor-no-drop"
      >
        <ArrowRightIcon width={32} height={32} />
      </IconButton>
    </Flex>
  );
}

export default PaginationImg;
