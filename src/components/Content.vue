<template>
<div class="container">
  <article class="dakuai">
    <div>
      <h1 class="datitle">前端怎么样限制用户截图？</h1>
      <div>
        <img class=user_header src="../img/users_img/1.jpeg">
        <div class="xiaozi">
          <div>
            <span class="username">正经程序员</span>
            <img class="dengji" src="../img/users_img/等级.png">
            <img src="../img/users_img/vip等级.svg">
          </div>
          <div class="time">2022年08月04日 09:39 · 阅读224</div>
        </div>
        <button class="guanzhu"><span>＋</span><span>关注</span></button>
      </div>
    </div>
    <img class="datu" src="../img/users_img/封面.webp">
    <div class="markdown">
      <p>
        携手创作，共同成长！这是我参与「掘金日新计划 · 8 月更文挑战」的第3天，<a class="huodong" src="https://juejin.cn/post/7123120819437322247">点击查看活动详情</a>
      </p>
      <p style="height:52.5px ;">
        做后台系统，或者版权比较重视的项目时，产品经常会提出这样的需求：能不能禁止用户截图？有经验的开发不会直接拒绝产品，而是进行引导。
      </p>
      <p style="height:52.5px ;">
        先了解初始需求是什么？是内容数据过于敏感，严禁泄漏。还是内容泄漏后，需要溯源追责。不同的需求需要的方案也不同。来看看就限制用户截图，有哪些脑洞？
      </p>
      <div class="list">
      <div class="item" id="heading-0">
        <h1 class="p_h1" >有哪些脑洞</h1>
        <p>v站和某乎上的大佬给出了不少脑洞，我又加了点思路。</p>
      </div>
      <div class="item" id="heading-1">
        <h2 class="p_h2">1.基础方案，阻止右键保存和拖拽</h2>
        <p style="height:52.5px ;">这个方案是最基础，当前可只能阻拦一些小白用户。如果是浏览器，分分钟调出控制台，直接找到图片url。还可以直接ctrl+p，进入打印模式，直接保存下来再裁减。</p>
      </div>
      <div class="item" id="heading-2">
        <h2 class="p_h2">2.失焦后加遮罩层</h2>
        <p style="height:52.5px ;">
          这个方案有点意思，看敏感信息时，必须鼠标点在某个按钮上，照片才完整显示。如果失去焦点图片显示不完整或者直接遮罩盖住。
        </p>
      </div>
      <div class="item" id="heading-3">
        <h2 class="p_h2">3.高速动态马赛克</h2>
        <p style="height:105px ;">
          这个方案是可行的，并且在一些网站已经得到了应用，在视频或者图片上随机插像素点，动态跑来跑去，对客户来说，每一时刻屏幕上显示的都是完整的图像，靠用户的视觉残留看图或者视频。即时手机拍照也拍不完全。实际应用需要优化的点还是挺多的。比如用手机录像就可以看到完整内容，只是增加了截图成本。
        </p>
        <p>下面是一个知乎上的方案效果。（<a class="huodong" src="https://link.juejin.cn/?target=https%3A%2F%2Fwww.zhihu.com%2Fquestion%2F417108591%2Fanswer%2F1450568587">原地址</a>）：</p>
        <img style="width:610px;height: 751px; " src="../img/users_img/pp.webp">
      </div>
      <div class="item" id="heading-4">
        <h1 class="p_h1">正经需求vs方案</h1>
        <p style="height:52.5px ;">
          其实限制用户截图这个方案本身就不合理，除非整个设备都是定制的，在软件上阉割截图功能。为了这个需求添加更复杂的功能对于一些安全性没那么高的需求来说，有点本末倒置了。
        </p>
        <p>下面聊聊正经方案：</p>
        <p style="height:52.5px ;">1.对于后台系统敏感数据或者图片，主要是担心泄漏出去，可以采用斜45度七彩水印，想要完全去掉几乎不可能，就是观感比较差。</p>
        <p style="height:52.5px ;">2.对于图片版权，可以使用现在主流的盲水印，之前看过腾讯云提供的服务，当然成本比较高，如果版权需求较大，使用起来效果比较好。</p>
        <p style="height:80px ;">3.视频方案，tiktok下载下来的时候会有一个水印跑来跑去，当然这个是经过处理过的视频，非原画，画质损耗也比较高。Netflix等视频网站采用的是服务端权限控制，走的视频流，每次播放下载加密视频，同时获得短期许可，得到许可后在本地解密并播放，一旦停止播放后许可失效。</p>
        <p style="height:52.5px ;">总之，除了类似于Android提供的截图API等底层功能，其他的功能实现都不完美。即使是底层控制了，一样可以拍照录像，没有完美的方案。不过还是可以做的相对安全。</p>
        <p class="p_jiewei">你还有什么新思路吗？有的话咱评论区见，欢迎点赞收藏关注，感谢！</p>
      </div>
    </div>
    </div>
    <div>
      <div class="tab_title">分类：</div><a class="fenlei" href="#"><span>前端</span></a>
      <div class="tab_title" style="margin-left:40px ;">标签：</div>
      <a class="biaoqian" href="#"><span>安全</span></a>
      <a style="width:66.229px ;" class="biaoqian" href="#"><span> JavaScript</span></a>
      <a class="biaoqian" href="#"><span>前端</span></a>
    </div>

  </article>

  <aside class="aside">
    <!-- <div class="point"></div> -->
    <div class="article_catelog">
                <div class="catelog_title">
                    目录
                </div>
                 <div class="point">
                            <p :style="{top:point+'px'}">
                               <i></i>
                            </p>
                        </div>
                        <div class="yihang" >
                            <a href="#heading-0" class="a-container" style="margin-left:10px; color:rgb(30,128,255)" >{{mulu1}} </a> 
                        </div>
                        <div class="yihang">
                            <a href="#heading-1" class="a-container" style="margin-left:21px;">{{mulu2}}</a>
                        </div>
                        <div class="yihang">
                            <a href="#heading-2" class="a-container" style="margin-left:21px;">{{mulu3}}</a>
                        </div>
                        <div class="yihang">
                            <a href="#heading-3" class="a-container" style="margin-left:21px;">{{mulu4}}</a>
                        </div>
                        <div class="yihang">
                            <a href="#heading-4" class="a-container" style="margin-left:10px;">{{mulu5}}</a>
                        </div>
    </div>
  </aside>
