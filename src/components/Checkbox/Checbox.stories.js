import React from 'react';

import { Checkbox } from './Checkbox';

export default {
  title: 'Components/Inputs/Checkbox',
  component: Checkbox
};

const Template = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  checked: false
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true
};

export const Small = Template.bind({});
Small.args = {
  label: 'Small Checkbox',
  size: 'sm'
};

export const Medium = Template.bind({});
Medium.args = {
  label: 'Medium Checkbox',
  size: 'md'
};

export const Large = Template.bind({});
Large.args = {
  label: 'Large Checkbox',
  size: 'lg'
};

export const AllSizes = (args) => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <Small {...args} {...Small.args} />
    <Medium {...args} {...Medium.args} />
    <Large {...args} {...Large.args} />
  </div>
);
