function swiperSlider(){
	var topSlider=new Swiper('#topSlider', {	//需要引入ID
        slidesPerView: 1,	//划动会划多少张
        centeredSlides: true,	//是否在中间
        autoplay: 3000,	//每隔3秒进行一个划动
        loop: true,	//循环划动
        autoplayDisableOnInteraction: true	//当我们手动划动时禁止自动划动
	});
}
swiperSlider();