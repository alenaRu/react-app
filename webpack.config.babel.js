import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { HotModuleReplacementPlugin } from 'webpack';

export default () => ({
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8080',
        path.join(__dirname, 'src/index.jsx'),
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    plugins: [
        new HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
    ],
    module: {
        rules: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                include: path.join(__dirname, 'src'),
                use: [
                    {
                        loader: 'babel',
                        options: {
                            babelrc: false,
                            presets: [
                                ['es2015', { modules: false }],
                                'react',
                            ],
                            plugins: ['react-hot-loader/babel'],
                        }
                    }
                ]
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
});