	// 封装事件函数
	function getNodelist(nodeList,eventType,fn){
			if(arguments.length == 2){
				fn = arguments[1]
				eventType = "onclick"
			}
			// if(arguments.length == 3){
			// 	for(var n = 0;n<arguments.length;n++){
			// 		if(typeof arguments[n] == "object"){
			// 			var a = arguments[n]
			// 		}
			// 		if(typeof arguments[n] == "string"){
			// 			var b = arguments[n]
			// 		}
			// 		if(typeof arguments[n] == "function"){
			// 			var c = arguments[n]
			// 		}
			// 	}	
			// }
			for(var i = 0; i<nodeList.length;i++){
				nodeList[i][eventType] = fn
			}
	}
	// 获取节点方法
	function $(selector){
	var str = selector.slice(1)
	if(selector[0] == "."){
		return document.getElementsByClassName(str)
	}
	if(selector[0] == "#"){
		return document.getElementById(str)
	}
	if(selector[0] != "." && selector[0] != "#"){
		return document.getElementsByTagName(selector)
	}
	}
	// 获取16进制颜色的方法
	function getColor(){
		var result = "#"
		var arr = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
		for(var i=0;i<6;i++){
			var newColor = Math.floor(Math.random() * 16)
			result += arr[newColor]
		}
		return result	
	}
	// 返回insertAfter的节点方法
	function insertAfter(newElement,obj){
		var parent=obj.parentNode
		if (parent.lastChild == obj) {
			parent.appendChild(newElement)
		} 
		else{
			parent.insertBefore(newElement,obj.nextSibling)
		}
	}
	// 倒计时方法
	function daojishi(){
		var nowTime = new Date()
		var overTime = new Date()
		var ri = overTime.setDate(30)
		var month = overTime.setMonth(0)
		var hour = overTime.setHours(18)
		var minute = overTime.setMinutes(0)
		var second = overTime.setSeconds(0)
		var miao = (overTime.getTime() - nowTime.getTime())/1000
		var t = Math.floor(miao/86400)
		var h = Math.floor((miao-86400*t)/3600)
		var m = Math.floor((miao-86400*t-3600*h)/60)
		var s = Math.floor(miao-86400*t-3600*h-60*m)
		if(t<10){
			t = "0"+t
		}
		if(h<10){
			h = "0"+h
		}
		if(m<10){
			m = "0"+m
		}
		if(s<10){
			s = "0"+s
		}
		shi.innerHTML = h
		fen.innerHTML = m
		miaoL.innerHTML = s
	}
		