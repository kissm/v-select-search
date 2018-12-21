var os = require('os');
var localhost = 'localhost';
var networkInterfaces = os.networkInterfaces();
var WLAN = networkInterfaces.WLAN || networkInterfaces['本地连接'];
for (let i in WLAN) {
    var value = WLAN[i];
    if (value.family == 'IPv4') {
        localhost = value.address;
        break;
    }
}
module.exports = {
    port: 80, // 端口号
    host: 'http://http://192.168.0.7',
    https: false,
    proxy: {
        '/v2': {
            target: 'https://api.douban.com',
            changeOrigin: true,
            pathRewrite: {
                '^/api': ''
            }
        }
    },
    open: true
}