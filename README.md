# 佛系修复，用爱发电
# 由X1a0He修复，引用注明来源，使用前看下面

要是不看脚本注释就用我仓库的脚本，还来问我怎么用的，自己删脚本吧

针对与 京东试用脚本 如果再有傻逼来一直问，我直接扬库跑路

我写得很清楚了

[修复日志](https://github.com/X1a0He/jd_scripts_fixed#fixlog)

[ToDo](https://github.com/X1a0He/jd_scripts_fixed#todo)

[更新日志](https://github.com/X1a0He/jd_scripts_fixed#updatelog)

## Contact：[X1a0He](https://t.me/X1a0He) (需要科学上网)
# Fixlog
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
# ToDo
- [x] About [jd_bean_change.js](https://github.com/X1a0He/jd_scripts_fixed/blob/main/jd_bean_change_xh.js)
```
尝试修复 京豆昨日收支统计错误的问题(好像又没有问题)
```
- [x] About [jd_try_xh.js](https://github.com/X1a0He/jd_scripts_fixed/blob/main/jd_try_xh.js)
```
内置成人类用品，老人，幼儿，饲料的关键词，无论有无设置环境变量，内置关键词永远存在
增加指定账号数量发送通知
修复一旦遇到有上限账号或风控账号就不发通知的问题
```
- [x] About [jd_try_xh.js](https://github.com/X1a0He/jd_scripts_fixed/blob/main/jd_try_xh.js) [#2](https://github.com/X1a0He/jd_scripts_fixed/issues/2) [#3](https://github.com/X1a0He/jd_scripts_fixed/issues/3)
```
支持黑名单过滤关键词时 输出对应关键词
对应账号遇到403风控后将不会再执行
```
- [x] 简化jd_bean_change.js
```
初步构思，每两个账号推送一遍，防止长度过长无法推送，例如Bark就是3个账号推送不了
我看看怎样在原有数据的基础上简化一下，有好idea的可以联系我
```
- [x] Fixed:取关店铺遇到关键字会进入死循环 [#1](https://github.com/X1a0He/jd_scripts_fixed/issues/1) 
# UpdateLog
 - 2021-09-07 23:43 Update [jd_bean_change_xh.js](https://github.com/X1a0He/jd_scripts_fixed/blob/main/jd_bean_change_xh.js)
 ```
 简化了京东日资产通知
 增加可通过环境变量来控制每次发送的账号数量
 JD_BEAN_CHANGE_SENDNUM 默认为2
 效果如下
 ```
![](https://camo.githubusercontent.com/9ea74bcdcd3560f70e77a50210d52ccfdea6f8ac4019ba419b863523a119549c/68747470733a2f2f7777772e7831613068652e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032312f30392f576563686174494d4736382e6a706567)
 - 2021-09-07 12:02 Update [jd_islogin_xh.js](https://github.com/X1a0He/jd_scripts_fixed/blob/main/jd_islogin_xh.js)
 ```
检测Cookie是否有效
[京东账号1 xxxxxxxxxx] 正在检测...
[京东账号1 xxxxxxxxxx] ✅Cookie有效

[京东账号2 xxxxxxxxxx] 正在检测...
[京东账号2 xxxxxxxxxx] ❌Cookie失效了...
 ```
 - 2021-09-06 22:09 Update [jdCookie_xh.js](https://github.com/X1a0He/jd_scripts_fixed/blob/main/jdCookie_xh.js)
 ```
 原文件的输出太长，我自己改成了下面的形式
 不喜勿下
 [2021-09-06 22:07:40] 读取到3个京东账号Cookie
 ```
# 使用前必读
库如其名，这里是一些由我亲自修复的京东类脚本，你完全可以在Nodejs环境下正常运行，但不排除会有逻辑性错误

不要带着老脚本的思想来用我修复后的脚本

因为这里的脚本基本上和老脚本不一样，我能重写的都会重写

所以以前的方式是怎样，流程是怎样我并不清楚

如果你想尽可能还原以前的体验，我非常欢迎你来跟我交流

# 注意事项
因本人水平有限，难免会出现一些逻辑性错误，如果你发现了我修复后还出现逻辑错误

又或者你有更好的处理思路或有更好的idea

可以跟我交流

但使用前请确保你认真看了脚本内的注释，我在每个脚本难以理解的地方都会加上了注释
