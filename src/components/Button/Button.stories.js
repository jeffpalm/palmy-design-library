import React from 'react';

import { Button } from './Button';

export default {
  title: 'Components/Inputs/Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } }
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Default'
};

export const Outlined = Template.bind({});
Outlined.args = {
  label: 'Outlined'
};

export const Filled = Template.bind({});
Filled.args = {
  label: 'Filled',
  variant: 'filled'
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  label: 'FullWidth',
  fullWidth: true
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled',
  disabled: true
};
