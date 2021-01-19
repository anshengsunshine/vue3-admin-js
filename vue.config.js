const path = require('path')

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
    // 构建项目生成的目录
    outputDir: process.env.NODE_ENV === 'production' ? 'dist' : 'devDist',
    // 关闭语法的自动监测
    lintOnSave: false,
    // webpack 配置
    chainWebpack: config => {
        // svg 配置
        config.module.rules.delete('svg');  //重点：删除默认配置中处理svg
        config.module
            .rule('svg-sprite-loader').test(/\.svg$/)
            .include
            .add(path.resolve('./src/assets/svg')) // 处理 svg 目录
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
    },
    css: {
        // css预设器配置项
        loaderOptions: {
            scss: {
                prependData: `@import "~@/assets/styles/main.scss";`
            }
        }
    },
} 