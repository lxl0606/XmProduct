$.getJSON('http://localhost/xmproduct/dist/libs/json/detail.json', (data) => {
    
    for (let i = 0; i < data.length; i++) {
        // console.log(data.length);
        if (data[i].type === 'phoneList') {
            let Blist = data[i].mesage;
            // console.log(Blist.length)

            let div = document.createElement('div');
            div.className = 'cPhone';

            let str = '';
            for (let j = 0; j < Blist.length; j++) {
                // console.log(Blist[j].img)
                str += `
                    <div class="tPhone">
                        <a href=""><img src="${Blist[j].img}" alt=""></a>
                        <div class="txt">
                            <h2>${Blist[j].name}</h2>
                            <p>${Blist[j].introduce}</p>
                            <span>${Blist[j].price}</span>
                            <a href="detail.html"><div class="buy">立即购买</div></a>
                        </div>
                    </div>
                `
            }
            // console.log(str);
            // 循环结束后 插入大河字
            div.innerHTML = str;
            // console.log(div);
            $('.phone').append(div);

        }else if(data[i].type === 'phoneList2'){
            let Dlist = data[i].mes;
            // console.log(Dlist)

            let div = document.createElement('div');
            div.className = 'CCPhone';

            let str = '';
            for (let j = 0; j < Dlist.length; j++) {
                // console.log(Blist[j].img)
                str += `
                <div class="TTPhone">
                    <a href=""><img src="${Dlist[j].img}" alt=""></a>
                    <div class="TTxt">
                        <h2>${Dlist[j].name}</h2>
                        <p>${Dlist[j].introduce}</p>
                        <span>${Dlist[j].price}</span>
                        <div class="Tbuy">立即购买</div>
                    </div>
                </div>
                `
            }
            div.innerHTML = str;
            $('.PPhone').append(div);

        }else if(data[i].type === 'phoneList3'){
            let Plist = data[i].mess;
            // console.log(Plist)

            let div = document.createElement('div');
            div.className = 'oPhone';

            let str = '';
            for (let j = 0; j < Plist.length; j++) {
                // console.log(Blist[j].img)
                str += `
                <div class="t_Phone">
                    <a href=""><img src="${Plist[j].img}" alt=""></a>
                    <div class="left">
                        <p>${Plist[j].name}</p>
                        <span>${Plist[j].introduce}</span>
                    </div>
                    <div class="right">
                        <span>${Plist[j].price}</span>
                        <p>立即购买</p>
                    </div>
                </div>
                `
            }
            div.innerHTML = str;
            $('.Phone3').append(div);
        }else if(data[i].type === 'phoneList4'){
            let Llist = data[i].mess2;
            // console.log(Llist)

            let div = document.createElement('div');
            div.className = 'fphone';

            let str = '';
            for (let j = 0; j < Llist.length; j++) {
                // console.log(Blist[j].img)
                str += `
                <div class="la_Phone">
                    <a href=""><img src="${Llist[j].img}" alt=""></a>
                    <div class="txt1">
                        <h2>${Llist[j].name}</h2>
                        <p>${Llist[j].introduce}</p>
                        <span>${Llist[j].price}</span>
                        <div class="buy">立即购买</div>
                    </div>
                </div>
                `
            }
            div.innerHTML = str;
            $('body').append(div);
        }
    }
    
})

