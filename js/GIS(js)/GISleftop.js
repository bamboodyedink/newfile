/*
 * @Author: your name
 * @Date: 2021-09-09 19:48:13
 * @LastEditTime: 2021-09-09 20:33:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \天眼前端课\第二阶段\考核2\js\GISleftop.js
 */
function oclick() {
    let oli = document.querySelectorAll('li');
    let a = document.querySelectorAll('a');
    console.log(a);
    let last = oli[0];
    for (let i = 0; i < oli.length; i++) {
        // oli[i].bordercolor = i;
        oli[i].onclick = function() {
            last.style.color = "black";
            last.style.border = "none";
            // oil.style.color = "#409eff";
            this.style.color = "#409eff"
            this.style.borderBottom = "2px solid #409eff";
            last = this;
        }
    }
}
oclick()