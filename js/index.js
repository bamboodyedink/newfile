/*
 * @Author: your name
 * @Date: 2021-08-31 15:40:43
 * @LastEditTime: 2021-09-09 18:57:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \天眼前端课\第二阶段\考核\js\index.js
 */
window.onload = function() {
        let ps = document.querySelectorAll('.changeColor');
        let divs = document.querySelectorAll('.container');

        let prevlast = ps[0]; //上一个点击对象，默认第0个
        // console.dir(ps);
        // console.dir(divs);



        for (let i = 0; i < ps.length; i++) {
            // ps[i].setAttribute("changec", i);
            ps[i].changec = i; //设置一个自定义属性，给一个i值
            // console.log(ps[i].changec);
            ps[i].onclick = function() {
                //把上一次字体颜色去掉
                prevlast.style.color = "black";
                //把上一次的边框颜色改为默认
                prevlast.style.border = 'none';
                // console.log(ps[i].changec);
                // 把上一个对应的div隐藏
                divs[prevlast.changec].style.display = "none";
                //添加当前点击按钮的边框色
                this.style.borderBottom = "2px solid #409eff";
                //添加当前点击按钮的字颜色
                this.style.color = "#409eff";
                // 让当前点击的按钮，对应div显示出来
                // console.log(divs[this.changec])
                divs[this.changec].style.display = "block";

                //把上一次点击的对象更新当成点击的对象
                prevlast = this;
            }

        }
    }
    // ps.addEventListener("click", function() {
    //     changeColor.style.color = "#409eff";
    // })

// function changStyle() {
//     let changeStyle = document.querySelectorAll('#changeColor');
//     // let one = document.addEventListener('.one');
//     let prelast = changeColor[0];
//     for (let i = 0; i < changeColor.length; i++) {
//         // const element = array[i];
//         prelast.style.color = '#409eff';
//         prelast.style.borderbottom = '2px solid #409eff';
//     }

//     console.dir(changeStyle);
// }
// changStyle();


// const nonePassword = {
//     isPhone: function(str) {
//         let str_trim = str.trim();
//         let patten = /^[0-9]*$/;
//         return patten.test(str_trim);
//     },
//     isVerification: function(str) {
//         let str_trim = str.trim();
//         let patten = /^[0-9]*$/;
//         return patten.test(str_trim);
//     },
//     isPassword: function(str) {
//         let str_trim = str.trim();
//         let patten = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{1,18}$/;
//         return patten.test(str_trim);
//     },
//     isConfirm: function(str) {
//         let str_trim = str.trim();
//         let patten = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{1,18}$/;
//         return patten.test(str_trim);
//     },
// }
// console.log(nonePassword.isPhone('1234124'));