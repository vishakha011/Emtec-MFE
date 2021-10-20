const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
//const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    mode: 'development',
    devServer: {
        port: 3000,
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "build")
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                },
            },
        ],
    },
    resolve: {
        modules: [path.resolve('./src'), path.resolve('./node_modules')],
        extensions: ['*', '.js', '.jsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new ModuleFederationPlugin({
            name: 'todo_card',
            filename: 'remoteEntry.js',
            exposes: {
                './TodoCard': './src/TodoCard',
            },
            shared: [
                'react', 
                'react-dom',
                // {
                //     "@vishakha01/mfe-shared-library": {
                //         import: "@vishakha01/mfe-shared-library",
                //         // requiredVersion: require("../shared-library/package.json").version,
                //     }
                // }
            ],
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, "build"),
        compress: true,
        port: 3001
    }
};
