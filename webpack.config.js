const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const outputDir = path.join(__dirname, 'build/')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    entry: './src/Example.bs.js',
    mode: isProd ? 'production' : 'development',
    output: {
        path: outputDir,
        filename: 'example.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/example.html',
            inject: false,
        }),
    ],
    devServer: {
        compress: true,
        contentBase: outputDir,
        port: process.env.PORT || 8000,
        historyApiFallback: true,
    },
}
