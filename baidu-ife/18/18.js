/**
 * Created by lvxin on 16/8/15.
 */
/*添加
1从input里面获取到值
2当左侧入onclick的时候,
3div里面加入一个数字,用push,
渲染数字,即将数字存储后,再拿出来。
 */

function validate(inputField,helptext){
      //var num=document.getElementById('input').value.trim();
      if(isNaN(inputField.value)||inputField.value.length>60||inputField.value>100){
        helptext.innerHTML="请输入10-100的数字";
        return false;
      }
      helptext="";
      return true;
    }


    var arr=[];
    function renderAddL(){
      var input=document.getElementById('input');
      var num=input.value;
      if(validate(input,document.getElementById('helptext'))){
        arr.unshift(num);
        var oUl=document.getElementById('ul');
    oUl.innerHTML="";
    //渲染数据
    for(var i=0;i<arr.length;i++){
      var oLi=document.createElement('li');
      oLi.style.height=arr[i]*2+'px';
      oLi.innerHTML='';
      oUl.appendChild(oLi);
  }

  }
  }

function renderAddR(){
  var num=document.getElementById('input').value;
  arr.push(num);
  var oUl=document.getElementById('ul');
  oUl.innerHTML="";
  //渲染数据
  for(var i=0;i<arr.length;i++){
    var oLi=document.createElement('li');
    oLi.style.height=arr[i]*2+'px';
    oLi.innerHTML='';
    oUl.appendChild(oLi);
  }
}

function renderDeleteLeft(){
  arr.shift();
  var oUl=document.getElementById('ul');
  oUl.innerHTML="";
  //渲染数据
  for(var i=0;i<arr.length;i++){
    var oLi=document.createElement('li');
    oLi.style.height=arr[i]*2+'px';
    oLi.innerHTML='';
    oUl.appendChild(oLi);
  }
}

function renderDeleteRight(){
  arr.pop();
  var oUl=document.getElementById('ul');
  oUl.innerHTML="";
  //渲染数据
  for(var i=0;i<arr.length;i++){
    var oLi=document.createElement('li');
    oLi.style.height=arr[i]*2+'px';
    oLi.innerHTML='';
    oUl.appendChild(oLi);
  }
}



