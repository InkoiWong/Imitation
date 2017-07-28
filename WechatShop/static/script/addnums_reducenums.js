//addnums and reducenums 购买产品数量的增减
function reducenums(){
    var number=parseInt($(this).next().val());
    if(!isNaN(number)){
        if(number<2){
            number=1;
        }else{
            number-=1;
        }
    }else{
        number=1
    }
    $(this).next().val(number);	
}
function addnums(){
	var number=parseInt($(this).prev().val());
    if(!isNaN(number)){
        if(number<1){
            number=1;
        }else{
          number+=1; 
        }
    }else{
        number=1
    }
    $(this).prev().val(number);
}

$(".reduce").on("click",reducenums);
$(".add").on("click",addnums);