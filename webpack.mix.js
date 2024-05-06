import { js } from "laravel-mix";
import { DefinePlugin } from "webpack";

js("resources/js/app.js", "public/js")
    .webpackConfig({
        resolve: {
            alias: {
                // Use the esm-bundler build of Vue
                vue$: "vue/dist/vue.esm-bundler.js",
            },
        },
        plugins: [
            // Define Vue's feature flags globally during build
            new DefinePlugin({
                __VUE_OPTIONS_API__: true,
                __VUE_PROD_DEVTOOLS__: false,
                __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
            }),
        ],
        output: {
            publicPath: "/public/",
            chunkFilename: "[name].bundle.js?id=[contenthash]",
        },
        optimization: {
            splitChunks: {
                automaticNameDelimiter: "-",
                name: false,
            },
        },
    })
    .vue()
    .sourceMaps();
