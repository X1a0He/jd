# 免责声明：仓库内所有文件仅供学习使用，请在24小时后删除
# Fixlog & Updatelog
- 2022-05-25 20:20 Update [jd_cleancart.js](https://github.com/X1a0He/jd/blob/main/jd_cleancart.js)
```
测试了一下，青龙能跑，我自己的号也能跑，部分号出现JSON问题，佛系修
```
- 2022-02-11 02:10 Update [jd_unsubscribe_xh.js](https://github.com/X1a0He/jd_scripts_fixed/blob/main/jd_unsubscribe_xh.js)
```
增加401 Authorization Required的检测，当遇到此问题时，将不再进行json数据解析
修复提示json解析错误的问题，若多次出现，请设置环境变量JD_USER_AGENT来控制脚本User-Agent的提交
```
- 2022-02-03 15:55 Update [jd_try_xh.js](https://github.com/X1a0He/jd_scripts_fixed/blob/main/jd_try_xh.js)
```
当统一试用组启用时，无论是否已满，第二个账号开始均不会进行试用组的再次添加
```
- 2022-01-30 14:15 Update [jd_try_xh.js](https://github.com/X1a0He/jd_scripts_fixed/blob/main/jd_try_xh.js)
```
新增环境变量 XH_TRY_EXCEPT 以控制跳过某个指定账号
新增环境变量 XH_TRY_ENV 以控制是否输出查看环境变量
```
- 2022-01-30 14:10 Update [jd_unsubscribe_xh.js](https://github.com/X1a0He/jd_scripts_fixed/blob/main/jd_unsubscribe_xh.js)
```
新增环境变量 XH_UNSUB_EXCEPT 以控制跳过某个指定账号
修改了部分地方写错注释的问题
```
- 2022-01-30 03:10 Fix [jd_cleancart.js](https://github.com/X1a0He/jd_scripts_fixed/blob/main/jd_cleancart.js)
```
修复了删除失败不会停止的问题
```
- 2022-01-29 22:50 Update [jd_cleancart.js](https://github.com/X1a0He/jd_scripts_fixed/blob/main/jd_cleancart.js)
```
新增环境变量 XH_CLEAN_EXCEPT 以控制跳过某个指定账号
修改环境变量 JD_CART_REMOVESIZE -> XH_CLEAN_REMOVESIZE
修改环境变量 JD_CART_KEYWORDS -> XH_CLEAN_KEYWORDS
移除环境变量 JD_CART_REMOVEALL
整合了需要读取环境变量的内部变量，并显示出已经设置的环境变量
```
- 2022-01-29 16:45 Fix [jd_unsubscribe_xh.js](https://github.com/X1a0He/jd_scripts_fixed/blob/main/jd_unsubscribe_xh.js)
```
再次修复了获取数据失败的问题
再次修复了取消关注或取消收藏失败的问题
```
- 2022-01-25 16:05 Fix [jd_cleancart.js](https://github.com/X1a0He/jd_scripts_fixed/blob/main/jd_cleancart.js)
```
修复了获取购物车失败的问题
修复了删除购物车数据失败的问题
```
- 2022-01-25 16:05 Fix [jd_unsubscribe_xh.js](https://github.com/X1a0He/jd_scripts_fixed/blob/main/jd_unsubscribe_xh.js)
```
修复了获取数据失败的问题
修复了取消关注或取消收藏失败的问题
```
- 2022-01-25 15:42 Fix [jd_try_xh.js](https://github.com/X1a0He/jd_scripts_fixed/blob/main/jd_try_xh.js)
```
新增环境变量 JD_TRY_TOTALPAGES 用于指定每页遍历的最大页数
新增环境变量 JD_TRY_UNIFIED 用于指定是否采用统一试用组，详情请看脚本 args_xh 下的注释
修复了获取tabList失败的问题
修复了无法获取试用申请成功的问题
```
- 2021-12-26 15:00 Fix [jd_unsubscribe_xh.js](https://github.com/X1a0He/jd_scripts_fixed/blob/main/jd_unsubscribe_xh.js)
```
修复了获取数据失败的问题
```
- 2021-11-11 13:16 Fix [jd_unsubscribe_xh.js](https://github.com/X1a0He/jd_scripts_fixed/blob/main/jd_unsubscribe_xh.js)
```
昨天上传那个忘记加break了，这个加回来了
新增JD_UNSUB_FAILTIMES环境变量，用于控制失败次数，防止死循环
如果无效，带上你的日志tg找我
```
- 2021-09-14 23:02 Fix [jd_try_xh.js](https://github.com/X1a0He/jd_scripts_fixed/blob/main/jd_try_xh.js)
```
修复当环境变量 JD_TRY_SENDNUM 大于已有账号数会发送多条通知的问题
修复设定了环境变量 JD_TRY_SENDNUM 但不生效的问题
```
- 2021-09-14 22:57 Fix [jd_bean_change_xh.js](https://github.com/X1a0He/jd_scripts_fixed/blob/main/jd_bean_change_xh.js)
```
修复当环境变量 JD_BEAN_CHANGE_SENDNUM 大于已有账号数会发送多条通知的问题
```
- 2021-09-13 14:15 Fix [jd_try_xh.js](https://github.com/X1a0He/jd_scripts_fixed/blob/main/jd_try_xh.js)
```
修复上次修改出现逻辑错误导致无法运行的问题
修复 notify 错误导致不发通知的问题
修复请求页数自增逻辑导致显示请求页数错误的问题
```
- 2021-09-13 11:32 Fix [jd_ljd_xh.js](https://github.com/X1a0He/jd_scripts_fixed/blob/main/jd_ljd_xh.js)
```
修复通知中 [本次执行] 所获取到的成长值计算错误的问题
```
- 2021-09-13 11:22 Fix [jd_try_xh.js](https://github.com/X1a0He/jd_scripts_fixed/blob/main/jd_try_xh.js)
```
修复了因 cookiesArr 错误导致不发通知的问题
可能修复了请求页数错误后直接停止不运行的问题
```
- 2021-09-10 10:24 Fix [jd_try_xh.js](https://github.com/X1a0He/jd_scripts_fixed/blob/main/jd_try_xh.js)
```
内置成人类用品，老人，幼儿，饲料的关键词，无论有无设置环境变量，内置关键词永远存在
增加指定账号数量发送通知
修复一旦遇到有上限账号或风控账号就不发通知的问题
更详细的脚本注释
```
- 2021-09-12 09:09 Fix [jd_ljd_xh.js](https://github.com/X1a0He/jd_scripts_fixed/blob/main/jd_ljd_xh.js)
```
领京豆脚本，有问题直接提issues
修复死循环
修复有部分任务不做的问题
```
- 2021-09-10 12:20 Fix [jd_try_xh.js](https://github.com/X1a0He/jd_scripts_fixed/blob/main/jd_try_xh.js)
```
更加精确识别出 申请成功但未领取 申请成功已领取 申请已完成 已放弃 的类型
```
- 2021-09-09 21:34 Fix [jd_try_xh.js](https://github.com/X1a0He/jd_scripts_fixed/blob/main/jd_try_xh.js)
```
增加了几个默认的关键词，用于屏蔽成人类商品
取消默认不运行，现在默认运行了，毕竟脚本稳定了
调整默认单次运行申请的商品为100个
调整默认的tabList为1到10
```
- 2021-09-09 13:52 Fix [jd_try_xh.js](https://github.com/X1a0He/jd_scripts_fixed/blob/main/jd_try_xh.js)
```
修复试用成功的商品推送里面还是显示0的问题
如果上述问题没有被修复，还是显示0，请带上你的cookie私聊tg找我
```
- 2021-09-08 17:24 Fix [jd_try_xh.js](https://github.com/X1a0He/jd_scripts_fixed/blob/main/jd_try_xh.js)
```
支持黑名单过滤关键词时 输出对应关键词
对应账号遇到403风控后将不会再执行
未到申请时间的商品会自动跳过
修复当tabId组遍历完毕后tabId变成undefined的问题
为了防止风控，将遍历数据的默认间隔提升到2000毫秒
调整默认试用组长度为50
```
- 2021-09-07 12:15 Fix [jd_islogin_xh.js](https://github.com/X1a0He/jd_scripts_fixed/blob/main/jd_islogin_xh.js)
```
修复了没有通知的问题
```
- 2021-09-06 22:03 Fix [jd_car_exchange_xh.js](https://github.com/X1a0He/jd_scripts_fixed/blob/main/jd_car_exchange_xh.js)
```
修复兑换api
```
- 2021-09-06 20:08 Fix [jd_unsubscribe_xh.js](https://github.com/X1a0He/jd_scripts_fixed/blob/main/jd_unsubscribe_xh.js)
```
修复取关店铺遇到关键字会进入死循环的问题
重写所有变量，支持环境变量控制内部变量
不在支持QuantumultX或其他，支持且仅支持Node.js
```
- 2021-09-06 20:08 Fix [jd_try_xh.js](https://github.com/X1a0He/jd_scripts_fixed/blob/main/jd_try_xh.js)
```
修复不存在布尔型环境变量时，内部读取类型错误且相关默认值不生效的问题
新增白名单功能，详情请查看脚本内注释
```
- 2021-09-06 16:47 Fix [jd_try_xh.js](https://github.com/X1a0He/jd_scripts_fixed/blob/main/jd_try_xh.js)
```
修复trialActivityIdList和trialActivityTitleList忘记重置导致部分情况执行后下一账号无法执行的问题
修复无法读取或读取环境变量错误的问题
日志新增了各个环境变量的类型，有问题请带日志反馈
```
- 2021-09-06 15:58 Fix [jd_try_xh.js](https://github.com/X1a0He/jd_scripts_fixed/blob/main/jd_try_xh.js)
```
修复tabList函数无法输出tabId和对应tabName的问题
修复因$.isPush未提前定义导致过滤时提醒skuTitle解析异常的问题
修复当达到申请次数上限300次的时候不会自动停止的问题
```
 - 2021-09-06 14:20 Fix [jd_try_xh.js](https://github.com/X1a0He/jd_scripts_fixed/blob/main/jd_try_xh.js)
 ```
 更改tabId的类型为数组
 增加种草官过滤规则
 增加是否输出到日志
 修复当maxLength过大的时候，会出现自动停止的问题
```
