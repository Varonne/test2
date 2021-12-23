const _ = require('lodash');
const md5 = require('js-md5');

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

module.exports = {
    ddss
}