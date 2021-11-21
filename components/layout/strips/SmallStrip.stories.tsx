import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Strip from './SmallStrip';

export default {
    title: 'Layout/Strips/SmallStrip',
    argTypes: {
        align: {
            options: ['left', 'right', 'center'],
            control: { type: 'select' },
        },
        children: { control: { type: 'text' } },
    },
} as ComponentMeta<typeof Strip>;

const Template: ComponentStory<typeof Strip> = (args) => <Strip {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: <></>,
    align: 'left',
};

export const WithRawText = Template.bind({});
WithRawText.args = {
    children: 'Hello World',
};

export const WithSparkleDecorators = Template.bind({});
WithSparkleDecorators.args = {};
