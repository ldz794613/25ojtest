// =====================
// JavaScript 小测
// =====================

/*
TODO J1：
创建一个变量 name
保存你的名字（字符串）
输出：你好，我是xxx
*/
let name = "xsy"
console.log("你好，我是" + name);


/*
TODO J2：
创建两个数字变量 a=10 b=20，输出它们的和
*/
let a = 10;
let b = 20;
console.log(a + b);


/*
TODO J3：
布尔值变量isStudent，判断输出对应文字
*/
let isStudent = true;
if(isStudent === true){
    console.log("我是学生");
}else{
    console.log("我不是学生");
}


/*
TODO J4：
创建sayHello函数，调用弹出提示
*/
function sayHello(){
    alert("欢迎学习 JavaScript");
}


/*
TODO J5：
点击修改文本内容
*/
function showMessage() {
    document.querySelector("div").innerText = "按钮被点击了！";
}


/*
TODO J6：
创建数组，输出首个元素和数组长度
*/
const arr = ["HTML","CSS","JavaScript"]
console.log(arr[0])
console.log(arr.length);


/*
TODO J7：
创建学生对象并输出姓名
*/
const student ={
    name:"小明",
    age:18,
    score:90
}
console.log(student.name);


/*
TODO J8：
切换网页渐变背景
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
    document.body.style.background = bgColors[colorIndex];
}

// 以上为js题目部分，下面为卡通白菜的代码，完成js题目后可以看看哦~

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
