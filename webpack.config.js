// webpack.config.js
const path = require('path');

module.exports = {
    entry: './algolia.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    target: 'web',
};