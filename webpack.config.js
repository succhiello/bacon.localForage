var path = require('path'),
    webpack = require('webpack');

module.exports = {
    entry: './src/main',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bacon.localforage.js',
        library: 'Bacon.localforage',
        libraryTarget: 'umd'
    },
    externals: {
        'localforage': 'localforage',
        'bacon': 'Bacon'
    },
    plugins: [
        new webpack.ProvidePlugin({
            localforage: 'localforage',
            Bacon: 'bacon'
        })
    ]
};
