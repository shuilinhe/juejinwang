<template>
  <div id="main-leftside">
				<ul>
					<li>
						<img src="../img/点赞.png" >
					</li>
					<li>
						<img src="../img/信息.png" >
					</li>
					<li>
						<img src="../img/收藏.png" >
					</li>
					<li>
						<img src="../img/转发.png" >
						<div style="width:32px;height:1px; background-color:rgb(228,230,235);margin:13px 8px;padding-left:5px;"></div>
					</li>
					<!-- <hr style=" display:inline-block;width: 30px; color:rgb(228,230,235); margin-left: 10px;"> -->
					<li>
						<img src="../img/举报.png" >
					</li>
					<li>
						<img src="../img/沉浸阅读.png" >
					</li>
				</ul>
			</div>
</template>

<script>

export default {
    name:'ZuoCe'

}
</script>

<style>
#main-leftside ul li{
	list-style-type:none ;

}
#main-leftside ul li img{
	width:20px;
	background-color:white;
	border-radius:25px;
	border:1px solid white;
	margin:5px;
	padding:15px;
	overflow: hidden;
}
.main-leftside{
    position: relative;
  
}
.main-leftside ul{
    display: block;
    width: 48px;
    height: 429px;
    float: left;
	position: absolute;
    /* position: relative;
    top:200px;
    left:84px; */
   
}
#main-leftside ul li img:hover{
	opacity:0.8;
	filter:alpha(opacity=80);
}
</style>