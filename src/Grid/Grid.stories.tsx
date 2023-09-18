import type { Meta, StoryObj } from '@storybook/react';
import Grid from '.';

const meta: Meta<typeof Grid> = {
  title: 'Grid',
  component: Grid,
};

export default meta;

type Story = StoryObj<typeof Grid>;

export const Default: Story = {};
