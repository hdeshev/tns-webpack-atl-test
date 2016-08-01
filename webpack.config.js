var bundler = require("nativescript-dev-webpack");
var path = require("path");

var config = bundler.getConfig({
});

config.context = path.resolve("./app");
config.resolve.extensions.push(".ts");
config.entry.bundle = "./main.ts";
config.output.path = path.resolve("./app");
config.module = {
    loaders: [
        {
            test: /\.ts$/,
            loader: 'awesome-typescript-loader'
        }
    ]
};

console.log(JSON.stringify(config, null, "    "));
module.exports = config;
