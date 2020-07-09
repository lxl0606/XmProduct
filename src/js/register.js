class Registor {
    constructor() {
        this.uname = this.$('#phone');
        // console.log(this.uname);
        this.upwd = this.$('#pas');
        this.res = this.$('#res');
        this.sus = this.$('#success');
        this.sus2 = this.$('#suc');
        this.addEvent();
    }
    addEvent() {
        // this.res.onclick = function () {
        //     location.href = 'login.html';
        // }
        //用户名检测
        let that = this;
        this.uname.onblur = function() {
            // console.log(this);
            let re = /^\d{11}$/;
            let str = that.uname.value;
            if (re.test(str)) {
                that.sus.innerHTML = '输入符合要求~';
            } else {
                that.sus.innerHTML = "! 请输入11位的手机号";
                that.uname.value = '';
            }
        }
        //密码检测
        this.upwd.onblur = function(){
            let reg = /^[\w\-]{6,12}$/;
            let str = that.upwd.value;
            if (reg.test(str)) {
                that.sus2.innerHTML = '输入符合要求~';
            } else {
                that.sus2.innerHTML = "! !  请输入6~12位，包含字母，数字,_ 这类特殊字符";
                that.upwd.value = '';
            }
        }

        //注册按钮
        this.res.onclick = () => {
            if (!this.uname.value || !this.upwd.value) {
                alert('信息不能为空');
                return;
            }
            //获取用户、密码
            let uname = this.uname.value;
            console.log(uname);
            let upwd = this.upwd.value;
            console.log(upwd);

            let cookieStr = $getCookie('registors') ? $getCookie('registors') : '';
            let cookieObj = convert(cookieStr);
            if (uname in cookieObj) {
                //存在
                alert('用户名已存在！');
                return;
            } else {
                cookieObj[uname] = upwd;
            }
            //存入cookie
            $cookie('registors', JSON.stringify(cookieObj), {
                expires: 7,
                path: '/'
            })
            this.uname.value = this.upwd.value =  '';
            location.href = 'login.html';
            alert('注册成功');
        }
    }
    $(selector) {
        return document.querySelector(selector);
    }
}

function convert(str){
    if(!str){
        return {};
    }else{
        return JSON.parse(str);
    }
}

window.onload = function () {
    new Registor();
}
