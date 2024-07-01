const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
          target: 'http://localhost:8000',
          changeOrigin: true,
          pathRewrite: {
            '^/api': '/', // 프록시 경로를 '/'로 변경
          },
        })
      );
      
};