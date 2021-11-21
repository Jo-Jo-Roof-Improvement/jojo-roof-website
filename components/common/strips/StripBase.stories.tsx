import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import StripBase from './StripBase';

export default {
    title: 'components/common/strips/StripBase',
    argTypes: {
        align: {
            options: ['left', 'right', 'center'],
            control: { type: 'select' },
        },
        children: { control: { type: 'text' } },
    },
} as ComponentMeta<typeof StripBase>;

const Template: ComponentStory<typeof StripBase> = (args) => <StripBase {...args} />;

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
