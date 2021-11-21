import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NavigationBar } from './NavigationBar';

export default {
    title: 'layout/navigationbar/Navigation Bar',
    argTypes: {
        pageTitle: {
            control: 'text',
        },
    },
} as ComponentMeta<typeof NavigationBar>;

const Template: ComponentStory<typeof NavigationBar> = (args) => <NavigationBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: <></>,
    pageTitle: 'Test Title',
};
