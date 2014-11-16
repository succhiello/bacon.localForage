var path = require('path'),
    webpack = require('webpack');

module.exports = {
    entry: './src/bacon.localforage.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bacon.localforage.js',
        library: 'Bacon.localforage',
        libraryTarget: 'var'
    },
    externals: {
        'lodash': '_',
        'localforage': 'localforage',
        'baconjs': 'Bacon'
    },
    plugins: [
        new webpack.ProvidePlugin({
            _: 'lodash',
            localforage: 'localforage',
            Bacon: 'baconjs'
        })
    ]
};
