# BigDecimal
[[toc]]
### BigDecimal 概述
Java在java.math包中提供了BigDecimal，用来对超过16位有效位的数进行精确的运算。
### 为什么要使用BigDecimal
float 和 double 都是浮点数，而计算机是二进制的，浮点数无法精确的用二进制表示，所以浮点数会失去一定的精确度。<br>
那么在表示价格或者金融领域，就需要使用能精确计算的 BigDecimal 类
### 精确的使用BigDecimal
::: danger
为了精确计算而生的BigDecimal类，有时也会产生不精确的结果
:::
* 精确构建BigDecimal的方法
  * String作为参数的构造方法 public BigDecimal(String val)
  * BigDecimal的静态方法valueOf，因为valueOf内部也调用的String作为参数的构造方法
``` java
BigDecimal b1 = BigDecimal.valueOf(2.3);
BigDecimal b2 = new BigDecimal(Double.toString(2.3));
BigDecimal b2 = new BigDecimal("2.3");
```
* 避免使用以下方法构建BigDecimal
   * double作为参数的构造方法 public BigDecimal(double val) 
   * int作为参数的构造方法 public BigDecimal(int val)
::: details 代码实例解析
``` java
BigDecimal a = new BigDecimal(1.01);
BigDecimal b = new BigDecimal(1.02);
BigDecimal c = new BigDecimal("1.01");
BigDecimal d = new BigDecimal("1.02");
System.out.println(a.add(b));
System.out.println(c.add(d));

运行结果：
2.0300000000000000266453525910037569701671600341796875
2.03
```
:::
### BigDecimal运算操作
::: danger
* BigDecimal对象是不可变的的
   * 在进行每一步运算时，都会产生一个新的对象，所以在做加减乘除运算时千万要保存操作后的值。
:::
* 加法 - add(BigDecimal value)                       
* 减法 - subtract(BigDecimal value)                  
* 乘法 - multiply(BigDecimal value)                 
* 除法 - divide(BigDecimal value)
   * 如产生不能整除的情况，执行时会产生ArithmeticException异常 
* 除法 - divide(BigDecimal divisor, int scale, int roundingMode)    
   * divisor 除数
   * scale 小数点后保留位数
   * roundingMode 舍入模式  
::: details 舍入模式 选项说明
      * ROUND_UP ：向远离零的方向舍入。舍弃非零部分，并将非零舍弃部分相邻的一位数字加一。  
      * ROUND_DOWN ：向接近零的方向舍入。舍弃非零部分，同时不会非零舍弃部分相邻的一位数字加一，采取截取行为。
      * ROUND_CEILING ：向正无穷的方向舍入。注意：此模式不会减少数值大小。
         * 如果为正数，舍入结果同ROUND_UP一致；
         * 如果为负数，舍入结果同ROUND_DOWN一致。 
      * ROUND_FLOOR ：向负无穷的方向舍入。注意：此模式不会增加数值大小。
         * 如果为正数，舍入结果同ROUND_DOWN一致；
         * 如果为负数，舍入结果同ROUND_UP一致。  
      * ROUND_HALF_UP ：向“最接近”的数字舍入，
         * 如果与两个相邻数字的距离相等，则为向上舍入的舍入模式。
         * 如果舍弃部分>= 0.5，则舍入行为与ROUND_UP相同；
         * 否则舍入行为与ROUND_DOWN相同。
         * 这种模式也就是我们常说的我们的“四舍五入”。
      * ROUND_HALF_DOWN ：向“最接近”的数字舍入，
         * 如果与两个相邻数字的距离相等，则为向下舍入的舍入模式。
         * 如果舍弃部分> 0.5，则舍入行为与ROUND_UP相同；
         * 否则舍入行为与ROUND_DOWN相同。
         * 这种模式也就是我们常说的我们的“五舍六入”。
      * ROUND_HALF_EVEN ：向“最接近”的数字舍入，
         * 如果与两个相邻数字的距离相等，则相邻的偶数舍入。
         * 如果舍弃部分左边的数字奇数，则舍入行为与 ROUND_HALF_UP 相同；
         * 如果为偶数，则舍入行为与 ROUND_HALF_DOWN 相同。
         * 注意：在重复进行一系列计算时，此舍入模式可以将累加错误减到最小。
         * 此舍入模式也称为“银行家舍入法”，主要在美国使用。
         * 四舍六入，无非两种情况，如果前一位为奇数，则入位，否则舍去。
      * ROUND_UNNECESSARY ：断言请求的操作具有精确的结果，因此不需要舍入。
         * 如果对获得精确结果的操作指定此舍入模式，则抛出ArithmeticException。
