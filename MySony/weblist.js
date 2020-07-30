define(["jquery"], function ($) {
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
    return{
        webload:webload
    }
})