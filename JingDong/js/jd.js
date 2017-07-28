//全局函数部分
function dI(id){
	return document.getElementById(id);
}
function dC(classname){
	return document.getElementsByClassName(classname);
}
function dT(tagname){
	return document.getElementsByTagName(tagname);
}
function dQ(seletor){
	return document.querySelector(seletor);
}
function dQA(seletor){
	return document.querySelectorAll(seletor);
}
//nodelistToArray-把得到的类数组nodelist转换为数组的方法函数
function nodelistToArray(nodelist){
	var arr = []; 
	for(var i=0; i<nodelist.length; i++){ 
		arr.push(nodelist[i]); 
	} 
	return arr; 
}
//removeClass、addClass和toggleClass函数
function hasClass(obj, cls) {  
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));  
}  
function addClass(obj, cls) {  
    if (!this.hasClass(obj, cls)) obj.className += " " + cls;  
}  
function removeClass(obj, cls) {  
    if (hasClass(obj, cls)) {  
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');  
        obj.className = obj.className.replace(reg, ' ');  
    }  
}  
function toggleClass(obj,cls){  
    if(hasClass(obj,cls)){  
        removeClass(obj, cls);  
    }else{  
        addClass(obj, cls);  
    }  
}  
//switchTab切换选项卡
//PS：使用注意
//整体wrap的子元素必须只有用于切换的ul，以及ul后面的兄弟元素必须是与li数量相等的div数量
//html中为ul下的li都加上class.tab_li，为wrap下的div都加上class.tab_item
function switchTab(id){
	var wrap = dI(id);//获得切换选项卡的整体wrap	
	var wrap_childArr = nodelistToArray(wrap.children);//获得wrap的子元素,并转换为可操作的数组形式
	var ul = wrap.querySelector("ul");//获得切换ul
	var lis = ul.querySelectorAll(".tab_li");//获得所有用于切换的ul下的li
	var wrapId = "#" + wrap.id;
	var items = wrap.querySelectorAll(wrapId + ">div.tab_item");//获得所有用于切换的wrap下的div（筛选到子元素层面，不会筛选到后代）
	var activeLi = "";//用于赋当前具有class.active的li元素
	var activeItem = "";//用于赋当前具有class.show的div元素
	for(var i=0; i<lis.length; i++) {
	    lis[i].index = i;
	    lis[i].onmouseover = function() {//给每个li都添加onmouseover事件
	    	for(var j=0; j<lis.length; j++){
	    		if(j!=i&&lis[j].className.match("active")){//找到当前具有class.active的li
			    	toggleClass(lis[j],"active");//把其class.active去掉
			    	toggleClass(this,"active");//给当前li添加class.active
			    	toggleClass(items[j],"hide");//把对应的div的class.hide去掉
	    			toggleClass(items[this.index],"hide");//给当前div添加class.hide
			    }
	    	}
	    }        
	}
}
//jq左拉右卷函数
jQuery.fn.slideRightHide = function( speed, callback ) {  
    this.animate({  
        width : "hide",  
        left : "hide",
        paddingLeft : "hide",  
        paddingRight : "hide",  
        marginLeft : "hide",  
        marginRight : "hide"  
    }, speed, callback );  
};  
jQuery.fn.slideRightShow = function( speed, callback ) {  
    this.animate({  
        width : "show", 
        left : "show",
        paddingLeft : "show",  
        paddingRight : "show",  
        marginLeft : "show",  
        marginRight : "show"  
    }, speed, callback );  
}; 





