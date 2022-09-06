import { BoxProps } from "@chakra-ui/react";
import React, { FC, forwardRef } from "react";
import { useMobile } from "../../hooks/useMobile";
import { BaseHeader } from "./BaseHeader";
import { MobileHeader } from "./MobileHeader";

export const Header: FC<BoxProps> = (props) => {
  const isMobile = useMobile();
  if (isMobile) return <MobileHeader {...props} />;
  return <BaseHeader {...props} />;
};
