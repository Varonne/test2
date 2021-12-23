<script>
export default {
    sleepAsync,
    randomSleepAsync,
    randomString,
};
import _ from "lodash";



const randomString = (length) => {
    let randomStr = "";
    for (let i = 0; i < length; i++) {
        randomStr += _.sample("abcdefghijklmnopqrstuvwxyz0123456789");
    }
    return randomStr;
};
</script>

