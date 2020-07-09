$.getJSON('http://localhost/xmproduct/dist/libs/json/index.json', (data) => {
    // console.log(1);
    for (let i = 0; i < data.length; i++) {
        console.log(data.length);
        if (data[i].type === 'xmsg') {
            let Blist = data[i].mesage;
            // console.log(Blist[0]);

            let div = document.createElement('div');
            div.className = 'sgRight';
            // 拿到大盒子
            // 定义一个空字符串
            let str = '';
            for (let j = 0; j < Blist.length; j++) {
                // console.log(Blist.img[j]);
                str += `
                <div class="Air">
                    <a href=""><img src="${Blist[j].img}" alt=""></a>
                    <p>${Blist[j].name}</p>
                    <span>${Blist[j].introduce}</span>
                    <span class="a1">${Blist[j].price}</span>
                 </div>
                `
                // 空字符串+=··
            }
            // 循环结束后 插入大河字
            div.innerHTML = str;
            $('.ximSg .ximSgmin').append(div);

        } else if (data[i].type === 'phone') {
            let msg = data[i].mes;
            // console.log(msg);

            let div = document.createElement('div');
            div.className = 'mbRight';

            let str = '';
            for (let j = 0; j < msg.length; j++) {
                // console.log(msg.length);
                str += `
                <div class="mbTx">
                    <a href=""><img src="${msg[j].img}" alt=""></a>
                    <p>${msg[j].name}</p>
                    <h5>${msg[j].introduce}</h5>
                    <span>${msg[j].price}</span>
                </div>
                `
                
                // 空字符串+=··
            }
            // console.log(str);
            // 循环结束后 插入大河字
            div.innerHTML = str;
            $('.mbCen').append(div);
        }else if(data[i].type === 'Tv'){
            let mess = data[i].mess;
            // console.log(mess);

            let div = document.createElement('div');
            div.className = 'tvRight';
            // 拿到大盒子
            // 定义一个空字符串
            let str = '';
            for (let j = 0; j < mess.length; j++) {
                // console.log(mess.img[j]);
                str += `
                <div class="Air">
                    <a href=""><img src="${mess[j].img}" alt=""></a>
                    <p>${mess[j].name}</p>
                    <span>${mess[j].introduce}</span>
                    <span class="a1">${mess[j].price}</span>
                 </div>
                `
                // 空字符串+=··
            }
            // 循环结束后 插入大河字
            div.innerHTML = str;
            $('.pic').append(div);
        }
    }
})
