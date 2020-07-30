define(['jquery'], function($) {
    function goodsload() {
        $.ajax({
            url:"./data/goods_list.json",
            success: function (arr) {
                console.log(arr);
                for(var i = 0; i < arr.length; i++){
                    $(`<li>
                    <img src="${arr[i].img}" alt="">
                    <h4><a href="">${arr[i].title}</a></h4>
                    <div class="word">
                        <span>RMB</span>
                        <span class="price">${arr[i].price}</span>
                    </div>
                </li>`).appendTo($(".right_list"));
                }
            },
            error: function (msg){
                console.log(msg);
            }
        })
    }
    return{
        goodsload:goodsload
    }
});