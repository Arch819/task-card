import React from "react";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

import { Link, useLocation } from "react-router-dom";

type Props = {};

function ButtonBack({}: Props) {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";

  return (
    <Link to={backLinkHref} className="flex items-center gap-[6px] mb-[10px]">
      <ArrowLeftIcon />
      <span>Go back</span>
    </Link>
  );
}

export default ButtonBack;
