			

			// ----------------------------详情页轮播图------------------------------

			var $itemWrap = $(".highlight_strip_scroll")  	// 小图片父级(长条)
			var $baibian = $(".highlight_selector")			// 白边
			var $smallPhotos = $(".highlight_item")			// 小图片
			var $bigPhotos = $(".scheme")					// 大图片
			var adv = {};
			//当前所在的张数
			adv.m = 0
			//可视区域最左侧图片的下标
			adv.n = 0;
			adv.count = $smallPhotos.length;

			// 枚举所有的小图片数
			for(var i = 0;i < $smallPhotos.length;i++){
				// 每个大图片，小图片插入非法数字
				$smallPhotos.eq(i).attr("index",i)
				$bigPhotos.eq(i).attr("index",i)
			}

			function navType(){
				// 大图片全部隐藏并删除focus
				$bigPhotos.hide()
				$bigPhotos.removeClass("focus")
				// 对应的大图片渐显并添加focus
				$bigPhotos.eq(adv.m).fadeIn()
				$bigPhotos.eq(adv.m).addClass("focus")
			}

			// 小图片点击事件
			$smallPhotos.click(function(){
				// 调整adv.m的位置
				adv.m = $(this).attr("index")
				navType()
				baibianStatus(adv.m)
			})

			// 白边移动函数
			function baibianStatus(index){
				// 调整白边的左边距离
				$baibian.css({
					left:index*120
				})
			}


			function moveLeft(){
				var r = adv.count - adv.m
				var l = adv.m - 1
				if(r = adv.count - 1){
					$itemWrap.animate({
						"left":-(adv.count-5) * 120 
					},300)
				}
				if(l < adv.count - 4){
					$itemWrap.animate({
						"left":-(adv.m) * 120 
					},50)
				}
				adv.n = adv.m
			}

			// 长条向右移动函数
			function moveRight(){
				// 右边剩余的张数
				var r = adv.count - adv.m
				// 向下取整总张数除以5的商
				// var shang = Math.floor(adv.count/5)
				// 总张数除以5的余数
				// var x = adv.count - shang*5 
				// 判断右边剩余的张数是否大于余数
				// 判断右边剩余的张数是否大于5
				if(r > 5){
					$itemWrap.animate({
						"left":-(adv.m) * 120 
					},300)
				}
				else{
					if(adv.n !== adv.count - 5){
						$itemWrap.animate({
							"left":-(adv.count - 5) * 120 
						},300)
					}
				}
				// 调整adv.n的位置
				adv.n = adv.m;
			}

			// 向左点击事件
			$(".slider_left").click(function(){
				adv.m--
				// 判断当前图片位置是否为下一列显示的第一张
				if(adv.m < adv.count - 5){
					// 调整进度条
					$(".handle").css({
						left:(adv.m/5)*154
					})
					moveLeft()
				}
				// // 判断当前图片位置是否为最后一张
				if(adv.m == -1){
					adv.m = adv.count-1;
					// 调整进度条
					$(".handle").css({
						left: $(".slider").width() - $(".handle").width()
					})
					moveLeft()
				}
				baibianStatus(adv.m)
				navType()
			})

			// 向右点击事件
			$(".slider_right").click(function(){
				adv.m++
				// // 判断当前图片位置是否为最后一张
				if(adv.m == adv.count){
					adv.m = 0;
					// 调整进度条
					$(".handle").css({
						left:0
					})
					moveRight()
				}
				// 判断当前图片位置是否为下一列显示的第一张
				if(adv.m == adv.n + 5){
					// 调整进度条
					$(".handle").css({
						left:(adv.m/5)*154
					})
					moveRight()
				}
				baibianStatus(adv.m)
				navType()
			})



			var body = document.getElementsByTagName("body")[0]
			body.onselectstart = function(){
				return false
			}
			$(".handle").mousedown(function(event){
				var x = event.clientX
				var ml = parseInt(this.style.left)
				var _this = this
				var availableWidth = $(".slider").width() - $(this).width()
				window.onmousemove = function(event){
					var X  = event.clientX
					var newml = parseInt(_this.style.left)
					if(X - x + ml < 0){
						return
					}
					if(X - x + ml > availableWidth){
						return
					}
					else{
						_this.style.left = X - x + ml + "px"
					}
					var percent = Math.round(newml/availableWidth*100)/100
					$itemWrap.css({
						left : -(percent * ($itemWrap.width()-820))
					})
				}
				window.onmouseup = function(){
					window.onmousemove = null
					body.onselectstart = null
				}
			})


			// //  自动播放
			// var autoPlay = setInterval(function(){
	  //   		$(".slider_right").click()
	  //   	},3000)
	  //   	// 鼠标移上事件
	  //   	$(".highlight").mouseenter(function(){
	  //   		// 关闭计时器
	  //   		clearInterval(autoPlay)
	  //   	})
	  //   	// 鼠标离开事件
	  //   	$(".highlight").mouseleave(function(){
	  //   		// 开启计时器
	  //   		autoPlay = setInterval(function(){
	  //   			$(".slider_right").click()
	  //   		},3000)
	  //   	})