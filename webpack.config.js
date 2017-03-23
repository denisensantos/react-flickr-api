var path = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query:{
                presets:['react']
            }
        }]
    },

    devServer: {
        historyApiFallback: true,
        contentBase: './'
    },

    externals: {
        fs: '{}'
    },

    watch: true
};