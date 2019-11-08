

$.getJSON("data/dataJson.json", function (res) {
    //console.log(1);

    var str = "";
    //var aname = decodeURIComponent(location.search).substr(1).split("&")[0];

    $.each(res, function (index, ele) {
        //console.log(index,ele);
        //console.log(ele.kid);
        if(ele.aid == "ad"){
            str += `<li id="ad"></li>`;
        }else{

        str += `
                <li>
                    <div class="goods_pic">
                        <a href='javascript:;' id=${ele.aid}>
                            <img data-src='${ele.asrc}' id='listImg'>
                        </a>
                    </div>
                    <div class="goods_name">
                        <em>${ele.atitle}</em>
                        <i class="icon_sx"></i>
                        <br>
                        <span class="text-tag">${ele.afeature}</span>
                    </div>
                    <div class="goods_price">
                        <div class="price"><em>${ele.aprice}</em>/个</div>
                        <a class="buy-cart">加入购物车 ></a>
                    </div>
                </li>
            `;
        }
        
        $(".lists_div>ul").html(str);
    });
    go(); 

});

function go() {
    function offset(obj) {
        var l = 0;
        var t = 0;
        var bdl = obj.clientLeft;//目标元素的左边框宽度
        var bdt = obj.clientTop;//目标元素的上边框宽度
        while (obj) {//循环累加目标元素到定位父级的距离
            l = l + obj.offsetLeft + obj.clientLeft;
            t = t + obj.offsetTop + obj.clientTop;
            obj = obj.offsetParent;//每次循环之后指向离他最近的定位父级
        }
        return { left: l - bdl, top: t - bdt };
    }

    var imgs = document.querySelectorAll('.goods_pic img');
    //console.log(imgs);

    function load() {
        var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
        var windowH = document.documentElement.clientHeight || document.body.clientHeight;

        for (var i = 0, len = imgs.length; i < len; i++) {
            if (offset(imgs[i]).top <= (scrollT + windowH)) {
                imgs[i].src = imgs[i].getAttribute('data-src');
            }
        }
    }
    load();

    window.onscroll = function () {
        load();
    }
};






