/*
 此文件为Node.js专用。其他用户请忽略
 */
//此处填写京东账号cookie。
let CookieJDs = ['']
// 判断环境变量里面是否有京东ck
if(process.env.JD_COOKIE){
    if(process.env.JD_COOKIE.indexOf('&') > -1){
        CookieJDs = process.env.JD_COOKIE.split('&');
    } else if(process.env.JD_COOKIE.indexOf('\n') > -1){
        CookieJDs = process.env.JD_COOKIE.split('\n');
    } else {
        CookieJDs = [process.env.JD_COOKIE];
    }
}
if(JSON.stringify(process.env).indexOf('GITHUB') > -1){
    console.log(`请勿使用github action运行此脚本,无论你是从你自己的私库还是其他哪里拉取的源代码，都会导致我被封号\n`);
    !(async() => {
        await require('./sendNotify').sendNotify('提醒', `请勿使用github action、滥用github资源会封我仓库以及账号`)
        await process.exit(0);
    })()
}
CookieJDs = [...new Set(CookieJDs.filter(item => !!item))]
console.log(`\n[${getTime()}] 读取到${CookieJDs.length}个京东账号Cookie\n`);
if(process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => {};
for(let i = 0; i < CookieJDs.length; i++){
    if(!CookieJDs[i].match(/pt_pin=(.+?);/) || !CookieJDs[i].match(/pt_key=(.+?);/)) console.log(`\n提示:京东cookie 【${CookieJDs[i]}】填写不规范,可能会影响部分脚本正常使用。正确格式为: pt_key=xxx;pt_pin=xxx;（分号;不可少）\n`);
    const index = (i + 1 === 1) ? '' : (i + 1);
    exports['CookieJD' + index] = CookieJDs[i].trim();
}

function getTime(){
    let date = new Date(),
        year = date.getFullYear(),
        month = (date.getMonth() + 1) < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1,
        day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate(),
        hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours(),
        minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes(),
        seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}
