const aaaa = require('./src/ds');

module.exports = {
    lintOnSave: false,
    devServer: {
        proxy: {
            "^/api": {                        //设置跨域变量代号
                target: `https://api-takumi.mihoyo.com/`,         //你想要代理的目标源链接
                changeOrigin: true,          //开启代理
                pathRewrite: {               //设置二级
                    "^/api": "/",
                    "^/api2": "/body"
                },
                headers: {//重点在这里，添加配置项 headers 就可以了
                    Host: "api-takumi.mihoyo.com",
                    Connection: "keep-alive",
                    Accept: "application/json, text/plain, */*",
                    Origin: "https://webstatic.mihoyo.com",
                    "x-rpc-app_version": "2.12.1",
                    "User-Agent":
                        "Mozilla/5.0 (Linux; Android 6.0.1; MI 6 Build/V417IR; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.158 Mobile Safari/537.36 miHoYoBBS/2.12.1",
                    "x-rpc-client_type": 5,
                    Referer:
                        "https://webstatic.mihoyo.com/app/community-game-records/index.html?v=6",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,en-US;q=0.9",
                    "X-Requested-With": "com.mihoyo.hyperion",
                    Cookie: "stuid=159399529;stoken=EUZYmKLuWMFeOjCnBukvvsBsYOwb62yCS2OWocXx;ltuid=159399529;ltoken=gRkMPToS0GgKzihJUTrn2swe4DZtr92JVDtQdCcM;account_id=159399529;login_ticket=Ku49eqthxhIlWw03L5dG8ZZeIygO24WP9xTuyZBy;cookie_token=5yeoidNin9oeIWFtsOQpzs3Zw8sJKcegTT5vczpx;",
                    "Content-Type": "application/json",
                    DS: aaaa.ddss
                }
            }
        }
    },
    publicPath: './',
}