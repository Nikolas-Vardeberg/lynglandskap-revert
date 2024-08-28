import React, { ComponentProps} from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Mediemodul } from "./Mediemodul";

export default {
    title: "Modules/Mediemodul",
    component: Mediemodul,
} as ComponentMeta<typeof Mediemodul>

const Template: ComponentStory<typeof Mediemodul> = (
    args: ComponentProps<typeof Mediemodul>
) => <Mediemodul {...args} />

export const AllOptions = Template.bind({})