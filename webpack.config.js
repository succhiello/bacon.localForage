var path = require('path'),
    webpack = require('webpack');

module.exports = {
    entry: './src/bacon.localforage.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bacon.localforage.js',
        library: 'BaconLocalForage',
        libraryTarget: 'var'
    },
    externals: {
        'localforage': 'localforage',
        'baconjs': 'Bacon'
    },
    plugins: [
        new webpack.ProvidePlugin({
            localforage: 'localforage',
            Bacon: 'baconjs'
        })
    ]
};
