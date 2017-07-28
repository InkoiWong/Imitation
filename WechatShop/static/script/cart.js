//购物车页面
//删除按钮

$(".delbtn").on("click",function(){
    $(this).parents("li").remove();
    if($(".cartlist").children("li").length<1){
        $(".cartlist").hide();
        $(".onthebottom").hide();
        $(".null_shopping").show();
    }
})
$(".clearcart").on("click",function(){
    $(".cartlist").find("li").each(function(){
        $(this).remove()
    });
//  $(".cartlist").hide();
//  $(".onthebottom").hide();
    $(".null_shopping").show();
})

