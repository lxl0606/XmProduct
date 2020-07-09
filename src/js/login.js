//获取用户名
const oName = document.getElementById("phone2");
//获取密码
const oPwd = document.getElementById("pas2");
//获取登录按钮
const oSub = document.getElementById("log");

//给登录按钮添加事件
oSub.onclick = function () {
    //获取用户名
    let uname = oName.value;
    //获取密码
    let upwd = oPwd.value;
    //判断用户名是否为空
    if (!uname) {
        alert('用户名不能为空！');
        return;
    }
    //获取cookie
    let cookieStr = $getCookie('registors') ? $getCookie('registors') : '';
    //转为对象
    let cookieObj = convert(cookieStr);
    //判断对象中是否有用户名
    if (uname in cookieObj) {
        if (cookieObj[uname] === upwd) {
            alert('登录成功');
            location.href = '../index.html';
            oName.value = '';
            oPwd.value = '';
        } else {
            alert('请确认您的密码是否正确！');
        }
    } else {
        alert('用户名不存在！');
    }
}

//cookie字符串转为cookie对象
function convert(str) {
    if (!str) {
        return {};
    }
    return JSON.parse(str);
}