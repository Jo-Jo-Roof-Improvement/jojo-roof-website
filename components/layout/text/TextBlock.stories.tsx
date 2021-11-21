import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextBlock } from './TextBlock';

export default {
    title: 'Layout/text/TextBlock',
    argTypes: {
        align: {
            options: ['left', 'right', 'center'],
            control: { type: 'select' },
        },
        children: { control: { type: 'text' } },
    },
} as ComponentMeta<typeof TextBlock>;

const Template: ComponentStory<typeof TextBlock> = (args) => <TextBlock {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
