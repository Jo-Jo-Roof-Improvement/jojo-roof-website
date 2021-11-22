import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FreeQuoteToday } from './FreeQuoteToday';

export default {
    title: 'layout/components/FreeQuoteToday',
} as ComponentMeta<typeof FreeQuoteToday>;

const Template: ComponentStory<typeof FreeQuoteToday> = (args) => <FreeQuoteToday {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
