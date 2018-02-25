// 侧边栏小雪碧图
		var $iLsit = $(".gutter2").find("i")
		// 枚举背景图数
		for(var i = 0;i<$iLsit.length;i++){
			// 判断position值
			$iLsit[i].style.backgroundPosition = -(i*16)+"px"
		}
		
		// 轮播图逻辑
		var isAnimation = false
		var arr = [0,0,0,0]
		var n = 0

		// 分装生成小圆点函数
							// 图片个数 小圆点父级
		function genericPoint(photos,speckParent){
			for(var i = 0;i<photos;i++){
				var $newSpan = $("<span></span>")
				$newSpan.attr("index",i)
				speckParent.append($newSpan)
			}
		}

		// 分装小圆点点击函数
							// 小圆点 图片对象
		function clickOnthedot(speck,object){
			speck.click(function(){
	        	if(!isAnimation){
	          		isAnimation = true;
	          		n = $(this).attr("index")
	          		object.hide()
      				speck.removeClass("focus")
      				speck.eq(n).addClass("focus")
      				object.eq(n).fadeIn(500)
	        	}
	        	isAnimation = false
	      	})
		}

      	// 分装向右点击函数
      				// 	右按钮 图片对象 小圆点
      	function right(right,object,speck){
      		right.click(function(){
      			if(!isAnimation){
      				isAnimation = true
      				object.hide()
      				speck.removeClass("focus")
      				if(n < object.length-1){
      					n++
      				}
      				else{
      					n=0
      				}
      				speck.eq(n).addClass("focus")
      				object.eq(n).fadeIn(400)
      			}
      			isAnimation = false
      		})
      	}

      	// 分装向左点击函数
      				// 	左按钮 图片对象 小圆点
      	function left(left,object,speck){
			left.click(function(){
				if(!isAnimation){
					isAnimation = true
					object.hide()
      				speck.removeClass("focus")
					if(n == 0){
						n = object.length-1
					}
					else{
						n--
					}
					speck.eq(n).addClass("focus")
      				object.eq(n).fadeIn(400)
				}
				isAnimation = false
			})
      	}

      	// 分装自动播放函数
      	function rightAuto(object,speck){
      		if(!isAnimation){
      				isAnimation = true
      				object.hide()
      				speck.removeClass("focus")
      				if(n < object.length-1){
      					n++
      				}
      				else{
      					n=0
      				}
      				speck.eq(n).addClass("focus")
      				object.eq(n).fadeIn(400)
      			}
      			isAnimation = false
      	}


      	// 调用函数给第一个轮播图
      	genericPoint($("#chart1 .scheme").length,$("#chart1 .dot"))
      	clickOnthedot($("#chart1 .dot span"),$("#chart1 .scheme"))
      	right($("#chart1 .right"),$("#chart1 .scheme"),$("#chart1 .dot span"))
      	left($("#chart1 .left"),$("#chart1 .scheme"),$("#chart1 .dot span"))
      	$("#chart1 .scheme").eq(0).show()
      	$("#chart1 .dot span").eq(0).addClass("focus")

      	// 调用函数给第二个轮播图
      	genericPoint($("#chart2 .scheme").length,$("#chart2 .dot"))
      	clickOnthedot($("#chart2 .dot span"),$("#chart2 .scheme"))
      	right($("#chart2 .right"),$("#chart2 .scheme"),$("#chart2 .dot span"))
      	left($("#chart2 .left"),$("#chart2 .scheme"),$("#chart2 .dot span"))
      	$("#chart2 .scheme").eq(0).show()
      	$("#chart2 .dot span").eq(0).addClass("focus")

      	// 调用函数给第三个轮播图
      	genericPoint($("#chart3 .curator_page").length,$("#chart3 .dot"))
      	clickOnthedot($("#chart3 .dot span"),$("#chart3 .curator_page"))
      	right($("#chart3 .right"),$("#chart3 .curator_page"),$("#chart3 .dot span"))
      	left($("#chart3 .left"),$("#chart3 .curator_page"),$("#chart3 .dot span"))
      	$("#chart3 .curator_page").eq(0).show()
      	$("#chart3 .dot span").eq(0).addClass("focus")

      	// 调用函数给第四个轮播图
      	genericPoint($("#chart4 .cheap").length,$("#chart4 .dot"))
      	clickOnthedot($("#chart4 .dot span"),$("#chart4 .cheap"))
      	right($("#chart4 .right"),$("#chart4 .cheap"),$("#chart4 .dot span"))
      	left($("#chart4 .left"),$("#chart4 .cheap"),$("#chart4 .dot span"))
      	$("#chart4 .cheap").eq(0).show()
      	$("#chart4 .dot span").eq(0).addClass("focus")

      	// table选项卡逻辑
      	var $merchandise = $(".merchandise").find("li")
      	var $home_leftcol = $(".home_leftcol")
      	var $tab_nav = $(".tab_nav")
      	$tab_nav.eq(0).addClass("prev")
      	var a= 0
      	// 鼠标移上事件
      	$home_leftcol.mouseenter(function(){
      		var $aLeft = $(this).children("a")
      		var $preview = $(this).next().find(".tab_preview")
	  		// 枚举(游戏)个数
	      	for(var i = 0;i<$aLeft.length;i++){
	      		// 插入非法数字
	      		$aLeft.eq(i).attr("index",i)
		    }
		  	// 鼠标移上事件
		  	$aLeft.mouseenter(function(){
	      		$aLeft.removeClass("app")
		      	$(this).addClass("app")
	      		// 右边全部隐藏
	      		$preview.hide()
	      		$preview.removeClass("focus")
	      		a = $(this).attr("index")
		      	// 鼠标移上的这个右边显示
		      	$preview.eq(a).fadeIn(100)
		      	$preview.eq(a).addClass("focus")
		  	})
      	})
      	// 选项卡鼠标点击事件
      	$merchandise.click(function(){
      		// 枚举选项卡个数
      		for(var i = 0;i<$merchandise.length;i++){
      			// 全部隐藏
      			$merchandise.eq(i).removeClass("tab_content")
      			$tab_nav.eq(i).removeClass("prev")
      		}
      		// 判断当前点击的内容
      		if($(this).html() == "新品与热门商品"){
      			// 让当前的显示
      			$merchandise.eq(0).addClass("tab_content")
      			$tab_nav.eq(0).addClass("prev")
      		}
      		// 判断当前点击的内容
      		if($(this).html() == "热销商品"){
      			// 让当前的显示
      			$merchandise.eq(1).addClass("tab_content")
      			$tab_nav.eq(1).addClass("prev")
      		}
      		// 判断当前点击的内容
      		if($(this).html() == "即将推出"){
      			// 让当前的显示
      			$merchandise.eq(2).addClass("tab_content")
      			$tab_nav.eq(2).addClass("prev")
      		}
      		// 判断当前点击的内容
      		if($(this).html() == "优惠"){
      			// 让当前的显示
      			$merchandise.eq(3).addClass("tab_content")
      			$tab_nav.eq(3).addClass("prev")
      		}
      	})

      	// 弹出层逻辑
		var $home_maincap = $(".home_maincap")   // 第一个轮播图对应的弹出层
		var b = 0
		// 鼠标移到第一个轮播图上时
		$("#chart1 .scheme").mouseenter(function(){
			// 枚举侧边弹出层个数
			for(var i = 0;i<$home_maincap.length;i++){
				// 弹出层全部隐藏
				$home_maincap.eq(i).hide()
			}
			// 当前显示的图片对应的弹出层显示
			$home_maincap.eq(n).fadeIn(200)
			$substanceImg = $home_maincap.eq(n).find("img")
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
			$home_maincap.hide()
			// 关闭计时器
			clearInterval(pop)
			for(var i=0;i<$substanceImg.length;i++){
				$substanceImg.eq(i).fadeOut(200)
			}
			b = 0
			$substanceImg.eq(b).fadeIn(300)
		})
		
		// 倒计时逻辑
		var spotlight = document.getElementById("spotlight")	
		function daojishi(){
			var nowTime = new Date()
			var overTime = new Date()
			var ri = overTime.setDate(22)
			var month = overTime.setMonth(1)
			var hour = overTime.setHours(18)
			var minute = overTime.setMinutes(0)
			var second = overTime.setSeconds(0)
			var miao = (overTime.getTime() - nowTime.getTime())/1000
			var t = Math.floor(miao/86400)
			var h = Math.floor((miao-86400*t)/3600)
			var m = Math.floor((miao-86400*t-3600*h)/60)
			var s = Math.floor(miao-86400*t-3600*h-60*m)
			// 判断天数是否小于10
			if(t<10){
				t = "0"+t
			}
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
			spotlight.innerHTML = t+" 天 "+h+"时"+m+"分"+
			s+"秒"
		}
		// 开启计时器
		setInterval(function(){
			daojishi()
		},1000)

		var autoplay = setInterval(function(){
			rightAuto($("#chart1 .scheme"),$("#chart1 .dot span"))
		},3000)
		$(".box").mouseenter(function(){
			clearInterval(autoplay)
		})
		$(".box").mouseleave(function(){
			autoplay = setInterval(function(){
				rightAuto($("#chart1 .scheme"),$("#chart1 .dot span"))
			},3000)
		})

		var $screenshots = $(".screenshots")
		var $contentImg = $(".contentImg").find("li")
		var $screenImg = $(".screenshots").find("img")
		var $firstFigure = $(".contentImg").find(".firstFigure")
		var m = 0
		var a = 0
		$screenImg.mouseenter(function(){
			for(var i=0;i < $contentImg.length;i++){
				$contentImg.eq(i).attr("index",i)
				$screenImg.eq(i).attr("index",i)
				a = $screenshots.eq(i).attr("index",i)
				m = $(this).attr("index")
			}
			$firstFigure.hide()
			$contentImg.eq(m).fadeIn(200)
		}).mouseleave(function(){
			$contentImg.eq(m).hide()
		})

		$screenshots.mouseleave(function(){
			$firstFigure.show()
		})