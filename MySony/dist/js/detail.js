define(["jquery","jquery-cookie"], function($) {
    function detailload() {
        $.ajax({
            url:'./data/product.json',
            success: function (arr){
                console.log(arr);
                var cookieStr = $.cookie("goods");
                if(cookieStr){
                    var cookieArr = JSON.parse(cookieStr);
                    var newArr = [];
                    for(var i = 0; i < arr.length; i++){
                        for(var j = 0; j < cookieArr.length; j++){
                            if(arr[i].id == cookieArr[j].id){
                                newArr.push(arr[i]);
                                break;
                            }
                        }
                    }
                    console.log(newArr)
                    for(var k = 0; k < newArr.length; k++){
                    $(`<h2>商  品  名  称  : ${newArr[k].title}</h2>`)
                    .appendTo($(".name"));

                    $(`
                    <div class="small">
                    <img src="${newArr[k].img}" alt="">
                    <div class="mark"></div>
                    </div>
                    <div class="big">
                    <img src="${newArr[k].img}" alt="">
                    </div>
                    `).appendTo($(".goods"));

                    $(`
                    <div class="top">
                    <h2>${newArr[k].title}</h2>
                    <span>${newArr[k].name}</span>
                    <span>${newArr[k].price}</span>
                    </div>
                    <div class="center">
                    <span>规格:  ${newArr[k].specification}</span>
                    <span>颜色:  ${newArr[k].color}</span>
                    </div>
                    <div class="footer">
                        <button class="btn1" id = "${newArr[k].id}">🛒  加入购物车</button>
                        <button class="btn2">💖  加入心愿单</button>
                    </div>
                    `).appendTo($(".word"))
                }
                }
            },
            error: function (msg) {
                console.log(msg)
            }
        })
    }
    //事件委托实现放大镜效果
    function magnifying() {
        $(".goods").on("mouseenter",".small", function () {
            $(".big").css("display","block");
            $(".mark").css("display","block");
        }).on("mouseleave",".small", function () {
            $(".big").css("display","none");
            $(".mark").css("display","none");
        }).on("mousemove", ".small", function (e) {
            var l = e.clientX - $(this).offset().left - 100;
            var t = e.clientY - $(this).offset().top - 100;
            if(l <= 0) l = 0;
            if(l >= $(".small").outerWidth() - $(".mark").outerWidth()){
                l = $(".small").outerWidth() - $(".mark").outerWidth();
            }
            if(t <= 0) t = 0;
            if(t >= $(".small").outerHeight() - $(".mark").outerHeight()){
                t = $(".small").outerHeight() - $(".mark").outerHeight();
            }
            $(".mark").css("left", l);
            $(".mark").css("top", t);
            //大图移动
            $(".big img").css("left", -2 * l)
            $(".big img").css("top", -2 * t);
        })
    }
    function addGoods_carsClick() {
        $(".word").on("click", ".btn1", function () {
            var id = this.id
            console.log(id);
            alert("成功加入购物车");
            var first = $.cookie('goodslist') == null ? true : false;
            if(first){
                var arr1 = [{id:id, num:1}];
                $.cookie("goodslist", JSON.stringify(arr1),{expires: 7});
            }else{
                var cookieArr = JSON.parse($.cookie("goodslist"));
                var findIndex = cookieArr.findIndex((item) => item.id == id);
                if (findIndex == -1) {
                var obj = { id: id, num: 1 };
                cookieArr.push(obj);
                } else {
                cookieArr[findIndex].num++;
                }
                $.cookie("goodslist", JSON.stringify(cookieArr), { expires: 7 });
            }
        })
    }
    return {
        detailload:detailload,
        magnifying:magnifying,
        addGoods_carsClick:addGoods_carsClick
    }
});