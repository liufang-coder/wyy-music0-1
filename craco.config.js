const path = require('path')
const CracoLessPlugin = require('craco-less')
const resolve = pathname => path.resolve(__dirname,pathname)
module.exports = {
    // less npm i craco-less@2.1.0-alpha.0 ant-design中有配置答案
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
            lessLoaderOptions: {
                lessOptions: {
                modifyVars: {  },
                javascriptEnabled: true,
                },
            },
            },
        },
        ],

    webpack: {
        alias: {
            "@":resolve("src"),
            "components":resolve("src/components"),
            "utils":"src/utils"
        }
    }
}