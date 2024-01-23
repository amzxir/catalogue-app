const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api', // مسیر مشخص شده برای پروکسی
    createProxyMiddleware({
      target: 'https://react-mini-projects-api.classbon.com',
      changeOrigin: true,
    })
  );
};
