define(["jquery"], function ($) {
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
    return {
        serveload: serveload
    }
})