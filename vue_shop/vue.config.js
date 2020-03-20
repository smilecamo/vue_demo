module.exports = {
  devServer: {
    // 代理
    proxy: {
      // 走代理
      "/api": {
        // 目标代理
        target: "https://www.imooc.com",
        changeOrigin: true,
        pathRewrite: {
          "/api": ""
        }
      }
    }
  }
};