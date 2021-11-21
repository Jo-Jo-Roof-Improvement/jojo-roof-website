import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Layout } from './Layout';

export default {
    title: 'components/layout/Layout',
    argTypes: {
        pageTitle: {
            control: 'text',
        },
    },
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: <></>,
    pageTitle: 'Test Title',
};
