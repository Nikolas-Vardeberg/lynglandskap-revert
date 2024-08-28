import React, { ComponentProps } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Fastlink } from './Fastlink'

export default {
  title: 'Modules/Fastlink',
  component: Fastlink,
} as ComponentMeta<typeof Fastlink>

const Template: ComponentStory<typeof Fastlink> = (
  args: ComponentProps<typeof Fastlink>
) => <Fastlink {...args} />

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

export const QuoteText = Template.bind({})
QuoteText.args = {
  hasDarkBackground: false,
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
}
