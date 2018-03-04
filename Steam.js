		// ----------------------------侧边栏雪碧图逻辑-----------------------	

		// 侧边栏小雪碧图
		var $iLsit = $(".gutter2").find("i")
		// 枚举背景图数
		for(var i = 0;i<$iLsit.length;i++){
			// 判断position值
			$iLsit[i].style.backgroundPosition = -(i*16)+"px"
		}
			

		// ------------------------------轮播图逻辑---------------------------

		// 轮播图函数
		var isAnimation = false

		// 自动生成小圆点
		for(var i = 0; i < $(".carousel_container").length;i++){
			//  count为每个轮播图的图片数
			var count = $(".carousel_container").eq(i).find(".scheme").length;
			// 枚举每个轮播图的图片数
			for(var j = 0; j < count;j++){
				//  生成小圆点
				var $obj = $("<span></span>")
				//  插入每个小圆点的父级里
				$obj.appendTo($(".dot").eq(i))
				if(j == 0){
					// 小圆点矫正位置
					$obj.addClass("focus")
				}
			}
		}

		// 初始化索引值
		for(var i = 0; i < $(".carousel_container").length;i++){
			//  每个轮播图里的大图片
			var $liList = $(".carousel_container").eq(i).find(".scheme");
			//  每个轮播图里的小圆点
			var $spanList = $(".carousel_container").eq(i).find(".dot").find("span");
			//  枚举每个轮播图的大图片数
			for(var j = 0; j < $liList.length; j++){
				//  大图片插入非法数字
				$liList.eq(j).attr("index",j)
				//  小圆点插入非法数字
				$spanList.eq(j).attr("index",j)
			}
		}

		// 分装改变图片的函数
		function changeImg(index,obj){
			var $navList = $(obj).closest(".carousel_container").find(".dot").find("span");
			// 隐藏所有的图片
			$liList.hide();
			$liList.removeClass("focus");
			$navList.removeClass("focus");
			// 矫正图片位置，正确位置图片显示
			$liList.eq(index).addClass("focus")
			$liList.eq(index).fadeIn();
			$navList.eq(index).addClass("focus")
		}

		//  右边点击事件
		$(".right").click(function(){
			if(!isAnimation){
				// 当前点击的轮播图里的大图片
				$liList = $(this).closest(".carousel_container").find(".scheme");
				// 枚举大图片数
				for(var i = 0; i < $liList.length; i++){
					if($liList.eq(i).hasClass("focus")){
						isAnimation = true
						// 判断图片当前位置
						if(i < $liList.length - 1){
							changeImg(i+1,$(this))
						}
						else{
							changeImg(0,$(this))
						}
						break;
					}
				}	
			}
			isAnimation = false
		})

		//  左边点击事件
		$(".left").click(function(){
			if(!isAnimation){
				// 当前点击的轮播图里的大图片
				$liList = $(this).closest(".carousel_container").find(".scheme");
				// 枚举大图片数
				for(var i = 0; i < $liList.length; i++){
					if($liList.eq(i).hasClass("focus")){
						isAnimation = true
						// 判断图片当前位置
						if(i !== 0){
							changeImg(i-1,$(this))
						}
						else{
							changeImg($liList.length - 1,$(this))
						}
						break;
					}
				}
			}
			isAnimation = false
		})

		//  小圆点点击事件
		$(".dot span").click(function(){
			if(!isAnimation){
				// 当前点击的轮播图里的大图片
				$liList = $(this).closest(".carousel_container").find(".scheme");
				//  变量n为当前点击小圆点的非法数字
				var n = this.getAttribute("index");
				// 枚举大图片数
				for(var i = 0; i < $liList.length; i++){
					if($liList.eq(i).hasClass("focus")){
						isAnimation = true
						changeImg(n,$(this))
						break;
					}
				}
			}
			isAnimation = false
		})


		// ---------------------------自动播放第一个轮播图---------------------

		//  分装自动播放轮播图函数
		function autoPlay(){
			// 第一个轮播图里的大图片
			$liList = $(".carousel_container").eq(0).find(".scheme");
			// 枚举大图片数
			for(var i = 0; i < $liList.length; i++){
				// 判断图片当前位置
				if($liList.eq(i).hasClass("focus")){
					if(i < $liList.length - 1){
						changeImg(i+1,$(".carousel_container").eq(0).find(".right"))
					}
					else{
						changeImg(0,$(".carousel_container").eq(0).find(".right"))
					}
					break;
				}
			}
		}
		var auto = setInterval(function(){
			autoPlay()
		},3000)
		$(".carousel_container").eq(0).mouseenter(function(){
			clearInterval(auto)
		}).mouseleave(function(){
			auto = setInterval(function(){
				autoPlay()
			},3000)
		})


  		// ---------------------------table选项卡逻辑---------------------------
      	
      	var suo = false
      	var a = 0
      	// 鼠标移上事件
      	$(".home_leftcol a").mouseenter(function(){
	  		var $aLeft = $(this).closest(".home_leftcol").children("a")
	  		for(var i = 0;i<$aLeft.length;i++){
	  			$aLeft.eq(i).attr("index",i)
	  		}
			if(!$(this).hasClass("app")){
				var $focus = $(this).closest(".tab_nav").find(".home_rightcol .focus")
				var $liList = $(this).closest(".tab_nav").find(".home_rightcol li")
				a = $(this).attr("index")
				$aLeft.removeClass("app") 
				$focus.fadeOut(200,function(){
					$liList.hide()
					$liList.removeClass("focus")
					for(var b=0;b<$liList.length;b++){
						$liList.eq(b).stop()
					}
					$liList.eq(a).fadeIn(200)
					$liList.eq(a).addClass("focus")
				})
				$(this).addClass("app")
			}
		})
		

      	var $merchandise = $(".merchandise").find("li")
      	$(".tab_nav").eq(0).addClass("prev")
      	// 选项卡鼠标点击事件
      	$merchandise.click(function(){
      		var c = 0
      		// 枚举选项卡个数
      		for(var i = 0;i<$merchandise.length;i++){
      			$merchandise.eq(i).attr("index",i)
      			c = $(this).attr("index")
      			// 全部隐藏
      			$merchandise.eq(i).removeClass("tab_content")
      			$(".tab_nav").eq(i).removeClass("prev")
      		}
      		$(".home_leftcol").children("a").removeClass("app")
      		$(".home_leftcol").eq(c).children("a").eq(0).addClass("app")
      		$(".home_rightcol").children("li").removeClass("focus")
      		$(".home_rightcol").eq(c).children("li").eq(0).show()
      		$(".home_rightcol").eq(c).children("li").eq(0).addClass("focus")
      		// // 判断当前点击的li非法数字
      		if($(this).attr("index") == c){
      			// 让当前的li显示
      			$merchandise.eq(c).addClass("tab_content")
      			// 当前li对应的盒子显示
      			$(".tab_nav").eq(c).addClass("prev")
      		}
      	})


      	// --------------------------------弹出层逻辑-----------------------------

		// 鼠标移到第一个轮播图上时
		$("#chart1 .scheme").mouseenter(function(){
			var n = $(this).attr("index")
			var b = 0
			// 枚举侧边弹出层个数
			for(var i = 0;i < $(".home_maincap").length;i++){
				// 弹出层全部隐藏
				$(".home_maincap").eq(i).hide()
			}
			// 当前显示的图片对应的弹出层显示
			$(".home_maincap").eq(n).fadeIn(200)
			$substanceImg = $(".home_maincap").eq(n).find("img")
			$substanceImg.eq(0).show()
			// 开启计时器，隔两秒换一张图
			pop = setInterval(function(){
				// 当前显示的弹出层图片数
				for(var i=0;i<$substanceImg.length;i++){
					$substanceImg.eq(i).fadeOut(200)
				}
				if(b < $substanceImg.length-1){
					b++
				}
				else{
					b = 0
				}
				$substanceImg.eq(b).fadeIn(300)
			},1500)
		}).mouseleave(function(){
			// 弹出层隐藏 
			$(".home_maincap").hide()
			// 关闭计时器
			clearInterval(pop)
			for(var i=0;i<$substanceImg.length;i++){
				$substanceImg.eq(i).fadeOut(200)
			}
			b = 0
			$substanceImg.eq(b).fadeIn(300)
		})
		

		// --------------------------------倒计时函数-----------------------------

		// 倒计时函数
		function daojishi(){
			var nowTime = new Date()
			var overTime = new Date()
			var ri = overTime.setDate(1)
			var month = overTime.setMonth(2)
			var hour = overTime.setHours(18)
			var minute = overTime.setMinutes(0)
			var second = overTime.setSeconds(0)
			var miao = (overTime.getTime() - nowTime.getTime())/1000
			var t = Math.floor(miao/86400)
			var h = Math.floor((miao-86400*t)/3600)
			var m = Math.floor((miao-86400*t-3600*h)/60)
			var s = Math.floor(miao-86400*t-3600*h-60*m)
			// 判断小时是否小于10
			if(h<10){
				h = "0"+h
			}
			// 判断分钟是否小于10
			if(m<10){
				m = "0"+m
			}
			// 判断秒数是否小于10
			if(s<10){
				s = "0"+s
			}
			$("#spotlight").html(t+" 天 "+h+"时"+m+"分"+
			s+"秒")
		}
		// 开启计时器
		setInterval(function(){
			daojishi()
		},1000)


		// ----------------------轮播图点右边左边对应显示-------------------------

		//  第一个轮播图点右边左边对应显示
		var $contentImg = $(".contentImg").find("li")    // 左边的图片
		var $screenImg = $(".screenshots").find("img")   // 右边的图片
		var $firstFigure = $(".contentImg").find(".firstFigure")  // 左边显示的第一张
		var m = 0
		// 右边图片鼠标移上
		$screenImg.mouseenter(function(){
			// 枚举左边所有li里的图片
			for(var i=0;i < $contentImg.length;i++){
				// 左边所有li里的图片加上非法数字
				$contentImg.eq(i).attr("index",i)
				// 右边所有img加上非法数字
				$screenImg.eq(i).attr("index",i)
				m = $(this).attr("index")
			}
			// 左边显示的第一张全部隐藏
			$firstFigure.hide()
			// 图片矫正到正确位置
			$contentImg.eq(m).fadeIn(200)
			// 鼠标离开右边图片
		}).mouseleave(function(){
			// 左边显示的这一张隐藏
			$contentImg.eq(m).hide()
		})
		// 鼠标离开右边图片的大盒子
		$(".screenshots").mouseleave(function(){
			// 左边的第一张全部显示
			$firstFigure.show()
		})









