<template>
  	<div class="message-top">
        <div class="diyi">
						<a href="#">
							<img class="user_header" src="../img/users_img/1.jpeg" >
							<div class="title">
								<span class="name">正经程序员</span>
								<span class="rank">
									<img src="../img/users_img/等级.png" title="创作等级">
								</span>
								<div class="second-title">UI/UX @ 正经程序员</div>
							</div>
						</a>
                        </div>
                        <div class="getLike">
						<span>
							<img src="" >
						</span>
						<span>
							获得点赞
						</span>
                        <span> 2944</span>
					</div>

					<div class="byRead">
						<span>
							<img src="" >
						</span>
						<span>
							文章被阅读
							
						</span>
                        <span>508976</span>
					</div>
				
    </div>
				
</template>

<script>

export default {
    name:'Aside_Top'

}
</script>

<style>
.message-top{
    background-color: white;
    width: 260px;
    height: 143.979px;
    padding:20px ;
    margin-bottom: 20px;
    border-radius: 2px

}
.diyi{
    width: 260px;
    height: 48px;
    padding-bottom: 16.992px;
    border-bottom: 1px rgb(228,230,235) solid;
}
.title{
	width:150px;
	float:left;
	left:60px;
	margin:5px 14px;
	color:rbg(37,41,51);
    font-size:15.996px;
    font-weight: 500;
    
}
.rank img{
	width:35px;
}
.user_header{
  width: 39.99px;
  height: 39.99px;
  margin-right: 12px;
  background-color: rgb(238,238,238);
  background-position-x: 50%;
  background-position-y: 50%;
  border-radius: 50%;
  float: left;
}
.second-title{
	padding-top:5px;
	font-size:14px;
	color:rgb(37,41,51);
}
.getLike{
width: 260px;
height: 26px;
margin-top:16.992px;
}

/* .getLike span{
    display: block;
    width: 260px;
    height: 20px;
} */
.getLike,.byRead{
	width:260px;
	color:rgb(37,41,51);
    font-size: 14.004px;
}

.byRead{
    margin-top:8.004px;
}
a{
	text-decoration: none;
}
.title .name{
color:rgb(37,41,51);
font-size: 15.996px;
}
</style>