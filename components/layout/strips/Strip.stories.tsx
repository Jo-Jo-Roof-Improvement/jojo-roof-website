import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Strip from './Strip';

export default {
    title: 'Layout/Strip',
    argTypes: {},
} as ComponentMeta<typeof Strip>;

const Template: ComponentStory<typeof Strip> = (args) => <Strip {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: <></>,
};
