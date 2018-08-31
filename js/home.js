;$(function(){

	star($(".home-left"))
	star($(".home-right"))


	
	//星闪炼烁
	function star(parnetNode){
		for(var i = 0; i < 100; i++){
			var _span = $('<span class="home-star"></span>');
			parnetNode.append(_span);
			var Left = parseInt(Math.random()*parnetNode.offsetWidth());
			var Top = parseInt(Math.random()*parnetNode.offsetHeight());

			$(_span).css({left:Left+"px"});
			$(_span).css({top:Top+"px"});

			//随机大小
			var scale = Math.random() * 1.2;
			$(_span).css({transform:"scale("+scale+","+scale+")"});

			//闪烁时间
			var rate = Math.random() *1.5;
			$(_span).css({animationDelay:rate+"s"});
		}
	}
	
})