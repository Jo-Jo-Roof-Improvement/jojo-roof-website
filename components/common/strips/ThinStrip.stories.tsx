import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThinStrip } from './ThinStrip';

export default {
    title: 'components/common/strips/ThinStrip',
    argTypes: {
        align: {
            options: ['left', 'right', 'center'],
            control: { type: 'select' },
        },
        children: { control: { type: 'text' } },
    },
} as ComponentMeta<typeof ThinStrip>;

const Template: ComponentStory<typeof ThinStrip> = (args) => <ThinStrip {...args} />;

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
