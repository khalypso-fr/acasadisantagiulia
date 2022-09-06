import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { NavigationFeatureSection } from "../components/Header/BaseHeader/NavigationFeatureSection";
import { BsFillCalendarWeekFill } from "react-icons/bs";

export default {
  title: "Navigation/FeatureSection",
  component: NavigationFeatureSection,
  argTypes: {
    description: {
      defaultValue:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam lorem sed vestibulum.",
    },
    icon: { defaultValue: BsFillCalendarWeekFill },
    title: { defaultValue: "Lorem ipsum dolor" },
  },
} as ComponentMeta<typeof NavigationFeatureSection>;

const Template: ComponentStory<typeof NavigationFeatureSection> = (args) => (
  <NavigationFeatureSection {...args} />
);

export const Primary = Template.bind({});
