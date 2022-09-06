import { SimpleGrid } from "@chakra-ui/react";
import { GiAtSea } from "react-icons/gi";
import { Feature } from "../../../../components/Feature";
import { seaPartnerActivities } from "../../assets/seaActivities";
import { ExternalActivityLink } from "./ExternalActivityLink";

export const SeaActivities = () => (
  <Feature title="En Mer..." icon={GiAtSea}>
    <SimpleGrid spacing={2} columns={{ lg: 2 }}>
      {seaPartnerActivities.map((activity, index) => (
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
