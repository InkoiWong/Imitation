//address.html个人中心收货地址增删改
function addressRewrite(){
    var name=$(this).parents("li").find(".name").text();
    var phone=$(this).parents("li").find(".phone").text();
    var allAddress=$(this).parents("li").find(".all-address").html();//获取到整个地址信息
    var addressArray=allAddress.split("&nbsp;");//用split通过空格&nbsp;分开成数组使用
    var s1=addressArray[0];
    var s2=addressArray[1];
    var s3=addressArray[2];
    var addressinfo=addressArray[3];
    $("#consignee").val(name);
    $("#s1").val(s1);
    $("#s1").trigger("change");//调用trigger出发change事件，因为在diqu的三级联动里面定义的是onchange事件
    $("#s2").val(s2);
    $("#s2").trigger("change");//同上
    $("#s3").val(s3);
    $("#address").val(addressinfo);
    $("#phone_mob").val(phone);
}
function addAddresslist(){
    var name=$("#consignee").val();
    var phone=$("#phone_mob").val();
    var s1=$("#s1").val();
    var s2=$("#s2").val();
    var s3=$("#s3").val();
    var address=$("#address").val();
    var addressliHtml=
    	'<li>'+
            '<p><em class="name">'+name+'</em>(<em class="phone">'+phone+'</em>)</p>'+
            '<p class="all-address">'+s1+'&nbsp;'+s2+'&nbsp;'+s3+'&nbsp;'+address+'</p>'+
            '<p class="new_line"><br></p>'+
            '<p class="address_action">'+
                '<span class="edit"><a href="#"><i class="edit_icon"></i>编辑</a></span>'+
                '<span><a href="#" class="delete float_none"><i class="delete_icon"></i>删除</a></span>'+
            '</p>'+
        '</li>';
    if($.trim(name)!="" && $.trim(phone)!="" && $.trim(s1)!="" && $.trim(address)!=""){//触发后增加清空事件，防止多次增加
        $("#addresslist").append(addressliHtml);
        clearAddress(); 
    }
}
function clearAddress(){
    $("#consignee").val("");
    $("#phone_mob").val("");
    $("#s1").val("");
    $("#s2").val("");
    $("#s3").val("");
    $("#address").val("");
}


$("#addresslist").on("click",".delete",function(){ //直接通过#addresslist监听.delete的onclick事件，找到其父li直接删除
    $(this).parents("li").remove();
    //通常还要调用ajax把后台数据删除
});
$("#addresslist").on("click",".edit",addressRewrite); //通过#addresslist监听.edit的onclick事件，添加新的address
	//这个编辑也要调ajax
$(".submit_address").on("click",addAddresslist);
	//保存也要调ajax