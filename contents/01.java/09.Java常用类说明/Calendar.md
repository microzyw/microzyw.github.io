# Calendar
[[toc]]
### Calendar 概述
Calendar是一个抽象类，它为特定时间与一组诸如YEAR、MONTH、DAY_OF_MONTH、HOUR等日历字段之间的转换提供了一些方法，<br>
并为操作日历字段（例如获得下星期的日期）提供了一些方法。<br>
``` java
Calendar cal = Calendar.getInstance();			
```
### Calenda.getFirstDayOfWeek方法
将返回每周从星期几开始，例如，美国从星期日开始，德国从星期一开始