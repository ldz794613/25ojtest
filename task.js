// =====================
// JavaScript 小测
// =====================

/*
TODO J1：
创建一个变量 name
保存你的名字（字符串）

输出：
你好，我是xxx
*/




/*
TODO J2：
创建两个数字变量：

a = 10
b = 20

输出它们的和
*/



/*
TODO J3：
创建一个布尔值变量：

isStudent = true

如果是 true 输出：
我是学生

否则输出：
我不是学生
*/




/*
TODO J4：
创建函数：

sayHello()

调用后弹窗：

欢迎学习 JavaScript
*/





/*
TODO J5：
补全 showMessage()

点击按钮后：

把页面中的：

这里显示JS结果

改成：

按钮被点击了！(result1元素中显示)
*/
function showMessage() {
    
}




/*
TODO J6：
创建数组：

languages = ["JavaScript", "Python", "Java"]

请完成以下操作：

1. 使用 unshift() 在数组开头添加 "C++"，并将结果打印一下
2. 使用 shift() 移除数组的第一个元素，并将结果打印一下
3. 创建函数 showArray(arr)，接收数组作为参数，
   将数组内容输出到页面（id为result1的元素中）
   格式：数组中的元素用逗号分隔
4. 调用 showArray(languages) 显示结果


*/





/*
TODO J7：
创建对象：

student

包含以下属性：
name（姓名）
age（年龄）
gender（性别）
grade（年级）
hobbies（爱好，数组类型，至少包含2个爱好）
scores（成绩，对象类型，包含math、english、chinese）

然后创建函数 printStudent(obj)，
接收student对象作为参数，
将学生信息输出到页面（id为result2的元素中），
格式要求：
姓名：xxx，年龄：xxx，性别：xxx，年级：xxx
爱好：xxx、xxx
总成绩：xxx分

调用 printStudent(student) 显示结果


*/





/*
TODO J8（综合题）：
补全函数：

changeColor()

点击按钮后：

修改网页背景颜色

提示：

document.body.style.background
*/
var colorIndex = 0;
var bgColors = [
    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)"
];

function changeColor() {
    colorIndex = (colorIndex + 1) % bgColors.length;
    


}






// 以上为js题目部分，下面为卡通白菜的代码，完成js题目后可以看看哦~
// 以下没有题目了哦~


















// ==========================================
// 卡通白菜 - 眼睛跟随鼠标转动
// ==========================================
document.addEventListener("mousemove", function(e) {
    var pupils = document.querySelectorAll(".pupil");
    pupils.forEach(function(pupil) {
        var eye = pupil.parentElement;
        var cabbage = document.getElementById("cabbage");

        // 获取眼睛的中心位置
        var eyeRect = eye.getBoundingClientRect();
        var eyeCenterX = eyeRect.left + eyeRect.width / 2;
        var eyeCenterY = eyeRect.top + eyeRect.height / 2;

        // 计算鼠标到眼睛的角度
        var dx = e.clientX - eyeCenterX;
        var dy = e.clientY - eyeCenterY;
        var angle = Math.atan2(dy, dx);

        // 瞳孔最大移动距离（限制在眼睛范围内）
        var maxDist = 5;

        var moveX = Math.cos(angle) * maxDist;
        var moveY = Math.sin(angle) * maxDist;

        pupil.style.transform = "translate(" + moveX + "px, " + moveY + "px)";
    });
});