<!-- 
style="color:rgb(30,128,255)" -->

  </div>


</template>

<script>
export default {
  name: "Content",
  data(){
    return {
        mulu1:"有哪些脑洞",
        mulu2:"1.基础方案，阻止右键保存和拖拽",
        mulu3:"2.失焦后加遮罩层",
        mulu4:"3.高速动态马赛克",
        mulu5:"正经需求vs方案" ,
        
    }
  },

}
 window.onscroll = function () {
    //scrollTop就是触发滚轮事件时滚轮的高度
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    console.log("滚动距离" + scrollTop);
    const list = document.querySelectorAll('.a-');
    if (scrollTop < 300) {
      list.forEach(item => {
        item.classList = [];
      })
      list[0].classList.add('active')
    } else if (scrollTop > 300 && scrollTop < 400) {
      list.forEach(item => {
        item.classList = [];
      })
      list[1].classList.add('active')
    } else if (scrollTop > 400 && scrollTop < 500) {
      list.forEach(item => {
        item.classList = [];
      })
      list[2].classList.add('active')
    } else if (scrollTop > 500 && scrollTop < 600) {
      list.forEach(item => {
        item.classList = [];
      })
      list[3].classList.add('active')
    } else if (scrollTop > 600 && scrollTop < 1000) {
      list.forEach(item => {
        item.classList = [];
      })
      list[4].classList.add('active')
    } 
  }

</script>

<style>
.point{
    display: inline-block;
    width: 4px;
    height: 16px;
    margin-top:10px ;
    background-color: rgb(30,128,255);
    background-attachment:scroll ;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    float: left;
    position: absolute;
    
}
 .container {
      display: flex;
      align-items: flex-start;
      
    }

    .list {
      flex: 1;
    }

.yihang{
    width: 279px;
    height: 44px;
    margin-left: 11px;
    position: relative;
    

}
/* .a-container.active{
  color:rgb(30,128,255);
  
}
.a-container:active{
  color:rgb(30,128,255);
} */
/* .yihang::before.active{
  display: inline-block;
    width: 4px;
    height: 16px;
    background-color: rgb(30,128,255);
    background-attachment:scroll ;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
}
.yihang::before:active{
  display: inline-block;
    width: 4px;
    height: 16px;
    background-color: rgb(30,128,255);
    background-attachment:scroll ;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
} */
    

