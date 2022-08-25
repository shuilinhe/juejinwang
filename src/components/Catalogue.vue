<template>
  <div class="container">
      <div class="article_catelog">
                <div class="catelog_title">
                    目录
                </div>
                 <ul>
                     <li id="primarymenu" class="Pmenus">
                        <!-- <div class="point">
                            <p :style="{top:point+'px'}">
                               <i></i>
                            </p>
                        </div> -->
                        <!-- <div class="yihang" v-for="(item,index) in lists" :key="index" @click="f_lis(index)">
                     <a class="a-container"  :href="'#heading-'+index"  :style="'margin-left:'+(4*item.level)+'px;'">
                          {{item.name}}
                        </a>
                        </div> -->
                        <div class="point"></div>
                        <div class="yihang" >
                            <a href="#heading-0" class="a-container" style="color:rgb(30,128,255)">{{mulu1}} </a>
                        </div>
                        <div class="yihang">
                            <a href="#heading-1" class="a-container" style="margin-left:18px;">{{mulu2}}</a>
                        </div>
                        <div class="yihang">
                            <a href="#heading-2" class="a-container" style="margin-left:18px;">{{mulu3}}</a>
                        </div>
                        <div class="yihang">
                            <a href="#heading-3" class="a-container" style="margin-left:18px;">{{mulu4}}</a>
                        </div>
                        <div class="yihang">
                            <a href="#heading-4" class="a-container">{{mulu5}}</a>
                        </div>
                       </li>
                   </ul>
           </div>
  </div>
</template>
<script>
export default {
  name:'Catalogue',
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


</script>





<style lang="scss" scoped>

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

* {
  padding: 0;
  margin: 0;
}

.aside{
    width: 300px;
    float: right;
    position: relative;
    top:-2500px;
    

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

.yihang{
    width: 279px;
    height: 44px;
    margin-left: 11px;
    position: relative;

}
.a-container{
    display: inline-block;
    padding: 8px;
    width: 251.094px;
    height: 22px;
    // padding-left: 26px;
    color: black;
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
