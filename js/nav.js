/*
 * @Author: your name
 * @Date: 2021-09-09 16:58:20
 * @LastEditTime: 2021-09-09 20:32:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \天眼前端课\第二阶段\考核2\js\nav.js
 */
function oclick() {
    let oli = document.querySelectorAll('li');
    let last = oli[0];
    for (let i = 0; i < oli.length; i++) {
        oli[i].bordercolor = i;
        oli[i].onclick = function() {
            last.style.borderBottom = "none";
            this.style.borderBottom = "2px solid #fff";
            last = this;
        }
    }
}
oclick()