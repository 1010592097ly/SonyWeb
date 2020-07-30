define(["jquery"], function ($) {
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
    return {
        main : main,
        download:download
    }
})