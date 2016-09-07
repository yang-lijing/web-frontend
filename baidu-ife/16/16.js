/**
 * Created by yangbaobao on 16/8/12.
 */
/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};
//匹配城市中英文字符;空气质量指数必须为整数

//用HTML中onblur="validate(this,document.getElementById('tishi1'))",参数:(指针所在,span节点)
function validate(inputField,helptext) {
  //通过this所属的id来区分对城市名称还是对空气质量指数匹配
  var id = inputField.getAttribute('id');
  switch (id) {
    case 'aqi-city-input':
      //匹配中英文字符
      if (!(/^[A-Za-z\u4E00-\u9FA5]+$/.test(inputField.value))) {
        //使document.getElementById('tishi1')节点的innerHTML赋值
        helptext.innerHTML = "请输入中英文";
        return false;
      }
      helptext.innerHTML = '';
      return true;

    case'aqi-value-input':
      if (!(/^\d+$/.test(inputField.value))) {
        helptext.innerHTML = "请输入数字";
        return false;
      }
      helptext.innerHTML = '';
      return true;
  }
}

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */

function addAqiData() {
  var city=document.getElementById('aqi-city-input');
  var value=document.getElementById('aqi-value-input');
  if(validate(city,document.getElementById('tishi1'))&&validate(value,document.getElementById('tishi2'))){
    aqiData[city.value]=value.value;
  }
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
  var item="<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
for(var city in aqiData){
  item+= "<tr><td>"+city+"</td><td>"+aqiData[city]+"</td><td><button onclick='delBtnHandle(this)'>删除</button></td></tr>"
}
document.getElementById('aqi-table').innerHTML=item;
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(btn) {
  // do sth.
  //删除aqiData对象中的city
  var city = btn.parentNode.parentNode.getElementsByTagName('td')[0].innerHTML;
delete aqiData[city];
  renderAqiList();
}

function init() {

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
  document.getElementById('add-btn').onclick=addBtnHandle;
  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数

}

init();