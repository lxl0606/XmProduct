class Product {
    constructor() {
        this.buy = document.getElementById('buy');
        // console.log(this.buy);
        this.addToCart = document.querySelector('.car');
        // console.log(this.addToCart);
        this.addEvent();
    }
    addEvent() {
        let that = this;
        this.buy.onclick = function () {
            location.href = 'cart.html';
        }
        //购买按钮
        this.addToCart.onclick = function () {
            // let str = that.buy.value;
            // let re = /(\d+)/;
            // let num = Number(re.exec(str)[1]);
            // num++;
            // that.buy.value = `购物车(${num})`;

            var str = `{
                "src":"http://localhost/xmproduct/dist/img/gdImg/dl-fdj1.jpg",
                "name":"${$(".MagRight h3").html()}",
                "price":"${$(".MagRight h4").html()}",
                "num":"1"
            }`;
            console.log(str);
            str = JSON.parse(str);
            if (!localStorage.data) {
                localStorage.data = "[]";
            }
            var data = localStorage.data;
            data = JSON.parse(data);
            //判断是否已经有了该数据
            var index = 0;
            for (var j = 0; j < data.length; j++) {
                if (data[j].order == str.order) {
                    data[j].num = parseInt(str.num) + parseInt(data[j].num);
                    index = 1;
                    data = JSON.stringify(data);
                    localStorage.data = data;
                }
            }
            if (index == 0) {
                data.push(str);
                data = JSON.stringify(data);
                localStorage.data = data;
            }

            shopcart(that.buy.value);
        }
    }
}

window.onload = function () {
    new Product();
}

function shopcart(e) {
    var data = localStorage.data;
    data = JSON.parse(data);
    var sum = 0;
    for (var i = 0; i < data.length; i++) {
        sum += parseInt(data[i].num);
    }
    $(e).html("购物车(" + sum + ")");
}
