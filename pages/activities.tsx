import type { NextPage } from "next";
import {
  Box,
  Flex,
  Text,
  Image,
  Center,
  Heading,
  TextProps,
  FlexProps,
} from "@chakra-ui/react";
import Layout from "../components/Layout";
import { MountainActivities } from "../features/activities/components/PartnersActivities/MountainActivities";
import { SeaActivities } from "../features/activities/components/PartnersActivities/SeaActivities";
import { FC } from "react";

const MainImage = () => (
  <Center w="full">
    <Image src={"/activities_front.jpeg"} shadow="dark-lg" maxW={"3xl"} />
  </Center>
);

const MainPresentation: FC<TextProps> = (props) => (
  <Text fontSize={"xl"} {...props}>
    Avec notre petite sélection d’activités maritimes ou montagnardes, organisez
    votre séjour en Corse ! Une journée en bateau de Porto-Vecchio vers les îles
    Lavezzi, une balade en Quad en montagne, vivre des sensations fortes en
    descente de canyoning et découvrir les merveilles des fonds marins
    méditerranéens lors d’une plongée… Parcourez le Sud de la Corse et visitez
    des lieux uniques.
  </Text>
);

const ExternalActivities: FC<FlexProps> = (props) => (
  <Flex
    justifyContent={"space-around"}
    gap={2}
    direction={{ lg: "row", base: "column" }}
    {...props}
  >
    <SeaActivities />
    <MountainActivities />
  </Flex>
);

const RestaurantActivities = () => (
  <>
    <Heading textTransform={"capitalize"} w="full" textAlign={"center"}>
      à table !
    </Heading>
    <Text fontSize={"xl"}>
      Découvrez notre petite sélection de restaurants, paniers repas et épicerie
      fine sur Porto-Vecchio, Bonifacio et en montagne.
    </Text>
    <Text mb={20} as={"cite"}>
      Le site internet de l’Office Municipal de Tourisme de Porto-Vecchio
      promeut également des dizaines de restaurants, paillotes et bars…
    </Text>
  </>
);

const Activities: NextPage = () => (
  <Layout>
    <Box mt={10}>
      <MainImage />
      <MainPresentation mt={{ lg: 28, base: 10 }} />
      <ExternalActivities mt={10} mb={20} />
      <RestaurantActivities />
    </Box>
  </Layout>
);

export default Activities;
