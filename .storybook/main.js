const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    stories: ['../components/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-postcss',
        '@storybook/addon-actions',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        'storybook-css-modules-preset',
    ],
    webpackFinal: async (config, { configType }) => {
        config.resolve.plugins.push(new TsconfigPathsPlugin());
        return config;
    },
};
