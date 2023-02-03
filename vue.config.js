const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
  proxy: {
    '/one': {
      target: 'http://10.30.1.53:8082',
      pathRewrite: {'^/one' : ''}
    },
    '/two': {
      target: 'http://10.30.1.53:8081/',
      pathRewrite: {'^/two' : ''}
    },
    '/timesheet':{
      target:'https://1603-49-249-56-118.ap.ngrok.io/',
      pathRewrite:{'^/timesheet':''}
    }
  }
}
}
)
