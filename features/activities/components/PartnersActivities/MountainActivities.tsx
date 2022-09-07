import { SimpleGrid } from "@chakra-ui/react";
import { GiMountainCave } from "react-icons/gi";
import { Feature } from "../../../../components/Feature";
import { mountainPartnerActivities } from "../../assets/mountainActivities";
import { ExternalActivityLink } from "./ExternalActivityLink";

export const MountainActivities = () => (
  <Feature title="En Montagne..." icon={GiMountainCave}>
    <SimpleGrid spacing={2} columns={{ md: 2 }}>
      {mountainPartnerActivities.map((activity, index) => (
        <ExternalActivityLink
          w={"full"}
          href={activity.href}
          icon={activity.icon}
          key={index}
        >
          {activity.title}
        </ExternalActivityLink>
      ))}
    </SimpleGrid>
  </Feature>
);
