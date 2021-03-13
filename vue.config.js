const webpack = require('webpack')

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? './'
        : '/',
    chainWebpack: config => {
        config.plugin('provide').use(webpack.ProvidePlugin, [{
            $: 'jquery',
            jquery: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }])
    }
}