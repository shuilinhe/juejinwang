<template>
  
				<div class="relative-articles">
					<div class="bottom-title">相关文章</div>
					<div class="bottom-content">
						<a href="#">
                            <div class=ac_title >为什么有公司规定所有接口都用Post?</div>
                            <div class=ac_xiaozi>110点赞 · 108评论</div>
                        </a>
						<a href="#" style="height:70px">
                            <div class=ac_title style="height:44px">React18有哪些新特性——XDM 、开卷！</div>
                            <div class=ac_xiaozi>45点赞 · 1评论</div>
                        </a>
						<a href="#" style="height:70px">
                            <div class=ac_title style="height:44px">圣彼得堡悖论：你愿意花多少钱买一个发家致富的机会？</div>
                            <div class=ac_xiaozi>17点赞 · 2评论</div>
                        </a>
						<a href="#">
                            <div class=ac_title>倍投模型模拟：1w块博10w，靠谱吗？</div>
                            <div class=ac_xiaozi>10点赞 · 17评论</div></a>
						<a href="#">
                            <div class=ac_title>一款实用的前端截图工具</div>
                            <div class=ac_xiaozi>291点赞 · 39评论</div>
                        </a>
					</div>
				</div>
</template>

<script>
export default {
    name:'R_Aticel'

}
</script>

<style>
.relative-articles{
	height:440.969px;
    width: 300px;
    margin-bottom: 20px;
    background-color:white ;
    border-radius: 2px
}
.bottom-title{
	width: 260px;
    height: 24px;
    line-height: 24px;
    margin:0 20.004px;
    padding: 15.996px 0;
	border-bottom:1px solid #D3D3D3;
	font-size:15px;
}
.bottom-content a{
    display: block;
    width:260px ;
    height: 48px;
    padding: 8.004px 20.004px;
}
.ac_title{
    width: 260px;
    height: 22px;
    color:rgb(37,41,51);
    font-size: 14.004px;
    line-height: 22px;
    font-weight: 400;
}
.ac_xiaozi{
    font-size: 14px;
    color: rgb(144,144,144);
    width: 260px;
    height: 22px;
    margin-top:4px ;
}

</style>