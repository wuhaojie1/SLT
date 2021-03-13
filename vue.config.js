const webpack = require('webpack')

module.exports = {
    publicPath : './',
    chainWebpack: config => {
        config.plugin('provide').use(webpack.ProvidePlugin, [{
            $: 'jquery',
            jquery: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }])
        // baseUrl: './' // 加入这行就可以了
    }
}