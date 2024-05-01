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
      style={{
        position: "absolute",
        top: "50%",
        left: "0",
        right: "0",
      }}
    >
      <IconButton
        variant="ghost"
        color="sky"
        onClick={() => onChange(_, "prev")}
        disabled={currentIndex === 0}
      >
        <ArrowLeftIcon width={32} height={32} />
      </IconButton>
      <IconButton
        variant="ghost"
        color="sky"
        onClick={() => onChange(_, "next")}
        disabled={currentIndex === totalImg}
      >
        <ArrowRightIcon width={32} height={32} />
      </IconButton>
    </Flex>
  );
}

export default PaginationImg;
