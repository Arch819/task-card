import React from "react";
import { Rating, ThinStar } from "@smastrom/react-rating";

type Props = { rating: number };

const myStyles = {
  itemShapes: ThinStar,
  activeFillColor: "#ff8c00",
  inactiveFillColor: "#dbdbdb",
};

function RatingComponent({ rating }: Props) {
  return (
    <Rating
      style={{ maxWidth: 120 }}
      value={rating}
      readOnly
      itemStyles={myStyles}
      className="mb-4"
    />
  );
}

export default RatingComponent;
