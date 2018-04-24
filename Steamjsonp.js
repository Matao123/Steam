		// ----------------------------侧边栏雪碧图逻辑-----------------------	

		// 侧边栏小雪碧图
		var $iLsit = $(".gutter2").find("i")
		// 枚举背景图数
		for(var i = 0;i<$iLsit.length;i++){
			// 判断position值
			$iLsit[i].style.backgroundPosition = -(i*16)+"px"
		}
			



  		// ---------------------------table选项卡逻辑---------------------------
      	
      	var suo = false
      	var a = 0
      	// 鼠标移上事件
      	$(".home_leftcol>a").mouseenter(function(){
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



		var chart1 = document.getElementById("chart1")	// 第一个轮播图
		var scheme = chart1.firstElementChild	// 大图的模板
		var home_maincap = scheme.nextElementSibling // 弹出层的模板
		var carousel_items = chart1.getElementsByClassName("carousel_items")[0] // 轮播图盒子
		var app_name = carousel_items.getElementsByClassName("app_name") // 游戏名
		var popupName = carousel_items.getElementsByTagName("h4")	// 弹出层游戏名
		var contentImg = carousel_items.getElementsByClassName("contentImg") // 左边图片盒子
		var screenshots_nav = carousel_items.getElementsByClassName("screenshots_nav") // 右边图片盒子
		var substanceImg = carousel_items.getElementsByClassName("substanceImg") // 弹出层图片盒子
		var label = carousel_items.getElementsByClassName("label") // 游戏标签
		var released = carousel_items.getElementsByClassName("released")  // 发行时间
		var evaluating = carousel_items.getElementsByClassName("evaluating") // 评价
		var evaluationNumber = carousel_items.getElementsByClassName("evaluationNumber") // 评测数
		var rebate = carousel_items.getElementsByClassName("discount_pct") // 折扣
		var costPrice = carousel_items.getElementsByClassName("discount_original_price") // 原价
		var rulingPrice = carousel_items.getElementsByClassName("discount_final_price") // 现价
		function callbackfn(data){
			for(var i in data){
				// 克隆大图
				newscheme = scheme.cloneNode(true)
				// 插入轮播图盒子
				carousel_items.appendChild(newscheme)
				// 克隆弹出层
				newhome_maincap = home_maincap.cloneNode(true)
				carousel_items.appendChild(newhome_maincap)
				newschemeList = carousel_items.getElementsByClassName("scheme")
				var gameId = data[i].gameId
				newschemeList[i].setAttribute("gameId",gameId)
				// 第一个大图追加focus让其显示
				newschemeList[0].className = "scheme focus"
				// 实时更新游戏名
				var appName = data[i].name
				app_name[i].innerHTML = appName
				popupName[i].innerHTML = appName
				// 实时更新游戏链接地址
				var url = data[i].url
				newschemeList[i].setAttribute("href","javascript:void(0)")
				// 实行更新图片路径
				var imgUrl = data[i].imgUrl
				var leftImg = contentImg[i].getElementsByTagName("img")
				var rightImg = screenshots_nav[i].getElementsByTagName("img")
				var popupImg = substanceImg[i].getElementsByTagName("img")
				leftImg[0].setAttribute("src",imgUrl[0])
				leftImg[1].setAttribute("src",imgUrl[1])
				leftImg[2].setAttribute("src",imgUrl[2])
				leftImg[3].setAttribute("src",imgUrl[3])
				rightImg[0].setAttribute("src",imgUrl[0])
				rightImg[1].setAttribute("src",imgUrl[1])
				rightImg[2].setAttribute("src",imgUrl[2])
				rightImg[3].setAttribute("src",imgUrl[3])
				popupImg[0].setAttribute("src",imgUrl[0])
				popupImg[1].setAttribute("src",imgUrl[1])
				popupImg[2].setAttribute("src",imgUrl[2])
				popupImg[3].setAttribute("src",imgUrl[3])
				// 实时更新游戏标签
				var datalabel = data[i].label
				for(var j = 0;j< datalabel.length;j++){
					var span = document.createElement("span")
					label[i].appendChild(span)
					var spanList = label[i].getElementsByTagName("span")
					spanList[j].innerHTML = datalabel[j]
				}
				// 实时更新游戏发行时间
				var date = data[i].date
				var arr = date.split("-")
				released[i].innerHTML = arr[0]+"年"+arr[1]+"月"+arr[2]+"日"
				// 实时更新游戏评测
				var evaluate = data[i].evaluate
				if(evaluate == 1){
					evaluating[i].innerHTML = "好评如潮"
					evaluating[i].className = "evaluating Ravereviews"
				}
				if(evaluate == 2){
					evaluating[i].innerHTML = "特别好评"
					evaluating[i].className = "evaluating Ravereviews"
				}
				if(evaluate == 4){
					evaluating[i].innerHTML = "褒贬不一"
					evaluating[i].className = "evaluating Mixed"
				}
				// 实时更新游戏评测数
				var evaluatingCount = data[i].evaluatingCount
				var digit = String(evaluatingCount)
				if(digit.length < 4){
					evaluationNumber[i].innerHTML = digit
				}
				if(digit.length >= 4){
					var comma = Math.ceil(digit.length/3)-1
					var b = ""
					for(var a = 1;a<comma+1;a++){
						symbolLength = digit.slice(-3)
						digit = digit.slice(0,digit.length-3)
						b = "," + symbolLength + b 
					}
					digit = String(evaluatingCount)
					var t = digit.length - symbolLength.length*comma
					evaluationNumber[i].innerHTML = digit.slice(0,t) + b
				}
				// 实时更新右边的平台图片
				var platform = data[i].platform
				var win = carousel_items.getElementsByClassName("platform_win")[i]
				var mac = carousel_items.getElementsByClassName("platform_mac")[i]
				var linux = carousel_items.getElementsByClassName("platform_linux")[i]
				for(var b in platform){
					if(platform[b] == "Windows"){
						win.style.display = "inline-block"
					}
					if(platform[b] == "Mac OS"){
						mac.style.display = "inline-block"
					}
					if(platform[b] == "Steam"){
						linux.style.display = "inline-block"
					}
				}
				// 实时更新游戏折扣、原价和现价
				var discount = data[i].discount
				var originPrice = data[i].originPrice
				var price = data[i].price
				if(discount == 0){
					rebate[i].innerHTML = ""
					costPrice[i].innerHTML = ""
				}
				if(discount !== 0){
					rebate[i].innerHTML = discount*100 +"%"
					costPrice[i].innerHTML ="￥"+originPrice
				}
				rulingPrice[i].innerHTML ="￥"+price
			}

			chart1.removeChild(scheme)
			chart1.removeChild(home_maincap)
			// 轮播图函数
			var isAnimation = false

			// 自动生成小圆点
			for(var j = 0; j < newschemeList.length;j++){
				//  生成小圆点
				var $obj = $("<span></span>")
				//  插入每个小圆点的父级里
				$obj.appendTo($(".dot").eq(0))
				if(j == 0){
					// 小圆点矫正位置
					$obj.addClass("focus")
				}
			}

			// 初始化索引值
			for(var i = 0; i < newschemeList.length;i++){
				//  每个轮播图里的大图片
				var $liList = $(".carousel_container").eq(0).find(".carousel_items").find(".scheme");
				//  每个轮播图里的小圆点
				var $spanList = $(".carousel_container").eq(0).find(".dot").find("span");
				//  枚举每个轮播图的大图片数
				for(var j = 0; j < $liList.length; j++){
					//  大图片插入非法数字
					$liList.eq(j).attr("index",j)
					//  小圆点插入非法数字
					$spanList.eq(j).attr("index",j)
				}
			}

			function changeImg(index,obj){
				var $navList = $("#chart1").find(".dot").find("span");
				// 隐藏所有的图片
				$liList.hide();
				$liList.removeClass("focus");
				$navList.removeClass("focus");
				// 矫正图片位置，正确位置图片显示
				$liList.eq(index).addClass("focus")
				$liList.eq(index).fadeIn();
				$navList.eq(index).addClass("focus")
			}

			//  小圆点点击事件
			$(".dot").eq(0).find("span").click(function(){
				if(!isAnimation){
					// 当前点击的轮播图里的大图片
					$liList = $(".carousel_container").eq(0).find(".carousel_items").find(".scheme");
					//  变量n为当前点击小圆点的非法数字
					var n = this.getAttribute("index");
					// 枚举大图片数
					for(var i = 0; i < $liList.length; i++){
						if($liList.eq(i).hasClass("focus")){
							isAnimation = true
							changeImg(n,$(this))
						}
					}
				}
				isAnimation = false
			})

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

			// ----------------------轮播图点右边左边对应显示-------------------------
			var $contentImg = $(".contentImg").find("li")    // 左边的图片
			var $screenImg = $(".screenshots").find("img")   // 右边的图片左边显示的第一张
			var m = 0
			$screenImg.mouseenter(function(){
				// 枚举左边所有li里的图片
				for(var i=0;i < $contentImg.length;i++){
					// 左边所有li里的图片加上非法数字
					$contentImg.eq(i).attr("index",i)
					// 右边所有img加上非法数字
					$screenImg.eq(i).attr("index",i)
					m = $(this).attr("index")
				}
				// 图片矫正到正确位置
				$contentImg.eq(m).fadeIn(200)
				// 鼠标离开右边图片
			}).mouseleave(function(){
				// 左边显示的这一张隐藏
				$contentImg.eq(m).hide()
				$(".contentImg").find(".focus").show()
			})



			
			if(getCookie("gameId") == undefined){
				var cookienewArr = [];
			}
			else{
				var cookienewArr = getCookie("gameid").split(",")
			}
			$("#chart1 .scheme").click(function(){
				var gameId = $(this).attr("gameid")
				if(getCookie("gameId") == undefined){
					var cookieArr = []
				}
				else{
					var cookieArr = getCookie("gameid").split(",")
				}
				for(var i = 0;i<cookieArr.length;i++){
					if(gameId == cookieArr[i]){
						return;
					}
				}
				cookienewArr.push(gameId)
				var d = new Date();
				d.setDate(d.getDate() + 30)
				document.cookie = "gameId=" + String(cookienewArr) + ";expires=" + d
			})
				

		}


		function getCookie(parameter){
			//1.获取到要找的属性在字符串中的起始位startIndex
			//2.获取到要找的属性所对应的属性值在字符串中的终止位置endIndex
			//3.从起始位startIndex，截取到终止位endIndex
			//4.以=为切割点，将第三步截取到的字符串切割为长度2的数组，数组下标[1]就是寻找属性对应的属性值.
			//获取设置过的cookie
			var str = document.cookie
			var startIndex = str.indexOf(parameter)
			var endIndex = str.indexOf(";",startIndex)
			if(endIndex == -1){
				endIndex = str.length
			}
			var result = str.substring(startIndex,endIndex).split("=")[1]
			return result
		}

		function callbackId(d){
			for(var i in d){
				var name = d[i].name
				var url = d[i].url
				var newa = $("<a></a>")
				newa.html(name)
				newa.attr("href",url)
				$(".gutter .kong").prepend(newa)
			}
			// ($(".gutter a").length)
		}		


		window.onload = function(){
			var script = document.createElement("script")
			script.setAttribute("src","http://ie19852360.51mypc.cn?callback=callbackfn")
			//插入到页面里
			document.getElementsByTagName("head")[0].appendChild(script)

			// 系列化cookie
			var str = getCookie("gameId")
			var script2 = document.createElement("script")
			script2.setAttribute("src","http://ie19852360.51mypc.cn?callback=callbackId&gameId=" + str)
			//插入到页面里
			document.getElementsByTagName("head")[0].appendChild(script2)

		}


		// 轮播图函数
		var isAnimation = false

		// 自动生成小圆点
		for(var i = 0; i < $(".carousel_container").length;i++){
			//  count为每个轮播图的图片数
			var count = $(".carousel_container").eq(i).find(".carousel_items .scheme").length;
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
			var $liList = $(".carousel_container").eq(i).find(".carousel_items .scheme");
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

		// 分装自动播放轮播图函数
		// function autoPlay(){
		// 	// 第一个轮播图里的大图片
		// 	$liList = $(".carousel_container").eq(0).find(".scheme");
		// 	// 枚举大图片数
		// 	for(var i = 0; i < $liList.length; i++){
		// 		// 判断图片当前位置
		// 		if($liList.eq(i).hasClass("focus")){
		// 			if(i < $liList.length - 1){
		// 				changeImg(i+1,$(".carousel_container").eq(0).find(".right"))
		// 			}
		// 			else{
		// 				changeImg(0,$(".carousel_container").eq(0).find(".right"))
		// 			}
		// 			break;
		// 		}
		// 	}
		// }
		// var auto = setInterval(function(){
		// 	autoPlay()
		// },3000)
		// $(".carousel_container").eq(0).mouseenter(function(){
		// 	clearInterval(auto)
		// }).mouseleave(function(){
		// 	auto = setInterval(function(){
		// 		autoPlay()
		// 	},3000)
		// })
	








