
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AboutUsPage } from './AboutUsPage';

export default {
    title: 'Main Pages/About Us',
    argTypes: {},
} as ComponentMeta<typeof AboutUsPage>;

const Template: ComponentStory<typeof AboutUsPage> = (args) => <AboutUsPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: <></>,
};
