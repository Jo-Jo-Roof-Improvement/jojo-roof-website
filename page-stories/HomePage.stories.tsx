import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Home from '../pages/index';

export default {
    title: 'Pages/Home',
    argTypes: {},
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = (args) => <Home {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: <></>,
};
