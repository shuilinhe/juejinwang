	// 登录
	function login(){
		var div2 = document.getElementsByClassName("div2")[0];
		div2.style.display = "block";
	}
	
	// 叉号颜色
	function test1(xxx){
		var x1 = document.getElementById("div3-1");
		var x2 = document.getElementById("div3-2");
		var x3 = document.getElementById("div3-3");
		var x4 = document.getElementById("div3-4");
		if (xxx==="111"){
			x1.style.color="#000";
			x2.style.color="#000";
			x3.style.color="#000";
			x4.style.color="#000";
		}
		else {
			x1.style.color="#cdcdcd";
			x2.style.color="#cdcdcd";
			x3.style.color="#cdcdcd";
			x4.style.color="#cdcdcd";
		}
	}
	// 表情变化
	function test2(xxx) {
		if (xxx==="111"){
			var x = document.getElementById("img1");
			x.src = "img/name.svg";
			x.style.marginTop="10px";
		}
		else {
			var x = document.getElementById("img1");
			x.src = "img/online.svg";
			x.style.marginTop="10px";
		}
	}
	// 表情变化
	function test3(xxx) {
		if (xxx==="111"){
			var x = document.getElementById("img1");
			x.src = "img/pwd.svg";
			x.style.marginTop="10px";
		}
		else {
			var x = document.getElementById("img1");
			x.src = "img/online.svg";
			x.style.marginTop="10px";
		}
	}
	
	window.onload = function(){
		// 显示当前时间段
		// var time = document.getElementById("time");
		// var now=new Date();    //获取当前时间
		// var hour=now.getHours();//获取当前小时数
		// if(hour<12){
		// 	time.innerHTML = "早上好！";
		// }else if(hour>=12 && hour<18){
		// 	time.innerHTML = "下午好！";
		// }else{
		// 	time.innerHTML = "晚上好！";
		// }
		
		// 在文本框中显示不同地区的编号
		var lis = document.getElementsByClassName("phone-li");
		for(var i=0;i<lis.length;i++){
			lis[i].onclick = function(){
				// this表示当前的li
				span2 = this.children[1].innerHTML;
				// 取字符串除了“+”的部分
				var number = this.parentNode.parentNode.parentNode.children[0].children[0];
				number.value = span2.slice(1);
			};
		}
		
		// 选择地区
		var image = document.getElementsByClassName("img-down");
		for(var i=0;i<image.length;i++){
			image[i].onclick = function(){
				// 箭头转换
				if(this.getAttribute("src") == "./img/down.png"){
					this.setAttribute("src","./img/up.png");
				}else{
					this.setAttribute("src","./img/down.png");
				}
				// 下拉列表展开与关闭
				var area = this.parentNode.parentNode.children[3];
				if(area.style.display == 'block'){
					area.style.display = 'none';
				}else{
					area.style.display = 'block';
				}
			}
		}
		
		// 点击叉号退出登录页面
		var div2 = document.getElementsByClassName("div2")[0];
		var div31 = document.getElementById("div3-1");
		var div32 = document.getElementById("div3-2");
		var div33 = document.getElementById("div3-3");
		var div34 = document.getElementById("div3-4");
		div31.onclick = function(){
			div2.style.display = 'none';
		};
		div32.onclick = function(){
			div2.style.display = 'none';
		};
		div33.onclick = function(){
			div2.style.display = 'none';
		};
		div34.onclick = function(){
			div2.style.display = 'none';
		};
		
		// 切换登录界面
		var form1 = document.getElementById("form1");
		var form2 = document.getElementById("form2");
		var form3 = document.getElementById("form3");
		var form4 = document.getElementById("form4");
		
		var other = document.getElementById("other");
		var phone = document.getElementById("login-phone");
		var forgetPsd = document.getElementById("forgetPsd");
		var email = document.getElementById("email");
		var account = document.getElementsByClassName("account-login");
		var phoneReset = document.getElementById("phone-reset");
		// 其他方式登录
		other.onclick = function(){
			form1.style.display = "none";
			form2.style.display = "block";
		};
		// 手机登录
		phone.onclick = function(){
			form2.style.display = "none";
			form1.style.display = "block";
		};
		// 忘记密码
		forgetPsd.onclick = function(){
			form2.style.display = "none";
			form3.style.display = "block";
		};
		// 邮箱重置密码
		email.onclick = function(){
			form3.style.display = "none";
			form4.style.display = "block";
		};
		// 账密登录
		account[0].onclick = function(){
			form3.style.display = "none";
			form2.style.display = "block";
		};
		
		account[1].onclick = function(){
			form4.style.display = "none";
			form2.style.display = "block";
		};
		// 手机重置密码
		phoneReset.onclick = function(){
			form4.style.display = "none";
			form3.style.display = "block";
		};

	}

	