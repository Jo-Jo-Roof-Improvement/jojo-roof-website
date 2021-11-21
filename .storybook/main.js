const path = require('path');

module.exports = {
    stories: ['../components/**/*.stories.@(js|jsx|ts|tsx)', '../page-stories/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-postcss',
        '@storybook/addon-actions',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        'storybook-css-modules-preset',
    ],
};
