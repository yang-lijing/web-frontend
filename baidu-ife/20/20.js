/**
 * Created by baobao on 16/8/17.
 */

/*function validate(inputField,helptext){
  //var num=document.getElementById('input').value.trim();
  if(isNaN(inputField.value)||inputField.value.length>60||inputField.value>100){
    helptext.innerHTML="请输入10-100的数字";
    return false;
  }
  helptext="";
  return true;
}*/

var arr1=[];
function renderAdd(){
  var input=document.getElementById('textarea');
  var num=input.value;
  var num1=num.split(/;|'/);
  arr1 = arr1.concat(num1);
  render();

}
function  render() {
  var oUl=document.getElementById('ul');
  oUl.innerHTML="";
  //渲染数据
  for(var i=0;i<arr1.length;i++) {
    /*_html.push('<li>'+arr1[i]+'</li>')
     }
     oUl.innerHTML=_html.join('');
     */
    var oLi = document.createElement("li");
    oLi.innerHTML = arr1[i];
    oUl.appendChild(oLi);
  }
}


function search(){
  var oUl=document.getElementById('ul');
  var input=document.getElementById("search").value;
  render();
  oUl.innerHTML=oUl.innerHTML.replace(new RegExp(input, "g"),"<span>"+input+"</span>");
}
