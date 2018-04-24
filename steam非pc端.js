	if("ontouchstart" in window){
		// 侧边栏
		var menu = document.getElementById("menu")
		var sidebar_left = document.getElementById("sidebar_left")
		if(parseInt($(document).width())>=481 && parseInt($(document).width())<=1024){
			$("#sidebar_left").css({
				left:"-30%"
			})
		}
		menu.onclick = function(){
			var mask = $("<div id='mask'></div>")
			mask.css({
				height:$("body").height()
			})
			mask.appendTo($("body"))
			$("#sidebar_right").show()
			if(parseInt($(document).width())>480){
				var t1 = setInterval(function(){
					var ml = parseInt(sidebar_left.style.left)
					if(ml<0){
						sidebar_left.style.left = ml+1+"%"
					}
					else{
						clearInterval(t1)
					}
				},10)
			}
			if(parseInt($(document).width()) < 480){
				var t2 = setInterval(function(){
					var ml = parseInt(sidebar_left.style.left)
					if(ml<0){
						sidebar_left.style.left = ml+5+"%"
					}
					else{
						clearInterval(t2)
					}
				},15)
			}
		}
		var sidebar_right = document.getElementById("sidebar_right")
		sidebar_right.onclick = function(){
			$("#mask").remove()
			$("#sidebar_right").hide()
			if(parseInt($(document).width())>480){
				var t3 = setInterval(function(){
					var ml = parseInt(sidebar_left.style.left)
					if(ml>-30){
						sidebar_left.style.left = ml-1+"%"
					}
					else{
						clearInterval(t3)
					}
				},10)
			}
			if(parseInt($(document).width()) < 480){
				var t4 = setInterval(function(){
					var ml = parseInt(sidebar_left.style.left)
					if(ml>-70){
						sidebar_left.style.left = ml-5+"%"
					}
					else{
						clearInterval(t4)
					}
				},15)
			}
		}
		// 菜单栏的下拉收起
		$("#btn_shop").click(function(){
			$(this).toggleClass("shop")
			if($(this).hasClass("shop")){
				$(this).css({
					backgroundColor:"#192533"
				})
				$(this).find("i")[0].style.transform = "rotate(180deg)";
				$("#shop").css({
					backgroundColor:"#192533"
				})
				$("#shop").animate({
					height:"20.5rem"
				})
			}
			else{
				$(this).css({
					backgroundColor:"transparent"
				})
				$(this).find("i")[0].style.transform = "rotate(0deg)";
				$("#shop").animate({
					height:"0"
				})
			}
			if($("#btn_shequ").hasClass("shequ")){
				$("#btn_shequ").removeClass("shequ")
				$("#btn_shequ").css({
					backgroundColor:"transparent"
				})
				$("#btn_shequ").find("i")[0].style.transform = "rotate(0deg)";
				$("#shequ").animate({
					height:"0"
				})
			}
		})
		$("#btn_shequ").click(function(){
			$(this).toggleClass("shequ")
			if($(this).hasClass("shequ")){
				$(this).css({
					backgroundColor:"#192533"
				})
				$(this).find("i")[0].style.transform = "rotate(180deg)";
				$("#shequ").css({
					backgroundColor:"#192533"
				})
				$("#shequ").animate({
					height:"17.1rem"
				})
			}
			else{
				$(this).css({
					backgroundColor:"transparent"
				})
				$(this).find("i")[0].style.transform = "rotate(0deg)";
				$("#shequ").animate({
					height:"0"
				})
			}
			if($("#btn_shop").hasClass("shop")){
				$("#btn_shop").removeClass("shop")
				$("#btn_shop").css({
					backgroundColor:"transparent"
				})
				$("#btn_shop").find("i")[0].style.transform = "rotate(0deg)";
				$("#shop").animate({
					height:"0"
				})
			}
		})
		$("#yourStore").click(function(){
			$(this).toggleClass("kong")
			if($(this).hasClass("kong")){
				$(".storeHomepage1").animate({
					height:"10.75rem"
				})
			}
			else{
				$(".storeHomepage1").animate({
					height:"0"
				})
			}
		})
		$("#game").click(function(){
			$(this).toggleClass("kong")
			if($(this).hasClass("kong")){
				$(".storeHomepage2").animate({
					height:"49.15rem"
				})
			}
			else{
				$(".storeHomepage2").animate({
					height:"0"
				})
			}
		})
		$("#software").click(function(){
			$(this).toggleClass("kong")
			if($(this).hasClass("kong")){

				$(".storeHomepage3").animate({
					height:"24.58rem"
				})
			}
			else{
				$(".storeHomepage3").animate({
					height:"0"
				})
			}
		})
		$("#hardware").click(function(){
			$(this).toggleClass("kong")
			if($(this).hasClass("kong")){
				$(".storeHomepage4").animate({
					height:"9.7rem"
				})
			}
			else{
				$(".storeHomepage4").animate({
					height:"0"
				})
			}
		})
		$("#video").click(function(){
			$(this).toggleClass("kong")
			if($(this).hasClass("kong")){
				$(".storeHomepage5").animate({
					height:"36.56rem"
				})
			}
			else{
				$(".storeHomepage5").animate({
					height:"0"
				})
			}
		})

		if(parseInt($(document).width()) < 480){
			$(".scheme")[0].style.width = document.documentElement.offsetWidth*0.96 + "px"
		}
	 	
	}