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

            let str = `{
                "src":"http://localhost/xmproduct/dist/img/gdImg/dl-fdj1.jpg",
                "name":"${$(".MagRight h3").html()}",
                "price":"${$(".MagRight h4").html()}",
                "num": 1
            }`;
            str = JSON.parse(str);
            // console.log(str.num);
            if (!localStorage.data) {
                localStorage.data = "[]";
            }
            var data = localStorage.data;
            data = JSON.parse(data);
            //判断是否已经有了该数据
            var index = 0;
            for (var j = 0; j < data.length; j++) {
                console.log(1);
                console.log(data.length);
                if (data[j].order == str.order) {
                    // console.log(data[j].num);
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
            // console.log($('#buy span').html());
            shopcart('#buy span');
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
        // console.log(data[i].num);
        sum += parseInt(data[i].num);
    }
    $(e).html(sum);

}
// shopcart()

