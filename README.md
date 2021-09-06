# 由本人修复的京东类脚本，引用请注明来源

## Contact：[X1a0He](https://t.me/X1a0He)
# UpdateLog
 - 2021-09-06 22:09 Update [jdCookie_xh.js](https://github.com/X1a0He/jd_scripts_fixed/blob/main/jdCookie_xh.js)
 ```
 原文件的输出太长，我自己改成了下面的形式
 不喜勿下
 [2021-09-06 22:07:40] 读取到3个京东账号Cookie
 ```
# ToDo
- [x] Fixed:取关店铺遇到关键字会进入死循环 [#1](https://github.com/X1a0He/jd_scripts_fixed/issues/1) 

# Fixlog
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
