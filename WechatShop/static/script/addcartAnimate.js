//点击加入购物车按钮后，产生动画效果
function addcartAnimate(e){
    e.stopPropagation(); //首先阻止冒泡，虽然仅仅是加入购物车是没有必要，可是现学现用一下
    var number = Number($("#cartnumbers").val()); //点击按钮时，所选择购买的数量
    var productimg = $("#productimg"), 
        imgsrc = $("#productimg").children("img").attr("src"), //获取当前产品图片的src
        x = productimg.offset().left + 30, //
        y = productimg.offset().top - 10, //创建的flydiv所开始的位置，总的来说就是相对原来位置偏右30 偏上10
        X = $("#n_1").offset().left, //
        Y = $("#n_1").offset().top; //flydiv的终点位置为nav的购物车图标的左上角位置
    var deltaX = ($("#n_2").offset().left - $("#n_1").offset().left)/2 - 60/2; //使得居中，要降落在图标实际位置，需要加上deltaX
//      deltaY;
    if ($('#flydiv').length <= 0) { //创建一个用于fly动画的div
        $('body').append('<div id="flydiv"><img src="'+imgsrc+'" width="50" height="50" /></div');
    };
    var $obj=$('#flydiv');
    if(!$obj.is(':animated')){ //制作animate动画
        $obj.css({'left': x,'top': y}).animate({'left': X + deltaX,'top': Y-80},500,function() { // 
            $obj.stop(false, false).animate({'top': Y-20,'opacity':0},500,function(){ //飞行路径
                $obj.fadeOut(300,function(){ //到达后消失
                    $obj.remove();  
                    var num = Number($(".cartnums").text());
                    $(".cartnums").text(num+number);
                    $(".cartnums").show(); //显示购买数量
                });
            });
        }); 
    };
}
$(".addcart").on("click",addcartAnimate);
