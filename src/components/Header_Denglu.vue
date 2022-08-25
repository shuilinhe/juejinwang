<template>
  		<header>
			<a href="juejinPage.html">
				<img class="logo" src="../img/logo.svg" alt="稀土掘金">
			</a>
			<nav class="first-nav">
				<ul class="leftside1">
					<li>
						<a href="juejinPage.html">首页</a>
					</li>
					<li>
						<a href="#">沸点</a>
					</li>
					<li>
						<a href="javascript:;">课程</a>
					</li>
					<li>
						<a href="javascript:;">直播</a>
					</li>
					<li>
						<a href="javascript:;">活动</a>
					</li>
					<li>
						<a href="javascript:;">商城</a>
					</li>
					<li>
						<a href="javascript:;">APP</a>
					</li>
					<li>
						<a href="javascript:;">插件</a>
					</li>
				</ul>
				<ul class="rightside">
					<li class="search1i">
						<form id="search-box">
							<input type="text" name="search" id="searchInput" placeholder="探索稀土掘金"/>
							<img src="../img/search.png" id="searchIcon">
						</form>
					</li>
					<li>
						<div id="chuangzao">
							<button type="button" id="btn">创作者中心</button>
							<button type="button" id="btn-bottom">
								<div id="arrow-bottom">
									<ul class="arrow-ul">
										<li>写文章</li>
										<li>发沸点</li>
										<li>写代码</li>
									</ul>
								</div>
							</button>
						</div>
					</li>
					<li>
						<div id="vip">
							<img src="../img/会员.svg" id="vip-img"/>
							<div id="vip-title">会员</div>
						</div>
					</li>
					<li>
						<div id="remind">
							<a id="remindlogo"><img src="../img/提醒.png" ></a>
						</div>
					</li>
					<li>
						<img id="individual" src="https://p9-passport.byteacctimg.com/img/mosaic-legacy/3796/2975850990~300x300.image" >
					</li>
				</ul>
			</nav>
		</header>
</template>

<script>
export default {
    name:'Header_Denglu'

}
window.onload = function(){
				var btn = document.getElementById('btn-bottom');
				var ul = document.getElementsByClassName('arrow-ul')[0];
				btn.onclick = function(){
					if(ul.style.display == 'block'){
						ul.style.display = 'none';
					}else{
						ul.style.display = 'block';
					}
				}
			}
</script>


<style>
body{
	margin:0;
	padding:0;
	border:0px;
	background-color: #F2F2F2;
}
/*
#allnav{
	position:fixed;
	top:0;
	width:100%;
	z-index:100;
} */
header{
	width:100%;
	height: 68px;
	display: flex;
	border-bottom: 1px solid #f1f1f1;
	background-color: white;
}
.logo{
	display: inline-block;
	width: 107px;
	height: 22px;
	width: auto;
	height: 22px;
	margin-left: 80px;
	margin-top: 25px;
}
.logo,.leftside1,.rightside{
	list-style: none;
	display: flex;
	align-items: center;
}
.leftside1{
	float: left;
	position: relative;
	left:50px;
	display: inline-block;
	height: 60px;
	width: 500px;
	/* margin:16px 0 0 0 ; */
	/* margin-bottom: 10px; */
}
.leftside1 li{
	float: left;
	display: inline;
	margin-right:10px ;
}

.rightside{
	display: inline-block;
	position: relative;
	left:100px;
	
	/* margin:10px 0 0 0; */
	float: left;
	/* padding-left:200px; */
	/* margin-bottom: 0; */
}
.leftside1 li,.rightside li{
	float: left;
	display: inline;
	margin: 10px;
}
.leftside1 li a{
	font-size: 14px;
	/* 设置下划线与文字之间的距离 */
	padding-bottom: 20px;  
}
.leftside1 li a:hover{
	/* 设置下边框 */
	color:black;
	border-bottom:2px solid rgb(0,127,255); 
}
.leftside1 li a:link{
	color:#687079;
}
.leftside1 :first-child a{
	color: #1e80ff;
}
.leftside1 :first-child a:hover{
	color: black;
}
a{
	text-decoration: none;
}    
#search-box{
	width: 300px;
	display: flex;
}
#searchInput{
	width:300px;
	border-radius:5px;
	border:1px solid lightgrey;
}
#searchInput:hover{
	outline:none;
	border:2px solid lightgrey;
}
#searchInput:focus{
	outline:none;
	border:1px solid #1CA4FF;
}
#searchIcon{
	width: 14px;
	padding:6px 10px;
	margin: 5px 5px 5px -38px;
	float:right;
	background-color: #f4f5f5;
}
#chuangzao{
	display: flex;
	border-radius: 5px;
}
#btn{
	width: 90px;
	height: 35px;
	color: white;
	padding: 0;
	font-size: 14px;
	border-top-left-radius: 3px;
	border-bottom-left-radius: 3px;
	background-color: rgb(2, 133, 255);
	border: 1px solid rgb(2, 133, 255);
}
#btn:hover{
	background-color: #416bf2;
}
#btn-bottom{
	width:25px;
	background-color: rgb(2, 133, 255);
	border: 1px solid rgb(2, 133, 255);
	border-left:1px solid lightgrey;
	border-top-right-radius: 3px;
	border-bottom-right-radius: 3px;
}
#btn-bottom:hover{
	background-color: #416bf2;
}
#arrow-bottom{
	width: 0;
	height:0;
	border-top: 5px solid white; /* 下边框的长度|高,以及背景色 */  
	border-left: 5px solid transparent;  /* 左边框的宽 */  
	border-right: 5px solid transparent; /* 右边框的宽 */  
	position:absolute;
}
.arrow-ul{
	width:100px;
	height:100px;
	list-style:none;
	padding:0;
	margin:0;
	position:relative;
	z-index: 200;
	top: 12px;
	left:-100px;
	border:2px solid lightgrey;
	background-color: white;
	display: none;
}
.arrow-ul li{
	width:70px;
	margin:0;
	padding:8px 15px;
	font-size:14px;
}
.arrow-ul li:hover{
	background-color: #D3D3D3;
}
#vip{
	text-align: center;
	display: flex;
}
#vip-title{
	margin: 5px;
	color: #86909c;
	font-size:15px;
}
#remindlogo img{
	width:30px;
	overflow: hidden;
}
#remind a :hover{
	transform: translateY(-50px);
	/* img先向y轴负方向偏移50px（隐藏了），然后经过滤镜处理颜色的“新”图片再向y轴正方向偏移50px*/
	filter: drop-shadow(grey 0 50px);
}
#individual{
	width: 34px;
	border-radius: 20px;
}

</style>