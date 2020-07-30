define(["jquery","jquery-cookie"], function ($){
    function goodscar() {
        $.ajax({
            url:"./data/product.json",
            success: function (arr) {
                // console.log(arr);
                var cookieStr = $.cookie("goodslist");
                if(cookieStr){
                    var cookieArr = JSON.parse(cookieStr);
                    var newArr = [];
                    for(var i = 0; i < arr.length; i++){
                        for(var j = 0; j < cookieArr.length; j++){
                            if(arr[i].id == cookieArr[j].id){
                                arr[i].num = cookieArr[j].num;
                                newArr.push(arr[i]);
                                break;
                            }
                        }
                    }
                    // console.log(newArr);
                    for(var k = 0; k < newArr.length; k++){
                        $(` <li id = "${newArr[k].id}">
                        <input class = "ck" type="checkbox">
                        <img src="${newArr[k].img}" alt="">
                        <h2>${newArr[k].title}</h2>
                        <span>RMB：${newArr[k].price}</span>
                        <button class = "removeBtn">删除</button>
                        <button>购买</button>
                        <div class="btns">
                            <button class = "add">+</button>
                            <div class="car_num">数量：${newArr[k].num}</div>
                            <button class = "sub">-</button>
                        </div>
                    </li>    `).appendTo($(".carlist").find("ul"));
                    }
                }
            },
            error: function (msg) {
                console.log(msg)
            }
        })
    }
    //计算购物车总数
    function car_num() {
        var cookieStr = $.cookie("goodslist");
        if(!cookieStr){
            $(".top .car_num").html(0);
        }else{
            var cookieArr = JSON.parse(cookieStr);
            var sum = 0;
            for(var i = 0; i < cookieArr.length; i++){
                sum += cookieArr[i].num;
            }
            $(".top .car_num").html(sum);
        }
    }
    //删除按钮
    function removeBtnClick() {
        $(".carlist").on("click", ".removeBtn", function () {
            var id = $(this).closest("li").remove().attr("id");
            // console.log(id);
            var cookieArr = JSON.parse($.cookie("goodslist"));
            cookieArr = cookieArr.filter((item) => item.id != id);

            cookieArr.length
            ? $.cookie("goodslist", JSON.stringify(cookieArr), { expires: 7 })
            : $.cookie("goodslist", null);
            car_num();
        })
    }
    //清空购物车
    function clearGoodscarBtn() {
        $(".clearGoodscar").click (function () {
            $.cookie("goodslist", null);
            $(".carlist ul").empty();
            car_num();
        });
    }
    //加减按钮
    function addsubClickBtn() {
        $(".carlist").on("click",".btns button", function () {
            var id = $(this).closest("li").attr("id");
        //找到cookie中的商品
        var cookieArr = JSON.parse($.cookie("goodslist"));
        // console.log(cookieArr);
        var res = cookieArr.find((item) => item.id == id);
        if (this.innerHTML == "+") {
            res.num++;
        }else{
            res.num == 1 ? alert("数量为1，不能减少") : res.num--;
        }
        $(this).siblings(".car_num").html(`数量：${res.num}`);
        $.cookie("goodslist", JSON.stringify(cookieArr), {
            expires: 7,
        });

        car_num();
        })
    }
    //全选按钮
    function allCheckBtn () {
        var oAll = document.getElementById("allcheck");
        var oOne = $(".carlist .ck");
        oAll.onclick = function () {
            oOne.checked = true;
        }
        
    }
    return {
        goodscar:goodscar,
        removeBtnClick:removeBtnClick,
        clearGoodscarBtn:clearGoodscarBtn,
        addsubClickBtn:addsubClickBtn,
        allCheckBtn:allCheckBtn,
        car_num:car_num
    }
})