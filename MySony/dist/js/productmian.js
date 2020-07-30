console.log("加载成功");
require.config({
    paths:{
        jquery:"jquery-1.11.3",
        "jquery-cookie": "jquery.cookie",
        product:"product",

    },
    shim: {
        //设置依赖关系
        "jquery-cookie": ["jquery"],
      },
})
require(["product"], function (product) {
    product.productload();
    product.lookgoodsClick();
    product.download();
    product.main();
    product.webload();
    product.serveload();
    product.mysonyload();

})