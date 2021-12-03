
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ServicesPage } from './ServicesPage';

export default {
    title: 'Main Pages/Services',
    argTypes: {},
} as ComponentMeta<typeof ServicesPage>;

const Template: ComponentStory<typeof ServicesPage> = (args) => <ServicesPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: <></>,
};
