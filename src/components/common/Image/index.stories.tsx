import type { Meta, StoryObj } from '@storybook/react';

import CommonImage from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Common/Image',
  component: CommonImage,
  tags: ['autodocs'],
  args: {
    src: 'https://data.onnada.com/character/202210/3718766049_3f1397a1_hitori.jpg',
  },
} satisfies Meta<typeof CommonImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RatioSquare: Story = {
  args: {
    width: '100px',
    ratio: 'square',
  },
};

export const RadiusCircle: Story = {
  args: {
    width: '100px',
    ratio: 'square',
    radius: 'circle',
  },
};

export const RadiusRound: Story = {
  args: {
    radius: 10,
  },
};