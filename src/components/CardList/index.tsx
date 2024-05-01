import RadixUiCard from "../RedixComponent/RadixUICard";
import { Grid } from "@radix-ui/themes";
import ShadcnCard from "../ShadcnComponent/ShadcnCard";

type Props = {};

function CardList({}: Props) {
  return (
    <Grid columns="2" gap="6">
      <RadixUiCard />
      <ShadcnCard />
    </Grid>
  );
}

export default CardList;
