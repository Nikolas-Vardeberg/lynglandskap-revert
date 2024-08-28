import React, { ComponentProps } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Image } from './Image'

export default {
  title: 'Modules/Image',
  component: Image,
} as ComponentMeta<typeof Image>

const Template: ComponentStory<typeof Image> = (
  args: ComponentProps<typeof Image>
) => <Image {...args} />

export const AllOptions = Template.bind({})