//header_nav头部导航下拉内容
function navEnter(ele){
	ele.className = "nav_hover relative";
}
function navLeave(ele){
	ele.className = "nav_unhover relative";
}
////header_nav_mycity
//var mycity = dI("mycity");
//var mycitylist = dI("mycityList");
//mycity.onmouseenter = function(){
//	navEnter(mycity);
//	mycitylist.className = "show";
//	mycity.onmouseleave = function(){
//		navLeave(mycity);
//		mycitylist.className = "hide";
//	}
//};
////header_nav_navbar
//var myjd = dI("myjd");
//var myjdlist = dI("myjdList");
//myjd.onmouseenter = function(){
//	navEnter(myjd);
//	myjdlist.className = "show";
//	myjd.onmouseleave = function(){
//		navLeave(myjd);
//		myjdlist.className = "hide";
//	}
//};
//var khfw = dI("khfw");
//var khfwlist = dI("khfwList");
//khfw.onmouseenter = function(){
//	navEnter(khfw);
//	khfwlist.className = "show";
//	khfw.onmouseleave = function(){
//		navLeave(khfw);
//		khfwlist.className = "hide";
//	}
//};
//var wzdh = dI("wzdh");
//var wzdhlist = dI("wzdhList");
//wzdh.onmouseenter = function(){
//	navEnter(wzdh);
//	wzdhlist.className = "show";
//	wzdh.onmouseleave = function(){
//		navLeave(wzdh);
//		wzdhlist.className = "hide";
//	}
//};
//var sjjd = dI("sjjd");
//var sjjdlist = dI("sjjdList");
//sjjd.onmouseenter = function(){
//	sjjdlist.className = "show";
//	sjjd.onmouseleave = function(){
//		navLeave(sjjd);
//		sjjdlist.className = "hide";
//	}
//};

//优化-统一添加事件,减少重复编码
var headerNavArr = [];
headerNavArr[0] = dI("mycity");
headerNavArr[1] = dI("myjd");
headerNavArr[2] = dI("khfw");
headerNavArr[3] = dI("wzdh");
headerNavArr[4] = dI("sjjd");
for(var i=0; i<headerNavArr.length; i++){
	(function(){
		var li = headerNavArr[i];
		var li_idName = headerNavArr[i].id;
		var list = dI(li_idName+"List");
		li.onmouseenter = function(){
			navEnter(li);
			list.className = "show z5";
			li.onmouseleave = function(){
				navLeave(li);
				list.className = "hide";
			}
		}
	})();
}

//header-gouwuche购物车下拉内容
var gouwuche = dI("gouwuche");
var gouwuchelist = dI("gouwucheList");
gouwuche.onmouseenter = function(){
	gouwuche.style.border = "1px solid #cccccc";
	gouwuche.style.borderBottom = "1px solid #fff";
	gouwuchelist.className = "show z5";
	gouwuche.onmouseleave = function(){
		gouwuche.style.border = "1px solid #e3e4e5";
		gouwuchelist.className = "hide";
	}
};

//main-main_top-breadcrumb面包屑导航条下拉内容
//var bc_li1 = dI("bc_li1");
//var bc_li1list = dI("bc_li1List");
//bc_li1.onmouseenter = function(){
//	bc_li1.style.backgroundColor = "#999395";
//	bc_li1list.className = "show";
//	bc_li1.onmouseleave = function(){
//		bc_li1.style.backgroundColor = "#6e6568";
//		bc_li1list.className = "hide";
//	}
//}
//统一添加事件
var headerBreadcrumbArr = [];
//headerBreadcrumbArr[0] = dI("bc_li1");
//headerBreadcrumbArr[1] = dI("bc_li2");
//headerBreadcrumbArr[2] = dI("bc_li3");
//headerBreadcrumbArr[3] = dI("bc_li4");
//headerBreadcrumbArr[4] = dI("bc_li5");
//headerBreadcrumbArr[5] = dI("bc_li6");
//headerBreadcrumbArr[6] = dI("bc_li7");
//headerBreadcrumbArr[7] = dI("bc_li8");
//headerBreadcrumbArr[8] = dI("bc_li9");
//headerBreadcrumbArr[9] = dI("bc_li10");
//headerBreadcrumbArr[10] = dI("bc_li11");
//headerBreadcrumbArr[11] = dI("bc_li12");
//headerBreadcrumbArr[12] = dI("bc_li13");
//headerBreadcrumbArr[13] = dI("bc_li14");
//headerBreadcrumbArr[14] = dI("bc_li15");
for(var m=0; m<15; m++){
	headerBreadcrumbArr[m] = dI("bc_li"+(m+1));
}
for(var i=0; i<headerBreadcrumbArr.length; i++){
	(function(){
		var li = headerBreadcrumbArr[i];
		var li_idName = headerBreadcrumbArr[i].id;
		var list = dI(li_idName+"List");
		li.onmouseenter = function(){
			li.style.backgroundColor = "#999395";
			list.className = "show z5";
			li.onmouseleave = function(){
				li.style.backgroundColor = "#6e6568";
				list.className = "hide";
			}
		}
	})();
}

