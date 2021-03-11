const fs = require('fs')

module.exports = {
  "outputDir": "docs",
  "devServer": {
    host: "0.0.0.0",
    disableHostCheck: true,
    port:8080,
    https:true,
    https: {
      key: fs.readFileSync('/cert/privkey.pem'),
      cert: fs.readFileSync('/cert/cert.pem'),
      ca: fs.readFileSync('/cert/chain.pem'),
    },
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