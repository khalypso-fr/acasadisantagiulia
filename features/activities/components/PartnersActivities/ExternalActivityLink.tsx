import { Button, ButtonProps, Icon, Link } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";
import { IconType } from "react-icons";
import { AiOutlineArrowRight } from "react-icons/ai";

export const ExternalActivityLink: FC<
  PropsWithChildren<ButtonProps & { href: string; icon?: IconType }>
> = ({ children, href, icon = AiOutlineArrowRight, ...props }) => (
  <Button
    leftIcon={<Icon as={icon} w={6} h={6} />}
    variant={"outline"}
    colorScheme="brand"
    {...props}
  >
    <Link href={href}>{children}</Link>
  </Button>
);
