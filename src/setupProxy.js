const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  // ...You can now register proxies as you wish!
  app.use(createProxyMiddleware('/api', { 
    target: 'https://196.20.2010/',
    secure: false,
    changeOrigin: true,
    pathRewrite: {
     "^/api": "/"
    },
   }))
};