//main-top-news-tab新闻内容选项卡
//var newstab = dI("news_tab");
//var newstabLi = newstab.getElementsByTagName("li");
//var news = dI("news");
//var newschildrenArr = nodelistToArray(news.children);
//var newsDiv = newschildrenArr.slice(1);//剔除第一个ul子元素，只留选项卡的div
//for(var i = 0; i < newstabLi.length; i++) {
//  newstabLi[i].index = i;
//  newstabLi[i].onmouseover = function() {
//      for(var i = 0; i < newstabLi.length; i++) {
//          newstabLi[i].className = "";
//      }
//      this.className = "active";
//      for(var j = 0; j < newsDiv.length; j++) {
//          newsDiv[j].className = "hide";
//      }
//      newsDiv[this.index].className = "show";
//  }        
//}
//优化后
switchTab("news");



//service与servicein服务活动框的上卷下拉效果
$("#serviceSlideupEle").mouseenter(function(){
	var $service = $("#service");
	var $servicein = $("#servicein");
	$service.slideUp();
	$servicein.slideDown();
});
$("#servicein-close").click(function(){
	var $service = $("#service");
	var $servicein = $("#servicein");
	$service.slideDown(1000);
	$servicein.slideUp(1000);
})

//main-top-servicein-tab服务活动框选项卡
//var serviceintab = dI("servicein_tab");
//var serviceintabLi = serviceintab.getElementsByTagName("li");
//var servicein = dI("servicein");
//var serviceinchildrenArr = nodelistToArray(servicein.children);
//var serviceinDiv = serviceinchildrenArr.slice(1);//剔除第一个ul子元素，只留选项卡的div
//for(var i = 0; i < serviceintabLi.length; i++) {
//  serviceintabLi[i].index = i;
//  serviceintabLi[i].onmouseover = function() {
//      for(var i = 0; i < serviceintabLi.length; i++) {
//          serviceintabLi[i].className = "";
//      }
//      this.className = "active";
//      for(var j = 0; j < serviceinDiv.length; j++) {
//          serviceinDiv[j].className = "hide";
//      }
//      serviceinDiv[this.index].className = "show";
//  }        
//}
//优化后
switchTab("servicein");

//main-top-servicein-huafei-tab话费选项卡
//var huafeitab = dI("huafei_tab");
//var huafeitabLi = huafeitab.getElementsByTagName("li");
//var huafei = dI("huafei");
//var huafeichildrenArr = nodelistToArray(huafei.children);
//var huafeiDiv = huafeichildrenArr.slice(1);//剔除第一个ul子元素，只留选项卡的div
//for(var i = 0; i < huafeitabLi.length; i++) {
//  huafeitabLi[i].index = i;
//  huafeitabLi[i].onmouseover = function() {
//      for(var i = 0; i < huafeitabLi.length; i++) {
//          huafeitabLi[i].className = "";
//      }
//      this.className = "active";
//      for(var j = 0; j < huafeiDiv.length; j++) {
//          huafeiDiv[j].className = "hide";
//      }
//      huafeiDiv[this.index].className = "show";
//  }
//}
switchTab("huafei");