.dakuan{
  width: 1140px;
  height: 6854.3px;
  padding-bottom: 96px;
  margin-top: 21.204px;
  background-color:#F2F2F2 ;
  position: relative;
  left:270px;
  top:50px;


}

article{
  width: 755.920px;
  height: 2730.736px;
  padding: 32.040px 32.040px 39.960px 32.040px;
  background-color: white;
  /* margin-top: 100px; */

}

.datitle{
  color: rgb(37,41,51);
  display: block;
  font-size: 32.004px;
  font-weight: 600;
  font-family: -apple-system, system-ui, "Segoe UI", Roboto, Ubuntu, Cantarell, "Noto Sans", sans-serif, BlinkMacSystemFont, "Helvetica Neue", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", Arial
;
  margin-bottom: 25px;
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

.dengji{
  width: 35px;
  height: 16px;
}
.xiaozi{
  float: left;
}
.username{
  margin-top: -5px;
  float: left;
  color: rgb(81,87,103);
  display: block;
  width: 79.969px;
  height: 24px;
  line-height: 24px;
  font-size: 15.996px;
  font-family: -apple-system, system-ui, "Segoe UI", Roboto, Ubuntu, Cantarell, "Noto Sans", sans-serif, BlinkMacSystemFont, "Helvetica Neue", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", Arial;
}
.time{
  color: rgb(138,145,159);
  width: 400px;
  height: auto;
  font-size: 14.004px;
  letter-spacing: 1px;
  line-height: 22px;
  float: left;
  margin-top: 2px;

}

.guanzhu{
  display: flex;
  width: 68px;
  height: 32px;
  padding: 0 12px;
  border: 1px rgba(30,128,255,0.3) solid;
  border-radius: 4px;
  color: rgb(30,128,255);
  background-color: rgba(30,128,255,0.05);
  float:right;
  font-size: 14px;
  line-height: 32px;
}

.datu{
  width: 755.938px;
  height: 425.458px;
  margin-top: 20px;
}
.huodong{
  border-bottom: 1px rgb(145,109,213) solid;
  color:rgb(145,109,213);
  font-weight: bolder;
  font-size: 15px;
  font-family: -apple-system-font, BlinkMacSystemFont, "Helvetica Neue", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei UI", "Microsoft YaHei", Arial, sans-serif
;
}

p{
  color: rgb(51,51,51);
  display: block;
  font-size: 15px;
  letter-spacing: 2px;
  line-height: 26.25px;
  width: 755.938px;
  height: 26.250px;
  margin: 22px 0;
  font-family: -apple-system-font, BlinkMacSystemFont, "Helvetica Neue", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei UI", "Microsoft YaHei", Arial, sans-serif
;
  font-weight: 400;

}
.p_h1{
  display: block;
  border-left: 5px rgb(119,48,152) solid;
  color: rgb(51,51,51);
  width: 706.229px;
  height: 40.250px;
  padding-left: 10px;
  margin-top: 15.410px;
  margin-bottom: 5px;
  font-size: 23px;
  font-family: -apple-system-font,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Hiragino Sans GB,Microsoft YaHei UI,Microsoft YaHei,Arial,sans-serif;
  font-weight: bolder;
  letter-spacing: 2px;
  line-height: 40.25px;
}

.p_h2{
  display: block;
  width: 721.229px;
  height: 29.750px;
  border-left: 5px rgb(216,156,246) solid;
  margin: 17px 0;
  padding-left: 10px;
  color: rgb(51,51,51);
  font-size: 17px;
  font-weight: bolder;
  letter-spacing: 2px;
  line-height: 29.75px;
}

.p_jiewei{
  color: rgb(145,109,213);
  font-size: 15px;
  font-weight: bolder;
  letter-spacing: 2px;
}
.p_jiewei::after{
  content: "」";
}
.p_jiewei::before{
  content: "「";
}

.fenlei{
  width: 28px;
  height: 32px;
  padding: 0 12px;
  margin-bottom: 12px;
  margin-right: 8.004px;
  background-color: rgb(242,243,245);
  align-items: center;
  color: rgb(81,87,103);
  display: flex;
  border-radius: 4px;
  font-size: 14.004px;
  line-height: 32.0131px;
  float: left;

}
.tab_title{
  width: 42px;
  height: 44px;
  margin-right: 8px;
  color: rgb(81,87,103);
  font-family: -apple-system, system-ui, "Segoe UI", Roboto, Ubuntu, Cantarell, "Noto Sans", sans-serif, BlinkMacSystemFont, "Helvetica Neue", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", Arial
;
  font-size: 14px;
  line-height: 32.004px;
  float: left;

}

.biaoqian{
  display: flex;
  width: 28px;
  height: 32px;
  padding: 0 12px;
  margin-bottom: 12px;
  margin-right: 8.004px;
  align-items: center;
  background-color: rgb(234,242,255);
  border-radius: 4px;
  color:rgb(30,128,255);
  font-family: -apple-system, system-ui, "Segoe UI", Roboto, Ubuntu, Cantarell, "Noto Sans", sans-serif, BlinkMacSystemFont, "Helvetica Neue", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", Arial
;
  font-size: 14.004px;
  line-height: 32.0131px;
  float: left;
}


.markdown{
  background-image: linear-gradient(90deg,rgba(50,0,0,.05) 3%,transparent 0),linear-gradient(1turn,rgba(50,0,0,.05) 3%,transparent 0);;
  /* background-position-x: 50%,50%;
  background-position-y: 50%,50%; */
  background-position: 50%;
  background-size: 20px 20px;


}

.catelog_title{
  width: 260px;
  height: 24px;
  padding: 15.996px 0;
  margin: 0 20.004px;
  border-bottom: 1px rgb(228,230,235) solid;
  color: rgb(29,33,41);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  background-color: white;
  float: right;
  margin-bottom: 8px;
    }


* {
  padding: 0;
  margin: 0;
}

.aside{
    width: 300px;
    float: right;
    position: sticky;
    top:20px;
    margin-top:1040px;
    margin-left: 26px;

}



.article_catelog{
    width: 300px;
    height: 296.979px;
    background-color: white;
    border-radius: 4px;
    margin-left: 8px;
    position: static;
   
    
}
.Pmenus{
    display: inline-block;
}


.a-container{
    display: inline-block;
    padding: 8px;
    width: 251.094px;
    height: 22px;
    color:black;
    font-size: 14.004px;
    font-weight: 400;
    line-height: 22px;
    position: relative;
   
    overflow: hidden;

}
.a-container:hover{
    background-color: #f4f5f5;
}


.catalog-aTag{
    display: inline-block;
    color:rgb(51,51,51);
    width: 243px;
    height: 22px;
    padding: 8px;
    font-size: 14.004px;
    line-height: 22px;
    overflow: hidden;
}

.a-container:hover .catalog-aTag{
    background-color:rgba(228,230,235,0.5);
}

.litem:active .catalog-aTag{
    color:rgb(30,128,255) ;
}
.litem:visited .catalog-aTag{
    color:rgb(30,128,255) ;
}

.litem.active .catalog-aTag{
    color:rgb(30,128,255) ;
}

.pinglun{
    background-color: white;
    width: 755.920px;
    height: 200px;
    padding-left: 32.040px;
    padding-right: 32.040px;
    padding-bottom: 24px;
    padding-top: 8px;
    position: relative;
    top:20px;
  
    
}
.pl_header{
    color: rgb(37,41,51);
    font-size: 18px;
    font-weight: bolder;
    line-height: 30px;
    height: 30px;
    width: 755.920px;
    margin-bottom: 24px;
    margin-top: 20px;
}

.pl_img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 16px;
    float: left;
}
.srk{
    width: 588.562px;
    height: 48px;
    padding: 8px 12px;
    box-sizing: border-box;
    font-size: 14px;
    line-height: 22px;
    min-height: 64px;
    outline-style: none;
    outline-color: rgb(37,41,51);

}
.input_box{
    width: 700px;
    height: 80px;
    border: 1px rgb(242,243,245) solid;
    background-attachment: scroll;
    background-color:rgb(242,243,245) ;
    border-radius: 4px;
    color: rgb(51,51,51);
    float: left;
    padding: 8px 12px;
    box-sizing: border-box;
    overflow: hidden;
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

#btn-bottom:hover{
	background-color: #416bf2;
}

.catelog_title{
    width: 260px;
    height: 24px;
    padding: 15.996px 0;
    margin: 0 20.004px;
    border-bottom: 1px rgb(228,230,235) solid;
    color: rgb(29,33,41);
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    background-color: white;
    float: right;
    margin-bottom: 8px;
}
</style>