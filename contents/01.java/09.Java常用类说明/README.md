# Java常用类说明
::: tip
本文主要对Java的常用类进行总结。@Frank Zhao
:::
## 本章目录
[[toc]]
## Math 类
::: warning
在Math类中，为了最快性能，所有方法都用计算机浮点单元中的例程。
:::
::: warning
* 如果得到一个完全可预测的结果比运行速度更重要的话，就应该是使用StrictMath类
* 目前Math类中大部分函数都是调用StrictMath类
:::
## Calendar 类
Calendar是一个抽象类，它为特定时间与一组诸如YEAR、MONTH、DAY_OF_MONTH、HOUR等日历字段之间的转换提供了一些方法，<br>
并为操作日历字段（例如获得下星期的日期）提供了一些方法。<br>
``` java
Calendar cal = Calendar.getInstance();			
```
### Calenda.getFirstDayOfWeek方法
将返回每周从星期几开始，例如，美国从星期日开始，德国从星期一开始
## DateFormatSymbols 类
DateFormatSymbols 是一个公共类，用于封装可本地化的日期-时间格式化数据，如月名、星期几的名称和时区数据。<br>
通过DateFormatSymbols 类可以获得别国语言的星期几的名称。<br>
::: warning
DateFormat 和 SimpleDateFormat 都使用 DateFormatSymbols 封装信息。
:::
