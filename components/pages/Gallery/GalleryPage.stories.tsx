import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { GalleryPage } from './GalleryPage';

export default {
    title: 'Main Pages/Gallery',
    argTypes: {},
} as ComponentMeta<typeof GalleryPage>;

const Template: ComponentStory<typeof GalleryPage> = (args) => <GalleryPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: <></>,
};