::: 
::: details 代码实例解析
``` java
BigDecimal a = new BigDecimal("10");
BigDecimal b = new BigDecimal("3");
System.out.println("a + b = " + a.add(b));
System.out.println("a - b = " + a.subtract(b));
System.out.println("a * b = " + a.multiply(b));
System.out.println("a / b =" + a.divide(b)); // 执行时会产生ArithmeticException异常
System.out.println("a / b (ROUND_UP) = " + a.divide(b, 3, BigDecimal.ROUND_UP));
System.out.println("a / b (ROUND_DOWN) = " + a.divide(b, 3, BigDecimal.ROUND_DOWN));
System.out.println("a / b (ROUND_CEILING) = " + a.divide(b, 3, BigDecimal.ROUND_CEILING));
System.out.println("a / b (ROUND_FLOOR) = " + a.divide(b, 3, BigDecimal.ROUND_FLOOR));
System.out.println("a / b (ROUND_HALF_DOWN) = " + a.divide(b, 3, BigDecimal.ROUND_HALF_DOWN));
System.out.println("a / b (ROUND_HALF_EVEN) = " + a.divide(b, 3, BigDecimal.ROUND_HALF_EVEN));
System.out.println("a / b (ROUND_HALF_UP) = " + a.divide(b, 3, BigDecimal.ROUND_HALF_UP));
System.out.println("a / b (ROUND_UNNECESSARY) = " + a.divide(b, 3, BigDecimal.ROUND_UNNECESSARY)); // 执行时会产生ArithmeticException异常

运行结果：
a + b = 13
a - b = 7
a * b = 30
a / b (ROUND_UP) = 3.334
a / b (ROUND_CEILING) = 3.334
a / b (ROUND_DOWN) = 3.333
a / b (ROUND_FLOOR) = 3.333
a / b (ROUND_HALF_DOWN) = 3.333
a / b (ROUND_HALF_EVEN) = 3.333
a / b (ROUND_HALF_UP) = 3.333
```
:::
### BigDecimal比较大小
* compareTo
::: details 代码实例解析
``` java
BigDecimal a = new BigDecimal("101");
BigDecimal b = new BigDecimal("111");
// 使用compareTo方法比较
// 注意：a、b均不能为null，否则会报空指针
if (a.compareTo(b) == -1) {
    System.out.println("a小于b");
}
if (a.compareTo(b) == 0) {
    System.out.println("a等于b");
}
if (a.compareTo(b) == 1) {
    System.out.println("a大于b");
}
if (a.compareTo(b) > -1) {
    System.out.println("a大于等于b");
}
if (a.compareTo(b) < 1) {
    System.out.println("a小于等于b");
}}
```
:::
### BigDecimal设置小数位数
* setScale(int scale, int roundingMode) 
   * scale 小数点后保留位数
   * roundingMode 舍入模式  
::: details 代码实例解析
``` java
BigDecimal e1 = new BigDecimal("1.345232589525852");
System.out.println("保留2位小数，直接删除多余的小数位数，然后进一位：" + e1.setScale(2, BigDecimal.ROUND_UP));
System.out.println("保留2位小数，直接删除多余的小数位数：" + e1.setScale(2, BigDecimal.ROUND_DOWN));
System.out.println("保留2位小数，四舍五入：" + e1.setScale(2, BigDecimal.ROUND_HALF_UP));
System.out.println("保留2位小数，五舍六入：" + e1.setScale(2, BigDecimal.ROUND_HALF_DOWN));

运行结果：
保留2位小数，直接删除多余的小数位数，然后进一位：1.35
保留2位小数，直接删除多余的小数位数：1.34
保留2位小数，四舍五入：1.35
保留2位小数，五舍六入：1.35
```
:::
### 格式化BigDecimal对象
::: details 代码实例解析
``` java
BigDecimal f1 = new BigDecimal("12987653421987652312");
BigDecimal f2 = new BigDecimal("0.0876525226");
// 建立货币格式化引用
NumberFormat currency = NumberFormat.getCurrencyInstance();
// 建立百分比格式化引用
NumberFormat percent = NumberFormat.getPercentInstance();
// 设置百分比小数点最多3位
percent.setMaximumFractionDigits(3);
System.out.println("currency形式："+currency.format(f1));
System.out.println("percent形式："+percent.format(f2));

运行结果：
currency形式：￥12,987,653,421,987,652,312.00
percent形式：8.765%
```
:::

