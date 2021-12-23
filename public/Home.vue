<template>
    <div class="home">
        <van-row justify="center">
            <AppDetail
                v-for="item in test"
                :key="item.name"
                :id="item"
            ></AppDetail>
        </van-row>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import AppDetail from "@/components/AppDetail.vue";
import Global from "@/Global.vue";
import _ from "lodash";
import md5 from "js-md5";
import superagent from "superagent";

export default {
    name: "Home",
    components: {
        HelloWorld,
        AppDetail,
        Global,
        ddss,
    },
    data() {
        return {
            test: Global.appid,
        };
    },
    async created() {
        const randomString = (length) => {
            let randomStr = "";
            for (let i = 0; i < length; i++) {
                randomStr += _.sample("abcdefghijklmnopqrstuvwxyz0123456789");
            }
            return randomStr;
        };

        let randomStr = randomString(6);

        let timestamp = Math.floor(Date.now() / 1000);
        let queryStr = "role_id=127794010&server=cn_gf01";

        let sign = md5(
            "salt=xV8v4Qu54lUKrEYFZkJhB8cuOh9Asafs&t=" +
                timestamp +
                "&r=" +
                randomStr +
                "&b=&q=" +
                queryStr
        );
        let ddss = timestamp + "," + randomStr + "," + sign;
        console.log(ddss);
        await this.axios({
            method: "GET",
            url: "/api/game_record/app/genshin/api/dailyNote?role_id=127794010&server=cn_gf01",
            header: {
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
                // Cookie: "stuid=159399529;stoken=EUZYmKLuWMFeOjCnBukvvsBsYOwb62yCS2OWocXx;ltuid=159399529;ltoken=gRkMPToS0GgKzihJUTrn2swe4DZtr92JVDtQdCcM;account_id=159399529;login_ticket=Ku49eqthxhIlWw03L5dG8ZZeIygO24WP9xTuyZBy;cookie_token=5yeoidNin9oeIWFtsOQpzs3Zw8sJKcegTT5vczpx;",
                // "Content-Type": "application/json",
                'ds': ddss,
            },
        }).then((res) => {
            console.log(res);
        });

        let currUrl =
            "/api/game_record/app/genshin/api/dailyNote?role_id=127794010&server=cn_gf01";
        let res = await superagent.get(currUrl).set('DS',ddss);
        console.log(res);
    },
};
module.exports = ddss;
</script>

<style scoped>
    * {
        padding: 0;
        margin: 0;
    }
</style>