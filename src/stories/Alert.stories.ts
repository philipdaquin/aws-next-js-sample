

import type { Meta, StoryContext, StoryObj } from '@storybook/react';

import Alert, { Props } from '../components/Alert'


const meta: Meta = { 
    title: 'Alert',
    component: Alert
}

export default meta; 
type Story = StoryObj<typeof meta>;


export const Default: Story = {
    args: {
        message: 'Hi, how are you?',
        variant: 'info',
    },
};

  