//huafeiSelect话费选择
function huafeiSelect(){
	var data={
		10: "￥9.8-￥11.0",
		20: "￥19.6-￥21.0",
		30: "￥29.4-￥31.0",
		50: "￥49.0-￥50.0",
		100: "￥98.0-￥100.0",
		200: "￥196.0-￥200.0",
		300: "￥294.0-￥300.0",
		500: "￥490.0-￥500.0",
	}
	var source = dI("huafei_select");
	var selected = source.options[source.selectedIndex].value;
	var target = dI("huafei_output");
	target.innerHTML = data[selected];
}
dI("huafei_select").onchange = huafeiSelect;
//liuliangSelect流量选择
function liuliangSelect(){
	var data={
		inprov:{
			50: "￥9.0-￥10.0",
			100: "￥19.0-￥20.0",
			200: "￥29.0-￥30.0",
			300: "￥39.0-￥40.0",
			500: "￥49.0-￥50.0",
		},
		outprov:{
			50: "￥10.0-￥11.0",
			100: "￥20.0-￥21.0",
			200: "￥30.0-￥31.0",
			300: "￥40.0-￥41.0",
			500: "￥50.0-￥51.0",
		}
	}
	var sourceProv = dI("liuliang_prov_select");
	var selectedProv = sourceProv.options[sourceProv.selectedIndex].value;
	var source = dI("liuliang_select");
	var selected = source.options[source.selectedIndex].value;
	var target = dI("liuliang_output");
	target.innerHTML = data[selectedProv][selected];
}
dI("liuliang_prov_select").onchange = liuliangSelect;
dI("liuliang_select").onchange = liuliangSelect;

//main-top-servicein-jipiao-tab机票选项卡
//var jipiaotab = dI("jipiao_tab");
//var jipiaotabLi = jipiaotab.getElementsByTagName("li");
//var jipiao = dI("jipiao");
//var jipiaochildrenArr = nodelistToArray(jipiao.children);
//var jipiaoDiv = jipiaochildrenArr.slice(1);//剔除第一个ul子元素，只留选项卡的div
//for(var i = 0; i < jipiaotabLi.length; i++) {
//  jipiaotabLi[i].index = i;
//  jipiaotabLi[i].onmouseover = function() {
//      for(var i = 0; i < jipiaotabLi.length; i++) {
//          jipiaotabLi[i].className = "";
//      }
//      this.className = "active";
//      for(var j = 0; j < jipiaoDiv.length; j++) {
//          jipiaoDiv[j].className = "hide";
//      }
//      jipiaoDiv[this.index].className = "show";
//  }        
//}
//优化后
switchTab("jipiao");

//国内机票选择输入框
	//单程-往返-单选切换
dI("dmtradio").onchange = function(){
	var dmtoneway = dI("dmtoneway");
	var dmtround = dI("dmtround");
	if(dmtoneway.checked==true){
		dI("dmtarrivedate").style.display = "none";
	}else{
		dI("dmtarrivedate").style.display = "inline-block";
	}
}
	//出发-到达-城市交换
dI("dmtcitychange").onclick = function(){
	var dmtdepartcity = dI("dmtdepartcity");
	var dmtarrivecity = dI("dmtarrivecity");
	var dpvalue = dmtdepartcity.value.trim();
	var arvalue = dmtarrivecity.value.trim();
	dI("dmtdepartcity").value = arvalue;
	dI("dmtarrivecity").value = dpvalue;
}

//国际机票选择输入框
	//单程-往返-单选切换
dI("innradio").onchange = function(){
	var innoneway = dI("innoneway");
	var innround = dI("innround");
	if(innoneway.checked==true){
		dI("innarrivedate").style.display = "none";
	}else{
		dI("innarrivedate").style.display = "inline-block";
	}
}
	//出发-到达-城市交换
dI("inncitychange").onclick = function(){
	var inndepartcity = dI("inndepartcity");
	var innarrivecity = dI("innarrivecity");
	var dpvalue = inndepartcity.value.trim();
	var arvalue = innarrivecity.value.trim();
	dI("inndepartcity").value = arvalue;
	dI("innarrivecity").value = dpvalue;
}

