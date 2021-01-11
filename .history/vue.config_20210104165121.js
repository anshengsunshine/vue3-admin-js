module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
    // 构建项目生成的目录
    outputDir: process.env.NODE_ENV === 'production' ? 'dist' : 'devDist',
    // 关闭语法的自动监测
    lintOnSave: false,
    css: {
        // css预设器配置项
        loaderOptions: {
            scss: { 
                prependData: `@import "~@/assets/styles/main.scss";`
            }
        }
    },
} 