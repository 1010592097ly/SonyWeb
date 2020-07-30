define(["jquery","jquery-cookie"], function ($) {
    function productload() {
        $.ajax({
            url:'./data/product.json',
            success: function (arr) {
                $(`<span>搜索结果,一共搜索到${arr.length}件商品</span>`)
                .appendTo($(".goodsNum"))
                for(var i = 0; i < arr.length; i++){
                $(` <li>
                        <img src="${arr[i].img}" alt="">
                        <h4>${arr[i].title}</h4>
                        <span>RMB</span>
                        <span class="num">${arr[i].price}</span>
                        <span><a id = "${arr[i].id}" class = "lookgoods" href = "./detail.html">点击查看详情</a></span>
                    </li>`)
                .appendTo($(".list").find("ul"));
                }
            },
            error: function (msg) {
                console.log(msg)
            }
        })
    }
    function lookgoodsClick() {
        $(".list").on("click",".lookgoods", function () {
            var id = this.id;
            var arr = [{id:id}];
            $.cookie("goods",JSON.stringify(arr),{expires:7});
        })
    }
    function main() {
        $("#goods").mouseenter(function () {
            $("#goods_list").show();
        }).mouseleave(function () {
            $("#goods_list").hide();
        })  
    }
    function download() {
        $.ajax({
            url:"./data/index.json",
            success: function (arr){
                console.log(arr);
                for(var i = 0; i < arr.length; i++){
                    var node = $(` <span><a href="">${arr[i].title}  ▼</a>&nbsp;&nbsp;&nbsp;|</span>
                    <div class="goods_list" id="goods_list">
                        <div class="list">
                            <div class="left"> 
                            </div>
                            <div class="center">
                                <ul class="center_list">
                                </ul>
                            </div>
                            <div class="right">
                            </div>
                        </div>
                    </div>`).appendTo($("#goods"));
                    var subTitles = arr[i].subTitles;
                    console.log(subTitles)
                    for(var j = 0; j < subTitles.length; j++){
                        $(`<span>${subTitles[j]}</span>`).appendTo(node.find(".left"));
                    }
                    var hots = arr[i].hots;
                    console.log(hots);
                    for(var k = 0; k < hots.length; k++){
                        $(`
                        <li>
                            <img src="${hots[k].img}" alt="">
                            <h5>${hots[k].title}</h5>
                            <span>${hots[k].name}</span>
                        </li>
                        `).appendTo(node.find(".center_list"));
                    }
                }
            },
            error: function (msg) {
                console.log(msg);
            }
        })
    }
    function webload() {
        $.ajax({
            url:"./data/weblist.json",
            success: function (arr) {
                console.log(arr);
                for(var i = 0; i < arr.length; i++){
                        $(`<li>${arr[i].title}</li>`)
                        .appendTo($(".weblist1"));
                    }
            },
            error: function (arr){
                console.log(arr);
            }
        })
    }
    function serveload () {
        $.ajax({
            url: "./data/serve.json",
            success: function (arr) {
                console.log(arr);
                for(var i = 0; i < arr.length; i++){
                    $(`<span><a href="">${arr[i].title}</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</span>`)
                    .appendTo($(".serve"));

                    var subTitles = arr[i].subTitles;
                    console.log(subTitles);
                    for(var j = 0; j < subTitles.length; j++){
                        $(`<li>${subTitles[j]}</li>`)
                        .appendTo($(".serve_list").find("ol"));
                    }
                }
            },
            error: function (msg) {
                console.log(msg);
            }
        })
    }
    function mysonyload () {
        $.ajax({
            url:'./data/mysony.json',
            success: function (arr) {
                console.log(arr);
                for(var i = 0; i < arr.length; i++){
                    var node = $(`
                    <span> <a href="">${arr[i].title}</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</span>
                    `).appendTo($(".mysony"));

                    var subTitles = arr[i].subTitles;
                    console.log(subTitles);
                    for(var j = 0; j < subTitles.length; j++){
                        $(`<li>${subTitles[j]}</li>
                    `).appendTo($(".mysony_list").find("ul"));
                    }
                }
            },
            error: function(msg) {
                console.log(msg);
            }
        })
    }
    return {
        productload : productload,
        lookgoodsClick:lookgoodsClick,
        main:main,
        download:download,
        webload:webload,
        serveload:serveload,
        mysonyload:mysonyload

    }
})