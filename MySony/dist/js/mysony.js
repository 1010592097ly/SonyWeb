define(["jquery"], function ($) {
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
    return{
        mysonyload:mysonyload
    }
})