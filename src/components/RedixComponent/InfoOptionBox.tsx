import {
  Box,
  Heading,
  RadioCards,
  Flex,
  Text,
  TextField,
  IconButton,
} from "@radix-ui/themes";
import { PlusIcon, MinusIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import { ICartData } from "../../pages/CardRadixUiPage";
import { ColorProps } from "./RadixUICard";
import VariantColor from "./VariantColor";
import { useToast } from "../ShadcnComponent/ui/use-toast";

interface PriceProps {
  ram: { [key: number]: number };
  memory: { [key: number]: number };
}

type Props = {
  ram: number;
  memory: number;
  data: ICartData;
  color: ColorProps;
  changeMemory: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  changeRam: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  changeColor: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

function InfoOptionBox({
  ram,
  memory,
  data,
  color,
  changeMemory,
  changeRam,
  changeColor,
}: Props) {
  const [quantity, setQuantity] = useState(1);
  const { toast } = useToast();

  const handleChangeQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    const quantityNumber = Number(e.target.value);
    if (isNaN(quantityNumber)) {
      return;
    }
    setQuantity(quantityNumber);
  };

  const countPrice = () => {
    const price: PriceProps = {
      ram: {
        "8": 50,
        "16": 100,
        "24": 200,
      },
      memory: {
        "64": 50,
        "128": 100,
        "256": 200,
      },
    };
    const totalPrice =
      (data.prise + price.ram[ram] + price.memory[memory]) * quantity;
    return totalPrice.toFixed(2);
  };

  const addToBag = () => {
    console.log("click");

    toast({
      title: "Phone add to your bag",
      description: `${quantity}X ${data.title} ${ram}GB/${memory}GB/${color}`,
    });
  };
  return (
    <Box>
      <Flex justify="between" mb="4">
        <Heading>{data.title}</Heading>
        <Text size="6" weight="medium">
          ${countPrice()}
        </Text>
      </Flex>
      <Flex direction="column" gap="4" mb="6">
        <Box>
          <Text size="2" weight="medium">
            COLOR:{" "}
          </Text>
          <Text
            size="1"
            style={{ color: `${color}`, textTransform: "uppercase" }}
          >
            {color}
          </Text>
          <VariantColor
            color={color}
            changeColor={changeColor}
            colorsArray={data.colors}
          />
        </Box>
        <Box maxWidth="340px">
          <RadioCards.Root
            defaultValue="1"
            columns={{ initial: "1", sm: "4" }}
            style={{ alignItems: "center" }}
          >
            <Text>Memory:</Text>
            <RadioCards.Item value="1" onClick={changeMemory}>
              <Flex direction="column" width="100%" p="0">
                <Text size="1">64GB</Text>
              </Flex>
            </RadioCards.Item>
            <RadioCards.Item value="2" onClick={changeMemory}>
              <Flex direction="column" width="100%">
                <Text size="1">128GB</Text>
              </Flex>
            </RadioCards.Item>
            <RadioCards.Item value="3" onClick={changeMemory}>
              <Flex direction="column" width="100%">
                <Text size="1">256GB</Text>
              </Flex>
            </RadioCards.Item>
          </RadioCards.Root>
        </Box>
        <Box maxWidth="340px">
          <RadioCards.Root
            defaultValue="1"
            columns={{ initial: "1", sm: "4" }}
            style={{ alignItems: "center" }}
          >
            <Text>Ram:</Text>

            <RadioCards.Item value="1" onClick={changeRam}>
              <Flex direction="column" width="100%">
                <Text size="1">8GB</Text>
              </Flex>
            </RadioCards.Item>
            <RadioCards.Item value="2" onClick={changeRam}>
              <Flex direction="column" width="100%">
                <Text size="1">16GB</Text>
              </Flex>
            </RadioCards.Item>
            <RadioCards.Item value="3" onClick={changeRam}>
              <Flex direction="column" width="100%">
                <Text size="1">24GB</Text>
              </Flex>
            </RadioCards.Item>
          </RadioCards.Root>
        </Box>
      </Flex>
      <Box maxWidth="440px" height="60px">
        <TextField.Root
          size="3"
          name="quantity"
          value={quantity}
          onChange={handleChangeQuantity}
          style={{ textAlign: "center", height: "60px" }}
        >
          <TextField.Slot>
            <IconButton
              variant="ghost"
              ml="5"
              onClick={() => setQuantity((prev) => prev - 1)}
              disabled={quantity === 0}
            >
              <MinusIcon color="#1f1f1f" />
            </IconButton>
          </TextField.Slot>
          <TextField.Slot>
            <IconButton
              variant="ghost"
              mr="5"
              onClick={() => setQuantity((prev) => prev + 1)}
            >
              <PlusIcon color="#1f1f1f" />
            </IconButton>
          </TextField.Slot>

          <TextField.Slot style={{ height: "100%" }}>
            <IconButton
              size="4"
              variant="ghost"
              onClick={addToBag}
              disabled={quantity === 0}
              style={{
                borderLeft: "1px solid",
                backgroundColor: "#1f1f1f",
                height: "100%",
                padding: "0 100px",
                color: "#aeaeae",
                borderRadius: "0 6px 6px 0",
              }}
            >
              <Text>ADD TO BAG</Text>
            </IconButton>
          </TextField.Slot>
        </TextField.Root>
      </Box>
    </Box>
  );
}

export default InfoOptionBox;
