<template>
  <div link="black">
        <Header_Denglu class="header"></Header_Denglu>
        <Content class="content"></Content>
        <!-- <Catalogue class="mulu"></Catalogue> -->
        <Aside_Top class="aside1"></Aside_Top>
        <XiaZai class="aside2"></XiaZai>
        <div class="adv">
					<img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/default.640d9a7.png" >
				</div>
        <ZuoCe class="leftside"></ZuoCe>
        <R_Aticel class="ra"></R_Aticel>
        <PingLun class="apl"></PingLun>
        
   
  </div>
</template>

<script>
    //引入组件
     import Header_Denglu from './components/Header_Denglu'
    
    import Content from './components/Content'
    // import Catalogue from './components/Catalogue'
    import ZuoCe from './components/ZuoCe';
    import Aside_Top from './components/Aside_Top';
    import XiaZai from './components/XiaZai';
    import R_Aticel from './components/R_Aticel';
    import PingLun from './components/PingLun.vue';

   


    export default {
        name:'App',
        components:{
    Header_Denglu,
    Content,
    // Catalogue,
    ZuoCe,
    Aside_Top,
    XiaZai,
    R_Aticel,
    PingLun
    
}
    }
</script>

<style>
.header{
  width: 100%;
  height: 70px;
}

.content{
  position: absolute;
  left:250px;
  top: 90px

 
  /* margin-left: 250px;
  margin-top:20px; */
}
/* .mulu{
  float: right;
  position: absolute;
  left:1100px;
  top: 1130px; */
  /* bottom: 2800px;
  right: 250px; */
/* } */

.leftside{
  float: left;
  margin-left: 110px;
  width: 48px;
  height: 429px;
  position: absolute;
  top:200px;

  
}
.aside1{
  float:right;
  position: absolute;
  left: 1100px;
  top:90px;
}
.aside2{
  float:right;
  position: absolute;
  left: 1100px;
  top:290px;
}
.adv{
   float:right;
  position: absolute;
  left: 1100px;
  top:400px;
}
.adv img{
	width:300px;
}
.ra{
   float:right;
  position: absolute;
  left: 1100px;
  top:670px;
}
.apl{
  position: absolute;
   left:250px;
  top: 2890px;
  margin-top: 20px;
}
</style>