module.exports = {
  "outputDir": "docs",
  publicPath: "/Frontend"
  "devServer": {
    host: "0.0.0.0",
    disableHostCheck: true,
    port:8080,
  },
  pwa:{
    name: 'Doudo',
    themeColor: '#FF5252',
    appleMobileWebAppStatusBarStyle: '#FF5252',
  },
  "transpileDependencies": [
    "vuetify"
  ],
}
