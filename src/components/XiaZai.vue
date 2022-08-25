<template>
  <div class="code">
					<a href="https://juejin.cn/app">
						<img src="../img/二维码.png" >
						<!-- <div class="content"> -->
							<div class="code-title">下载稀土掘金APP</div>
							<div class="code-slogan">一个帮助开发者成长的社区</div>
						<!-- </div> -->
					</a>
				</div>
</template>

<script>
export default {
    name:'XiaZai'

}
</script>

<style>
.code{
    width: 260px;
    height: 50px;
    padding: 20px;
    background-color: white;
    position: relative;
    border-radius: 2px
    /* overflow: hidden; */
}
.code img{
	width:50px;
	margin-right: 16px;
	float:left;
    display: inline-block;

}
.code-title{
    width: 168px;
    height: 24px;
    line-height: 24px;
    color:rgb(37,41,51);
	font-size:14px;
	padding-bottom:10px;
    position: absolute;
    left: 100px;
   /* float: right; */
}
.code-slogan{
	font-size:12px;
	color:#86909C;
     position: absolute;
    left: 100px;
    top:50px;
    
}

</style>