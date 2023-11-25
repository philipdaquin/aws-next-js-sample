import type { Meta, StoryObj } from '@storybook/react';


import AddStory from './AddStory'

const meta = {
    title: 'Add Story',
    component: AddStory,
  } satisfies Meta<typeof AddStory>;
export default meta;
type Story = StoryObj<typeof meta>;


const Base: Story = { 
    args: { 
        label: 'Button'
    }
}