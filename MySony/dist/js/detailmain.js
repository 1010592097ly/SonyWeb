console.log("加载成功");
require.config({
    paths:{
        jquery:"jquery-1.11.3",
        "jquery-cookie": "jquery.cookie",
        detail:"detail",
    },
    shim: {
        //设置依赖关系
        "jquery-cookie": ["jquery"],
        //某一个模块，不遵从AMD
        parabola: {
          exports: "_",
        },
      },
})
require(["detail"], function(detail){
    detail.detailload();
    detail.magnifying();
    detail.addGoods_carsClick();
})