import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "src/components/ShadcnComponent/ui/dialog";
import { Button } from "src/components/ShadcnComponent/ui/button";
import { Play } from "lucide-react";
import { IoIosHeartHalf } from "react-icons/io";
import { IoPaperPlane } from "react-icons/io5";

type Props = {
  isFavorite: boolean;
  toggleIsFavorite: () => void;
  addToCart: () => void;
};

function ActionBox({ addToCart, isFavorite, toggleIsFavorite }: Props) {
  return (
    <div className="flex  items-center mb-6 p-6 border border-black rounded-md">
      <div className="flex gap-4 items-center">
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="secondary"
              size="icon"
              className=" rounded-full bg-[lightgrey]  "
            >
              <Play fill="#1f1f1f" width={20} />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <iframe
              width="576"
              height="324"
              src="https://www.youtube.com/embed/vzoLiA9R0eo"
              title="Обзор Nokia 4.2 - когда слышишь отзвуки прошлого"
              // frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </DialogContent>
        </Dialog>
        <p className="font-medium">Play video</p>
      </div>
      <Button onClick={addToCart} className="mr-10 ml-auto px-10 rounded-lg">
        Add to cart
      </Button>
      <div className="flex gap-2">
        <Button variant="ghost" onClick={toggleIsFavorite}>
          <IoIosHeartHalf
            size="28px"
            color={isFavorite ? "#4949e8" : undefined}
          />
        </Button>
        <Button variant="ghost">
          <IoPaperPlane size="28px" />
        </Button>
      </div>
    </div>
  );
}

export default ActionBox;
