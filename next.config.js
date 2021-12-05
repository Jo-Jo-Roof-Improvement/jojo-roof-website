/** @type {import('next').NextConfig} */
// const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    reactStrictMode: true,
    ignoreBuildErrors: true,

    webpack5: true,
    webpack: (config) => {
        // config.plugins.push(
        //     new CopyPlugin({
        //         patterns: [
        //             {
        //                 from: './widget/lib/',
        //                 to: './node_modules/react-chat-widget/',
        //             },
        //             {
        //                 from: './widget/package.json',
        //                 to: './node_modules/react-chat-widget/package.json',
        //             },
        //         ],
        //     })
        // );
        config.resolve.fallback = { fs: false };
        return config;
    },
};
