//小计&总价 动态实时计算
//小计
function subtotal(){
	var unitprice = $(this).parents("li").find(".unitprice").html().slice(1);
	//console.log(unitprice);
	var num = $(this).parents("li").find(".itnums").val();
	var subtotal = "￥" + unitprice*num; 
	$(this).parents("li").find(".subtotal").html(subtotal);	
}

$(".reduce").on("click",subtotal);
$(".add").on("click",subtotal);

//总计
function totolamount(){
	var subtotalamount = 0;
	$(".subtotal").each(function(){
		subtotalamount += parseInt($(this).html().slice(1));
	})
	//console.log(subtotalamount);
	$(".totalamount").html("￥" + subtotalamount);
}

$(".reduce").on("click",totolamount);
$(".add").on("click",totolamount);
$(".delbtn").on("click",totolamount);
$(".clearcart").on("click",totolamount);

