var path = require("path");
var webpack = require("webpack");

module.exports = {

    entry: {
        main: "./src/main/js/main.js"
    },
    output: {
        path: path.join(__dirname, "src/main/resources/static/js"),
        filename: "bundle-[name].js"
    },
    module: {
        loaders: [
            {
                test: /.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
};
