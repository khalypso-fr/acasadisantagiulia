import { useMobile } from "../../hooks/useMobile";
import { BaseHeader } from "./BaseHeader";
import { MobileHeader } from "./MobileHeader";

export const Header = () => {
  const isMobile = useMobile();
  if (isMobile) return <MobileHeader />;
  return <BaseHeader />;
};
