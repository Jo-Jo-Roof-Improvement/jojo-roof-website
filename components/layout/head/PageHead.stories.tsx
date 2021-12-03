
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PageHead } from './PageHead';

export default {
    title: 'layout/head/Page Head',
    argTypes: {
        pageTitle: {
            control: 'text',
        }
    },
} as ComponentMeta<typeof PageHead>;

const Template: ComponentStory<typeof PageHead> = (args) => <PageHead {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: <></>,
    pageTitle: 'Test Title',
};
