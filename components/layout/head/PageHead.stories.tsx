import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PageHead } from './PageHead';

export default {
    title: 'compontents/layout/head/PageHead',
    argTypes: {
        pageTitle: {
            control: 'text',
        }
    },
} as ComponentMeta<typeof PageHead>;

const Template: ComponentStory<typeof PageHead> = (args) => <PageHead {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: <></>,
    pageTitle: 'Test Title',
};
