;$(function(){

	star($(".home-left"));
	star($(".home-right"));

	window.size = function(){
		star($(".home-left"));
		star($(".home-right"));
	}
	//星闪炼烁
	function star(parentNode){
		parentNode.html("");
		for(var i = 0; i < 40; i++){
			//创建星星
			var _span = $('<span class="home-star"></span>');
			parentNode.append(_span);
			var Left = parseInt(Math.random()*parentNode.offsetWidth());
			var Top = parseInt(Math.random()*parentNode.offsetHeight()/1.8);
			//随机位置
			$(_span).css({left:Left+"px"});
			$(_span).css({top:Top+"px"});
			//随机大小
			var scale = Math.random() * 1.8;
			$(_span).css({transform:"scale("+scale+","+scale+")"});
			//闪烁时间
			var rate = Math.random() *1.5;
			$(_span).css({animationDelay:rate+"s"});
		}
	}

	//滑动导航栏
	(function(){
		var menuLeft = 1;
		var selectLi = 0;
		$(".home-menu").find("li").hover(function(){
			$(".home-menu").find("li").removeClass("home-selectLi");
			$(this).addClass("home-selectLi");
			// $(".home-bgSpan").css({left:($(this).index()*175)+1+"px"});
			$(".home-bgSpan").animate({
				left:( $(this).index()*175 )+1+"px"
			},17);
		},function(){
			$(this).removeClass("home-selectLi");
			// $(".home-bgSpan").css({left:menuLeft+"px"});
			$(".home-menu").find("li").eq(selectLi).addClass("home-selectLi");
			$(".home-bgSpan").animate({
				left:menuLeft+"px"
			},17);
		})

		$(".home-menu").find("li").on("click",function(){
			menuLeft = ($(this).index()*175)+1;
			selectLi = $(this).index();
			$(this).addClass("home-selectLi");
			$(".home-bgSpan").css({left:($(this).index()*175)+1+"px"});
		})
	})();


	
	
	//登录框拖拽
	$(".home-login").drag([$('.home-login_move').getElement(0)])
	//登录框隐藏
	$(".home-login_close").on("click",function(){
		$(".home-login").css("display","none");
	})
	//登录框出现
	$(".home-headImg").on("click",function(e){
		var e = e || window.event;
		// e.stopPropagation()  //阻止冒泡
		// e.preventDefault()	//阻止默认事件
		$(".home-login").css("display","block");
		//登录框居中
		cneter($(".home-login"))
	})

})