import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import FirstPage from './firstpage';

export default {
    title: 'Test/TestPage',
    argTypes: {},
} as ComponentMeta<typeof FirstPage>;

const Template: ComponentStory<typeof FirstPage> = (args) => <FirstPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: <></>,
};