//京东秒杀-倒计时
function countDown(){
	var myDate = new Date();
	var hours = myDate.getHours();
	var minutes = myDate.getMinutes();
	var seconds = myDate.getSeconds();	
	countdownHours = 3-hours%4;
	countdownMinutes = 60-minutes;
	countdownSeconds = 60-seconds;
	dI("countdownhours").innerHTML = countdownHours;
	dI("countdownminutes").innerHTML = countdownMinutes;
	dI("countdownseconds").innerHTML = countdownSeconds;
}
setInterval(countDown,1000);



//gather-top-tab排行榜选项卡--原生js写法
//var top_wraptab = dI("top_wrap_tab");
//var top_wraptabLi = top_wraptab.getElementsByTagName("li");
//var top_wrap = dI("top_wrap");
//var top_wrapchildrenArr = nodelistToArray(top_wrap.children);
//var top_wrapDiv = top_wrapchildrenArr.slice(1);//剔除第一个ul子元素，只留选项卡的div
//for(var i = 0; i < top_wraptabLi.length; i++) {
//  top_wraptabLi[i].index = i;
//  top_wraptabLi[i].onmouseover = function() {
//      for(var i = 0; i < top_wraptabLi.length; i++) {
//          top_wraptabLi[i].className = "";
//      }
//      this.className = "active";
//      for(var j = 0; j < top_wrapDiv.length; j++) {
//          top_wrapDiv[j].className = "hide";
//      }
//      top_wrapDiv[this.index].className = "show";
//  }        
//}

//改成jquery写法
//nodelistToArray-把得到的类数组nodelist转换为数组的方法函数
//jQuery.fn.nodelistToArray = function(){
//	var arr = []; 
//	for(var i=0; i<$(this).length; i++){ 
//		arr.push($(this)[i]); 
//	} 
//	return arr; 
//}
//var $top_wraptab = $("#top_wrap_tab");
//var $top_wraptabLi = $top_wraptab.find("li");
//var $top_wrap = $("#top_wrap");
//var top_wrapchildrenArr = $top_wrap.children().nodelistToArray();
//var top_wrapDiv = top_wrapchildrenArr.slice(1);//剔除第一个ul子元素，只留选项卡的div
//for(var i = 0; i < $top_wraptabLi.length; i++) {
//  $top_wraptabLi[i].index = i;
//  $top_wraptabLi[i].onmouseover = function() {
//      for(var i = 0; i < $top_wraptabLi.length; i++) {
//          $top_wraptabLi[i].className = "";
//      }
//      this.className = "active";
//      for(var j = 0; j < top_wrapDiv.length; j++) {
//          top_wrapDiv[j].className = "hide";
//      }
//      top_wrapDiv[this.index].className = "show";
//  }        
//}


switchTab("top_wrap");//注意必须加上双引号




//浏览器页面固定元素
	//fixed_search搜索框显示
$(window).scroll(function(){
	var top = $(document).scrollTop();
	var $fixed_search = $("#fixed_search");
	var $seckill = $("#seckill");
	var itemTop = $seckill.offset().top;
	if(top>itemTop){
		$fixed_search.slideDown();
	}else{
		$fixed_search.slideUp();
	}
});
	//fixed_bottom底部链接显示
$(window).scroll(function(){
	var top = $(document).scrollTop();
	var $fixed_bottomlink = $("#fixed_bottomlink");
	var $coupon = $("#coupon");
	var itemTop = $coupon.offset().top;
	if(top>itemTop){
		$fixed_bottomlink.slideDown();
	}else{
		$fixed_bottomlink.slideUp();
	}
});
	//fixed_locatenav定位导航条显示
$(window).scroll(function(){
	var top = $(document).scrollTop();
	var $fixed_locatenav = $("#fixed_locatenav");
	var $split1 = $("#split1");
	var itemTop = $split1.offset().top;
	if(top>itemTop-400){
		$fixed_locatenav.fadeIn(800);
	}else{
		$fixed_locatenav.fadeOut();
	}
});
	//fixed_locatenav定位导航条切换 定位-滚动事件
