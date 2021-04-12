const path = require("path")
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
        
        // path: helpers.root('dist'),
        // publicPath: '/',
        // filename: 'js/[name].bundle.js',
        // chunkFilename: 'js/[id].chunk.js'

    },
    resolve: {
        extensions: ['.vue']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ],
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html'
        })
        // new webpack.EnvironmentPlugin(environment),
        // new webpack.HotModuleReplacementPlugin(),
        // new FriendlyErrorsPlugin()
    ],
    // entry: {
    //     polyfill: '@babel/polyfill',
    //     main: helpers.root('src', 'main'),
    // },
    // optimization: {
    //     runtimeChunk: 'single',
    //     splitChunks: {
    //       chunks: 'all'
    //     }
    // },
    // resolve: {
    //     extensions: [ '.js', '.vue' ],
    //     alias: {
    //       'vue$': isDev ? 'vue/dist/vue.runtime.js' : 'vue/dist/vue.runtime.min.js',
    //       '@': helpers.root('src')
    //     }
    // },
    // module: {
    //     rules: [
    //         {
    //             test: /\.vue$/,
    //             loader: 'vue-loader',
    //             include: [ helpers.root('src') ]
    //         },
    //         {
    //             test: /\.js$/,
    //             loader: 'babel-loader',
    //             include: [ helpers.root('src') ]
    //         },
    //         {
    //             test: /\.css$/,
    //             use: [
    //                 isDev ? 'vue-style-loader' : MiniCSSExtractPlugin.loader,
    //                 { loader: 'css-loader', options: { sourceMap: isDev } },
    //             ]
    //         },
    //         {
    //             test: /\.scss$/,
    //             use: [
    //                 isDev ? 'vue-style-loader' : MiniCSSExtractPlugin.loader,
    //                 { loader: 'css-loader', options: { sourceMap: isDev } },
    //                 { loader: 'sass-loader', options: { sourceMap: isDev } }
    //             ]
    //         },
    //         {
    //             test: /\.sass$/,
    //             use: [
    //                 isDev ? 'vue-style-loader' : MiniCSSExtractPlugin.loader,
    //                 { loader: 'css-loader', options: { sourceMap: isDev } },
    //                 { loader: 'sass-loader', options: { sourceMap: isDev } }
    //             ]
    //         }
    //     ]
    // },
    // 
    // devServer: {
    //     compress: true,
    //     historyApiFallback: true,
    //     hot: true,
    //     open: true,
    //     overlay: true,
    //     port: 8000,
    //     stats: {
    //       normal: true
    //     }
    // }
}