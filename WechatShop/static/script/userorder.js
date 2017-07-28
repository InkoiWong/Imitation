//userorder.html
//删除按钮
$(".order_action_cancel").on("click",function(){
    $(this).parents(".order_form").remove();
    if($(".order_form").length<1){
        $(".null_order").show();
    }
})