import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { HotModuleReplacementPlugin } from 'webpack';

module.exports = {
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8080',
        path.join(__dirname, 'src/index.tsx'),
    ],

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
    },

    devtool: "source-map",

    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    plugins: [
        new HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ],

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel?stage=0',
                exclude: path.resolve(__dirname, 'node_modules'),
            },
            {
                test: /\.tsx?$/,
                loaders: [
                    "react-hot-loader/webpack",
                    "awesome-typescript-loader"
                ],
                exclude: path.resolve(__dirname, 'node_modules'),
                include: path.resolve(__dirname, "src"),
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },

            { test: /\.json$/, loader: 'json' },
            {
                test: /\.(css|scss|sass)$/,
                loader: 'style!css!sass',
            },
        ]
    },

    devServer: {
        hot: true,
    },
};