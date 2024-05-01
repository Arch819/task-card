import React from "react";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

import { Link, useLocation } from "react-router-dom";

type Props = {};

function ButtonBack({}: Props) {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";

  return (
    <Link
      to={backLinkHref}
      style={{
        display: "flex",
        alignItems: "centern",
        gap: "6px",
        marginBottom: "10px",
      }}
    >
      <ArrowLeftIcon />
      <span>Go back</span>
    </Link>
  );
}

export default ButtonBack;
