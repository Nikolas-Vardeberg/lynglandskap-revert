import React, { ComponentProps} from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Text } from "./Text";

export default {
    title: "Modules/Text",
    component: Text,
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (
    args: ComponentProps<typeof Text>
) => <Text {...args} />

export const AllOptions = Template.bind({})
  
