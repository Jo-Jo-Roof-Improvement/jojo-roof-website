
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ContactUsPage } from './ContactUsPage';

export default {
    title: 'Main Pages/Contact tUs',
    argTypes: {},
} as ComponentMeta<typeof ContactUsPage>;

const Template: ComponentStory<typeof ContactUsPage> = (args) => <ContactUsPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: <></>,
};
