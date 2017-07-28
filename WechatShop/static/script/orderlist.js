//订单页面交互orderlist.html
//新建收货地址
$('input[name=address_options]').change(function(){
    if($(this).val()==0){
        $('#address_form').show();
    }else{
        $('#address_form').hide();
    }
});
function setaddress(){
    var addr_id = $("input[name='address_options']:checked").val();
    if(addr_id == 0){
            $('#address_form').show();
    }else{
            $('#address_form').hide();
    }
}
setaddress();
$(".address_item").on("click",function(){
    $(this).children().eq(0).children().eq(0).attr('checked','checked')
    setaddress();
});
        
//开发票
$(".ifvoicenot").on("click",function(){
    $(this).parent().next().toggle();
});

//地区三级联动
if($("select[name='sheng']").length>0){
    new PCAS("sheng","shi","qu","","","");
}