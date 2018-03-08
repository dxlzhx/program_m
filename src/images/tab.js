/**
 * Created by asua-3 on 2015/8/24.
 */
//第一步：分析思路
//选项卡的思路：当点击某一个li的时候，让所有的li和对应的div的class等于空，然后在让当前点击的这个li和对应的div class="select"

//第二步：想操作谁就先获取谁
function tab(){
    var oTab = document.getElementsByClassName("wrapper");
    var oLis = oTab.getElementsByTagName("li");//获取的是类数组 是对象数据类型的
    var oDivs = oTab.getElementsByTagName("div");

//第三步：实现(定义)一个切换也卡的功能
    function tabChange(index) {
//1、先让所有的li和div的选中样式清空
        for (var i = 0; i < oLis.length; i++) {
            oLis[i].className = "";
            oDivs[i].className = "";
        }
//2、让当前选中的li和div有选中的样式，我们发现现在还不知道哪个被选中呢(一个功能 定义的时候原材料不够，需要执行的时候传给我，那么我们就定义成形参，我们定义了一个形参index代表当前被选中li的索引)
        oLis[index].className = "select";
        oDivs[index].className = "select";
    }

//第四步：执行我们的功能
    /*oLis[0].onmouseover= function () {
     tabChange(0);
     }
     oLis[1].onmouseover = function () {
     tabChange(1);
     }
     oLis[2].onmouseover = function () {
     tabChange(2);
     }*/
    for (var i = 0; i < oLis.length; i++) {
        oLis[i].index = i;
        oLis[i].onmouseover = function () {
            tabChange(this.index);
        }
    }

//自定义属性：给每一个元素增加一个特征，用来存储自己的某一项内容的，然后以后如果要用的话，我么直接的调用就可以了，也可以理解为临时存储一个值的作用
    /*
     for (var i = 0; i < oLis.length; i++) {
     oLis[i].onmouseover = function () {
     tabChange(i);
     }
     }

     给元素绑定事件，先把函数定义的部分赋值给这个事件onmouseover，当手动在页面中划过的时候，执行对应的函数

     i=0 第一次循环
     oLis[0].onmouseover=function(){
     "tabChange(i);" 函数定义的时候存储的是字符串
     }
     i=1 第二次循环
     oLis[1].onmouseover=function(){
     "tabChange(i);" 函数定义的时候存储的是字符串
     }
     i=2 第三次循环
     oLis[2].onmouseover=function(){
     "tabChange(i);" 函数定义的时候存储的是字符串
     }

     当手动滑到第一个li上，触发第一个绑定的方法，执行对应的函数，然后把里面的"tabChange(i);"字符串当做代码执行：tabChange(i);  i是一个变量

     当我们手动操作的时候，页面已经加载完成，代表着js代码已经执行完成了，也就是循环也完成了，循环完成i=3

     失败的原因：i的值已经变成最后一个3了
     */


    var oBtn = document.getElementById("btn");
    oBtn.isClick = false;
    oBtn.onclick = function () {
        var isClick = this.isClick;
        if (!isClick) {
            alert("欢迎来到珠峰培训，学习自定义属性！");
            oBtn.isClick = true;
        }
    }
}
