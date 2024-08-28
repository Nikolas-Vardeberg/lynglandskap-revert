import React, { ComponentProps} from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Rows } from "./Rows";

export default {
    title: "Modules/Rows",
    component: Rows,
} as ComponentMeta<typeof Rows>

const Template: ComponentStory<typeof Rows> = (
    args: ComponentProps<typeof Rows>
) => <Rows {...args} />

export const AllOptions = Template.bind({})
AllOptions.args = {
    hasDarkBackground: true,
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    author: 'Brandon Surya, Plant Daddy',
    hasIcon: true,
  }
  
  export const LightBackground = Template.bind({})
  LightBackground.args = {
    hasDarkBackground: false,
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    author: 'Brandon Surya, Plant Daddy',
    hasIcon: true,
  }
  
  export const RowsText = Template.bind({})
  RowsText.args = {
    hasDarkBackground: false,
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  }
  
