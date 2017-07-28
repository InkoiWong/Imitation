//滑动加载产品li
function slidingLoad(){
	var ajaxstatus = true;
    var pagesize = 5;
    var currentpage;
	function insertDiv(json) {
	    var $mainDiv = $("#scrollAdd");
	    var html = '';
	    var showlength = 5; //每次只显示5条
	    if(json.length < 5){ //如果后端的数据少于5条
	        showlength = json.length;
	    }
	
	    for (var i = 0; i < showlength; i++) {              
	        html += 						//这里只是自己写的假数据
	        '<li><a href="info.html">'+ 
	            '<div class="triangle-topleft"></div>'+
	            '<span class="shuxing" data_url="productinfo.html">专属</span>'+
	            '<div class="leftimages fl"><canvas data-src="images/product/product1.png" ></canvas></div>'+
	            '<div class="productcontent fr">'+
	                '<p class="ptitle pl10">广联达变更算量</p>'+
	                '<p class="pdes pl10">简介这里简介这里简介这里简介这里简介这里简介这里简介这里简介介这里简介</p>'+
	                '<p class="pprice pl10">价格：<span class="green">￥5000</span></p>'+
	            '</div></a>'+
	        '</li>';
	    }
	    $mainDiv.append(html); //加到ul里面去
	}
	function getData(pagenumber) {
		ajaxstatus = true;
	    pagesize = 5;
	    $.ajax({
	        type: "get",
	        url: "/WechatShop/static/data/test.json",
	        data: {
	            page: pagenumber, //pagenumber第几页
	            row: pagesize, //pagesize拖动一下显示5条
	        },
	        dataType: "json",
	        success: function (result) {
	            $(".loaddiv").hide();
	            if (result.length > 0) {
	                ajaxstatus=true;
	                insertDiv(result);
	                loadCanvas();
	            }else {
	                $("#pagenumlength").val("0");
	                // alert('暂无数据');
	            }
	        },
	        beforeSend: function () {
	            //console.dir(323);
	            $(".loaddiv").show();
	        },
	        error: function () {
	            $(".loaddiv").hide();
	        }
	    });
	}
	function scrollHandler(){
		var pageH = $(document).height(); //整个网页的高度
	    var scrollT = $(window).scrollTop(); //浏览器可视窗口顶端距离网页顶端的高度（垂直偏移） --已经滚动的距离
	    var winH=$(window).height(); //浏览器可视窗口的高度
	   	if (parseInt(scrollT)+parseInt(winH)+50>=parseInt(pageH) && ajaxstatus/*防止多次执行的状态的判断*/) {
	    	if($("#pagenumlength").val()=="1"){
	        	ajaxstatus = false;
	        	currentpage++;
	            getData(currentpage)
	        }else{
	            return
	        }
	    }
	}
	scrollHandler();
}
$(window).scroll(slidingLoad);
$("#productul").on("touchmove", slidingLoad);