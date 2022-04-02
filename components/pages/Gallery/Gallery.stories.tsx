
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BeforeAndAfterPage } from './BeforeAndAfterPage';

export default {
    title: 'Main Pages/Gallery',
    argTypes: {},
} as ComponentMeta<typeof BeforeAndAfterPage>;

const Template: ComponentStory<typeof BeforeAndAfterPage> = (args) => <BeforeAndAfterPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: <></>,
};
