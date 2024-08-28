import React, { ComponentProps } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { List } from './List'

export default {
  title: 'Modules/List',
  component: List,
} as ComponentMeta<typeof List>

const Template: ComponentStory<typeof List> = (
  args: ComponentProps<typeof List>
) => <List {...args} />

export const AllOptions = Template.bind({})

