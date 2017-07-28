function userlogin(){
    var name=$("#login_userName").val();
    var password=$("#login_Password").val();
    var flag=true;
    if($.trim(name)==""){
    	$("#login_userName").next("s").css({"display":"inline-block"}); 
       flag=false;
       return false;
    }else{
    	var reg=/^1[3|4|5|7|8]\d{9}$/;
        if(reg.test(name)){
            $("#login_userName").next("s").hide(); 
        }else{
           $("#login_userName").next("s").css({"display":"inline-block"}); 
           flag=false;
           return false;
        }
    }
    if($.trim(password)==""){
       $("#login_Password").next("s").css({"display":"inline-block"}); 
           flag=false;
           return false;
    }else{
       $("#login_Password").next("s").hide();  
    }
    if(flag){
        alert("ajax提交登陆");
        //$.ajax({})
    }
}
$("#login_user").on("click",userlogin);