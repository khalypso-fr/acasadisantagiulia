import { StackProps, Stack, Icon, Heading, Text } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";
import { IconType } from "react-icons";

export const Feature: FC<
  PropsWithChildren<StackProps & { title: string; icon: IconType }>
> = ({ title, icon, children, ...props }) => {
  return (
    <Stack alignItems={"center"} {...props}>
      <Icon as={icon} w={10} h={10} />
      <Heading size={"xl"} fontWeight={400}>
        {title}
      </Heading>
      {children}
    </Stack>
  );
};
