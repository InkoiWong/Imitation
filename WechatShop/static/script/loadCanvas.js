//canvas加载图片
//图片还没加载出来时用那个转转转的gif代替
function loadCanvas(){
	var imglength = $("#productul").find("canvas").length;
    if (imglength > 0) {
        $("#productul").find("canvas").each(function () {
            var imgSrc = $(this).data("src");
            var imageObj = new Image();
            imageObj.canvs = $(this)[0];
            var cvs = imageObj.canvs.getContext('2d');
            if (cvs) {
                imageObj.onload = function () {
                    imageObj.canvs.width = this.width;
                    imageObj.canvs.height = this.height;
                    cvs.drawImage(this, 0, 0); //canvas方法加载图片
                    $(imageObj.canvs).css("background-image", "none"); //把原来的转转转gif去掉
                }
                imageObj.src = imgSrc;
            }
        })
    }
}
loadCanvas();