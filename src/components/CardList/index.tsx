import RadixUiCard from "../RedixComponent/RadixUICard";
import ShadcnCard from "../ShadcnComponent/ShadcnCard";

type Props = {};

function CardList({}: Props) {
  return (
    <div className="grid grid-cols-4 gap-4 justify-center">
      <RadixUiCard />
      <ShadcnCard />
    </div>
  );
}

export default CardList;
