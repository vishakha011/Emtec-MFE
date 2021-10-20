const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
require('dotenv').config();
const Dotenv =require('dotenv-webpack');


const TODO_PORT = process.env.TODO_PORT || 8081
const CALENDAR_PORT = process.env.CALENDAR_PORT || 8082

const pathToCommon = "@shared/shared-library";

const pathAlias = {
    '@':pathToCommon,
}


module.exports = {
    mode: 'development',
    devServer: {
        port: 8080,
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
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
              },
            {
                test: /\.png|svg|jpg|gif$/,
                use: ["file-loader"]
            }
        ],
    },
    resolve: {
        modules: [path.resolve('./src'), path.resolve('./node_modules')],
        extensions: ['*', '.js', '.jsx'],
        alias: pathAlias,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                calendar_card:
                    `calendar_card@http://localhost:${CALENDAR_PORT}/remoteEntry.js`,
                    todo_card:
                        `todo_card@http://localhost:${TODO_PORT}/remoteEntry.js`
            },
            shared: [
                'react', 
                'react-dom',
                {
                    "@vishakha01/mfe-shared-library": {
                        import: "@vishakha01/mfe-shared-library",
                        // requiredVersion: require("../shared-library/package.json").version,
                    }
                }
            ],
        }),
        new Dotenv()
    ],
    devServer: {
        contentBase: path.join(__dirname, "build"),
        compress: true,
        port: 8080
    }
};