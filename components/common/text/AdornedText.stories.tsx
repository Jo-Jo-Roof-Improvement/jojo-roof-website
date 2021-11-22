import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AdornedText } from './AdornedText';

export default {
    title: 'components/common/strips/AdornedText',
    argTypes: {
        align: {
            options: ['left', 'right', 'center'],
            control: { type: 'select' },
        },
        children: { control: { type: 'text' } },
    },
} as ComponentMeta<typeof AdornedText>;

const Template: ComponentStory<typeof AdornedText> = (args) => <AdornedText {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: <></>,
    align: 'left',
};
