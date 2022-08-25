<template>
  <header>
    <div class="toubu">
       <a>
           <img class="img-logo" src="../img/logo.svg">
       </a>
        <nav>
            <ul>
                <li>
                    <a href="shouye.html">{{name1}}</a>
                </li>
                <li>
                    <a href="shouye.html">{{name2}}</a>
                </li>
                <li>
                    <a href="shouye.html">{{name3}}</a>
                </li>
                <li>
                    <a href="shouye.html">{{name4}}</a>
                </li>
                <li>
                    <a href="shouye.html">{{name5}}</a>
                </li>
                <li>
                    <a href="shouye.html">{{name6}}</a>
                </li>
                <li>
                    <a href="shouye.html">{{name7}}</a>
                </li>
                <li>
                    <a href="shouye.html">{{name8}}</a>
                </li>
                <li>
                    <a href="shouye.html">{{name9}}</a>
                </li>
                <li>
                    <a href="shouye.html">{{name10}}</a>
                </li>
                <li>
                    <form class="search-form">
                        <input class="inputtext" type="search" maxlength="32" style="outline:none;">
                        <div>
                            <img class="soushou" src="../img/搜索.svg">
                        </div>
                    </form>
                </li>
                <li>
                    <div class="chuangzuodiv">
                        <button class="chuangzuobutton">创作者中心</button>
                    </div>

                </li>
                <li>

                        <div class="viptu">
                        <img class="vipimg" src="../img/vip.svg">
                        </div>
                        <div class="vipzi">会员</div>
                </li>
                <li>
                        <button class="denglubutton">登录</button>

                </li>
            </ul>
        </nav>

    </div>

</header>
</template>

<script>
export default {
    name:'Header',
    data(){
        return{
           name1:'首页',
           name2:'沸点',
           name3:'课程',
           name4:'直播',
           name5:'资讯',
           name6:'活动',
           name7:'开放社区',
           name8:'商城',
           name9:'APP',
           name10:'插件'
        }
    }
}
</script>

<style>
body{
    background-color:#F2F2F2 ;
    height: 3000px;
}
header{
    height:60px ;
    width: 100%;
    background-color: white;
    border-bottom: 1px #F2F2F2 solid;

}
.clearfix::before,
.clearfix::after{
    content: "";
    display: table;
    clear: both;
    }

.toubu{
    margin:5px auto;
    height: 60px;
    overflow: hidden;
}
.img-logo{
    display: block;
    width: 107px;
    height: 22px;
    margin-left: 100px;
    margin-right: 30px;
    margin-top: 18px;
    float: left;


}

header div ul li{
    display: inline;
}
header div ul li a{
    text-decoration: none;
    float: left;
    font-size: 13.93px;
    font-weight: 500;
    display: inline-block;
    height: 58px;
    line-height: 60px;
    margin-left: 12px;
    margin-right: 12px;
    color: #909090;

}
header div ul li a:hover{
    color: rgb(0,127,255);
    border-bottom: 2px rgb(0,127,255) solid;
}

header div ul li a:active{
    color: rgb(0,127,255);
}
.chuangzuodiv{
    width: 95px;
    height: 36px;
    float: left;
    margin-top: 10px;
    margin-left: 15px;
    margin-right: 30px;
}
.chuangzuobutton{
    width: 93px;
    height: 36px;
    padding-left: 10px;
    padding-right: 12px;
    float: left;
    font-size: 13.93px;
    color: white;
    background-color:rgb(0,127,255) ;
    margin-left: 10px;
    border-bottom-left-radius:3px ;
    border-top-left-radius:3px ;




}

.denglubutton{
    width: 70px;
    height: 36px;
    color: rgb(0,127,255);
    background-color: rgba(30,128,255,0.05);
    border: 1px rgba(30,128,255,0.3) solid;
    border-radius: 4px;
    float: left;
    padding: 3.6px 18px;
    margin:auto 30px;
    overflow: hidden;
    font-size: 14px;
    font-weight: 400;
    line-height: 23px;
    margin-top: 10px;

}

.search-form{
    width: 360px;
    height: 33.96px;
    border: 1px rgb(194,200,209) solid;
    border-radius: 4px;
    float: left;
    margin-top: 10px;
    margin-left: 50px;

}
.search-form:hover{
    border-color: grey;
}
.inputtext{
    float: left;
    width: 304px;
    height: 17.56px;
    border-color: rgb(138,145,159);
    font-size: 13px;
    color: #8a919f;
    padding-left: 12px;
    padding-top: 7.2px;
    padding-bottom: 7.2px;
    margin-top: 8px;
    outline: none;
}
.soushou{
    width: 15.96px;
    height: 15.96px;
    margin-top: 10px;
    margin-left: 20px;
    float: left;
}

.viptu{
    margin-top: 15px;
    float: left;
    margin-right: 10px;
}
.vipzi{
    margin-top: 22px;
    float: left;
    font-size: 13.93px;
    font-weight: 500;
    color: #909090;
}

</style>