$(window).scroll(function(){
	var top = $(document).scrollTop();//获取滚动距离
	var $fixed_locatenav_list = $("#fixed_locatenav_list");	//获取导航条
	var locatespot = $(".locatespot");//获取定位点元素
	var currentId = "";//用于赋--当前所在楼层（locatespot）id--的值
	locatespot.each(function(){
		var locatespotTop = $(this).offset().top;
		if(top>locatespotTop-200){//当（当前滚动距离） 大于 （楼层高度 ）的时候
			currentId = "#" + $(this).attr("id");//给currentId赋当前楼层的id值
//			假设top = 2000
//			locatespotTop1 = 10
//			locatespotTop2 = 200
//			locatespotTop3 = 1500
//			locatespotTop4 = 2500
//			locatespotTop5 = 3500
//			每一次满足(top>locatespotTop)都会重新给currentId赋值
//			最后currentId = "#locatespot3"
		}else{//当不满足的时候就可以离开遍历了,节省资源
			return false;
		}
	})
	//下面要实现一个功能--给当前楼层赋class.active属性
	//然后给其他的楼层删除class.active属性
	var activeLink = $("#fixed_locatenav_list").find(".active");//找到当前具有class.active的楼层的li
	if(currentId&&activeLink.find("a").attr("href")!=currentId){//先判断currentId有值
														//然后判断其是否与当前楼层不相同，如果相同就没必要操作了
		activeLink.removeClass("active");//把当前的class.active去掉
		$("#fixed_locatenav_list").find("[href="+currentId+"]").parent().addClass("active");//给所在楼层的li加class.active
		
	}	
})
	//fixed_locatenav定位导航条 定位-点击事件-页面滚动
//$("#fixed_locatenav_list_item1").click(function(){
//	var currentId = $(this).find("a").attr("href");
//	var itemTop = $(currentId).offset().top;
//	$("body").animate({
//		scrollTop:itemTop,
//	},600);
//});
//$("#fixed_locatenav_list_item2").click(function(){
//	var currentId = $(this).find("a").attr("href");
//	var itemTop = $(currentId).offset().top;
//	$("body").animate({
//		scrollTop:itemTop,
//	},600);
//});
//$("#fixed_locatenav_list_item3").click(function(){
//	var currentId = $(this).find("a").attr("href");
//	var itemTop = $(currentId).offset().top;
//	$("body").animate({
//		scrollTop:itemTop,
//	},600);
//});
//$("#fixed_locatenav_list_item4").click(function(){
//	var currentId = $(this).find("a").attr("href");
//	var itemTop = $(currentId).offset().top;
//	$("body").animate({
//		scrollTop:itemTop,
//	},600);
//});
//$("#fixed_locatenav_list_top").click(function(){
//	var currentId = $(this).find("a").attr("href");
//	var itemTop = $(currentId).offset().top;
//	$("body").animate({
//		scrollTop:itemTop,
//	},600);
//});
//统一添加事件
$("#fixed_locatenav_list").find('li').click(function(){
	var currentId = $(this).find("a").attr("href");
	var itemTop = $(currentId).offset().top;
	$("body").animate({
		scrollTop: itemTop-80,
	},600);
});

	//fixed_toolbar_backtotop
$("#fixed_toolbar_backtotop").click(function(){
	var currentId = $(this).find("a").attr("href");
	var itemTop = $(currentId).offset().top;
	$("body").animate({
		scrollTop: itemTop,
	},600);
});

	//fixed_toolbar左拉右卷效果
var toolbarItem = $(".fixed_toolbar_item");
toolbarItem.each(function(){
	$(this).mouseenter(function(){
		$(this).find("div").slideRightShow();
	})
	$(this).mouseleave(function(){
		$(this).find("div").slideRightHide();
	})
})