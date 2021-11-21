import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AboutUsPage } from './AboutUsPage';

export default {
    title: 'components/pages/About Us',
    argTypes: {},
} as ComponentMeta<typeof AboutUsPage>;

const Template: ComponentStory<typeof AboutUsPage> = (args) => <AboutUsPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: <></>,
};
