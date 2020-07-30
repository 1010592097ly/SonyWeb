console.log("加载成功");
require.config({
    paths: {
      jquery: "jquery-1.11.3",
      "jquery-cookie": "jquery.cookie",
      goodscar:"goodscar",

    },
    shim: {
      //设置依赖关系
      "jquery-cookie": ["jquery"]
    },
});
require(["goodscar"], function (goodscar) {
    goodscar.goodscar();
    goodscar.removeBtnClick();
    goodscar.clearGoodscarBtn();
    goodscar.addsubClickBtn();
    goodscar.allCheckBtn();
    goodscar.car_num();
})