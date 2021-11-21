const path = require('path');

module.exports = {
    stories: [
        '../stories/**/*.stories.js',
        '../stories/**/*.stories.tsx',
        '../components/**/*.stories.@(js|jsx|ts|tsx)',
        '../pages/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-postcss',
        '@storybook/addon-actions',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        'storybook-css-modules-preset',
    ]
};
